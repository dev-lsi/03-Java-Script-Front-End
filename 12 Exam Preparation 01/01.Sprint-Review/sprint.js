//TODO..."{assignee}:{taskId}:{title}:{status}:{estimatedPoints}"
const table = [];

class Row {

    constructor(assignee, taskId, title, taskStatus, estimatedPoints) {

        this.assignee = assignee;
        this.taskId = taskId;
        this.title = title;
        this.taskStatus = taskStatus;
        this.estimatedPoints = estimatedPoints;

    }
}





function solve([n, ...input]) {

    const newRows = input.slice(0, n);

    const commands = input.slice(n, input.length);

    addNewRows(newRows);

    doCommands(commands);

    printResult();

}

function printResult() {
    class Output {
        constructor(toDo, inProgress, codeReview, done) {
            this.toDo = toDo,
                this.inProgress = inProgress,
                this.codeRevieW = codeReview,
                this.done = done
        }
    }

    const output = new Output(0, 0, 0, 0);


    table.forEach(row => {
        const rs = row.taskStatus;
        
        const pts = Number(row.estimatedPoints);
        switch (rs) {
            case 'ToDo': output.toDo += pts; break;
            case 'Code Review': output.codeRevieW += pts; break;
            case 'In Progress': output.inProgress += pts; break;
            case 'Done': output.done += pts; break;

        }
    })

    console.log(`ToDo: ${output.toDo}pts`);
    console.log(`In Progress: ${output.inProgress}pts`);
    console.log(`Code Review: ${output.codeRevieW}pts`);
    console.log(`Done Points: ${output.done}pts`);

    const donePts = output.done;
    const otherPts = output.toDo + output.inProgress + output.codeRevieW;
    if (donePts > otherPts) {
        console.log(`Sprint was successful!`);
    } else {
        console.log('Sprint was unsuccessful...');
    }


    //"ToDo: {toDoTasksTotalPoints}pts"
    //"In Progress: {inProgressTasksTotalPoints}pts"
    //"Code Review: {codeReviewTasksTotalPoints}pts"
    //"Done Points: {doneTasksTotalPoints}pts"

}

function doCommands(commands) {


    commands.forEach(command => {

        const commandData = command.split(':');

        let isSuchAssignee = false;

        table.forEach(row => {
            if (row.assignee === commandData[1]) {
                isSuchAssignee = true;
            }
        })

        if (isSuchAssignee === true) {
            if (commandData[0] === 'Add New') { addNew(commandData) };
            if (commandData[0] === 'Change Status') { changeStatus(commandData) };
            if (commandData[0] === 'Remove Task') { removeTask(commandData) };
        } else {
            console.log(`Assignee ${commandData[1]} does not exist on the board!`);
        }
    });


}

function addNew(commandData) {

    const newAdd = new Row(commandData[1], commandData[2], commandData[3], commandData[4], commandData[5]);
    table.push(newAdd);
}

function changeStatus(commandData) {

    const ass = commandData[1];
    const id = commandData[2];
    newStatus = commandData[3];
    let isExistId = false;
    table.forEach(row => {

        if ((row.assignee === ass) && (row.taskId === id)) {

            isExistId = true;
            row.taskStatus = newStatus;

        }
    });

    if (!isExistId) {

        console.log(`Task with ID ${id} does not exist for ${ass}!`)

    }


}

function removeTask(commandData) {

    const index = commandData[2];

    if ((index > table.length - 1) || index < 0) {

        console.log('Index is out of range!');

    }
    else {
        console.log(` LENGTH: ${table.length}`)
        table.splice(index, 1);
        console.log(` LENGTH: ${table.length}`)
    }


}


function addNewRows(nR) {

    nR.forEach(row => {

        rowData = row.split(':');

        const newRowObject = new Row();
        newRowObject.assignee = rowData[0];
        newRowObject.taskId = rowData[1];
        newRowObject.title = rowData[2];
        newRowObject.taskStatus = rowData[3];
        newRowObject.estimatedPoints = rowData[4];
        table.push(newRowObject);
    });


}



solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])