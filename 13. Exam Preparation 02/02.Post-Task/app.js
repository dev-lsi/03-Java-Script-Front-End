window.addEventListener("load", solve);

function solve() {



    inputSelectors = {
        titleInput: document.querySelector('#task-title'),
        categoryInput: document.querySelector('#task-category'),
        contentInput: document.querySelector('#task-content')
    }

    selectors = {

        publishButton: document.querySelector('#publish-btn'),
        reviewlist: document.querySelector('#review-list'),
        publishedlist:document.querySelector('#published-list')

    }

    let taskId = 0;
    const tasks = {};

    selectors.publishButton.addEventListener('click', publishTask);

    function publishTask() {

        const task = {
            
            taskTitle: inputSelectors.titleInput.value,
            taskCategory: inputSelectors.categoryInput.value,
            taskContent: inputSelectors.contentInput.value
        }

        const hasEmptyInputs = false;

        Array.from(Object.values(task)).forEach(value => {
            if (value === '') {
                hasEmptyInputs = true;
            }
        });

        if (!hasEmptyInputs) {
            task.id = taskId++;
            clearInputs();
            tasks[task.id] = task;
            createTaskElement(task);
        }

    }

    function createTaskElement(task) {

        const li = createElement('li', task.id, ['rpost'], null, null);

        const article = createElement('article', null, null, null, null);
        const h4 = createElement('h4', null, null, task.taskTitle, article);
        const categoryP = createElement('p', null, null, task.taskCategory, article);
        const contentP = createElement('p', null, null, task.taskContent, article);

        li.appendChild(article);
        const editBtn = createElement('button', null, ['action-btn', 'edit'], 'Edit', li);
        editBtn.addEventListener('click', editTask);
        const postBtn = createElement('button', null, ['action-btn', 'post'], 'Post', li);
        postBtn.addEventListener('click', postTask);

        selectors.reviewlist.appendChild(li);
        tasks[task.taskTitle] = task;
    }

    function postTask(e) { 

        const li = e.target.parentElement;
        li.querySelector('button').remove();
        li.querySelector('button').remove();

        selectors.publishedlist.appendChild(li);
    }

    function editTask(e) {
        const li = e.target.parentElement;
        const title = li.querySelector('h4').textContent;
        const currTask = tasks[title];
        inputSelectors.titleInput.value = currTask.taskTitle;
        inputSelectors.categoryInput.value = currTask.taskCategory;
        inputSelectors.contentInput.value = currTask.taskContent;
        delete(tasks[title]);
        e.target.parentElement.remove();
    }

    function clearInputs() {

        const keys = Array.from(Object.keys(inputSelectors))
        keys.forEach(key => {
            inputSelectors[key].value = '';
        })
    }

    function createElement(type, id, classList, textContent, parent) {


        const element = document.createElement(type);

        if (id) {

            element.setAttribute('id', id);

        }
        if (textContent) {

            element.textContent = textContent;

        }
        if (classList) {

            element.classList.add(...classList);
        }
        if (parent) {

            parent.appendChild(element);

        }

        return element;

    }






}