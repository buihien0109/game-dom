//id, title, status
const todo_list = document.querySelector('.todo-list');
const todo_input = document.querySelector('#todo-input');
const btn_add = document.querySelector('#btn-add');

function createId() {
    let id = Math.floor(Math.random() * 100000);
    return id;
}

let todos = [
    {
        id: createId(),
        title: "Làm bài tập",
        status: true
    },
    {
        id: createId(),
        title: "Chơi với bạn bè",
        status: false
    },
    {
        id: createId(),
        title: "Sang nhà chị thăm người ốm",
        status: true
    },
];

btn_add.addEventListener('click', function() {
    let todoTitle = todo_input.value;
    if(todoTitle == "") {
        alert("Nội dung không được để trống!");
        return 
    }

    let newTodo = {
        id : createId(),
        title : todoTitle,
        status : false
    }

    todos.push(newTodo);

    renderUI(todos);
    todo_input.value = "";

})

function renderUI(arr) {
    todo_list.innerHTML = '';

    if(arr.length == 0) {
        todo_list.innerHTML = '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
        return
    } 
    
    for(let i=0; i< arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
            <div class="todo-item ${t.status ? `active-todo` : ``}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status ? `checked` : ``} onclick="toggleStatus(${t.id})">
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete">
                        <img src="./img/remove.svg" alt="icon" onclick="deleteTodo(${t.id})">
                    </button>
                </div>
            </div>
        `
    }
}

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i,1)
        }
    }
    renderUI(todos);
}

function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status;
        }
    }
    renderUI(todos);
}

renderUI(todos);