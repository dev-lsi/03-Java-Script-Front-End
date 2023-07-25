window.addEventListener('load', solve);
class Task {
    constructor(id, title, description, label, points, assignee) {
        this.id = id,
            this.title = title,
            this.description = description,
            this.label = label,
            this.points = points,
            this.assignee = assignee
    }
}

let taskId = 0;         //used for generating the task ID
const tasksList = [];   //list containing all tasks values
let totalSprintPoints=0;

function solve() {

    const createTaskBtn = document.querySelector('#create-task-btn');
    createTaskBtn.addEventListener('click', createTask);

    const deleteTaskBtn = document.querySelector('#delete-task-btn');
    deleteTaskBtn.addEventListener('click', deleteTask);
    
    

}

function createTask() {


    const titleInp = document.querySelector('#title');
    const descriptionInp = document.querySelector('#description');
    const labelInp = document.querySelector('#label');
    const pointsInp = document.querySelector('#points');
    const assigneeInp = document.querySelector('#assignee');

    const userTextInputs = [titleInp, descriptionInp, pointsInp, assigneeInp]

    let hasEmptyInputs = false;

    userTextInputs.forEach(input => {
        if (input.value === '') {
            hasEmptyInputs = true;
        }
    });

    if (!hasEmptyInputs) {

        taskId++;
        const taskIdValue = `task-${taskId}`;
        const idInp = document.querySelector('#task-id');
        idInp.value = taskIdValue;

        const newTask = new Task(idInp.value,
            titleInp.value,
            descriptionInp.value,
            labelInp.value,
            pointsInp.value,
            assigneeInp.value);

        userTextInputs.forEach(input => {
            input.value = '';
        })

        labelInp.value = 'Feature';

        tasksList.push(newTask);
        createHTML(newTask);

    }

}

function createHTML(task){
  const tasksSectionElement = document.querySelector('#tasks-section')
  const totalPointsElement = document.querySelector('#total-sprint-points');
  totalSprintPoints += Number(task.points);
  totalPointsElement.textContent = `Total Points ${totalSprintPoints}pts`;

  const article = document.createElement('article');
  article.setAttribute('id',`${task.id}`);
  article.setAttribute('class','task-card');

  cardLabel=document.createElement('div');
  let currClass = '';
  let currIcon='';
  if(task.label==='Feature'){
    currClass='feature';
    currIcon='&#8865';
  }else if(task.label==='Low Priority Bug'){
    currClass='low-priority';
    currIcon='&#9737';

  }else if(task.label==='High Priority Bug'){
    currClass='high-priority';
    currIcon='&#9888';

  }

  
  
  cardLabel.setAttribute('class',`task-card-label ${currClass}`);
  cardLabel.textContent =`${task.label} `;
  const spanIcon=document.createElement('span');
  spanIcon.innerHTML=`<span>${currIcon}</span>`;
  cardLabel.appendChild(spanIcon);
  article.appendChild(cardLabel);
  
  const h3=document.createElement('h3');
  h3.textContent=`${task.title}`;
  article.appendChild(h3);

  const descriptionPar=document.createElement('p');
  descriptionPar.setAttribute('class','task-card-description');
  descriptionPar.textContent=task.description;
  article.appendChild(descriptionPar);
  
  const pointsPar=document.createElement('div');
  pointsPar.setAttribute('class','task-kard-points');
  pointsPar.textContent=`Estimated at ${task.points}pts`;
  article.appendChild(pointsPar);

  const assigneeDiv=document.createElement('div');
  assigneeDiv.setAttribute('class','task-card-assignee')
  assigneeDiv.textContent=`Assigned to: ${task.assignee}`;
  article.appendChild(assigneeDiv);

  actionsDiv=document.createElement('div');
  actionsDiv.setAttribute('class','task-card-actions');
  deleteBtn=document.createElement('button');
  deleteBtn.textContent='Delete';
  deleteBtn.addEventListener('click',deleteTask);
  actionsDiv.appendChild(deleteBtn);
  article.appendChild(actionsDiv);

  // append all....................
  tasksSectionElement.appendChild(article);
}

function deleteTask() {
  
}