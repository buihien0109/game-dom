const todo_list = document.querySelector('.todo-list');
const input_todo = document.querySelector('#todo-input');
const btn_add = document.querySelector('#btn-add');

function createId() {
    let id = Math.floor(Math.random() * 100000);
    return id
}
// id, title, status
let todos = [
    {
        id: createId(),
        title: "Đi đá bóng",
        status : true
    },
    {
        id: createId(),
        title: "Học lập trình",
        status : false
    },
    {
        id: createId(),
        title: "Đi chơi",
        status : true
    }
];

btn_add.addEventListener('click', function() {
    let title = input_todo.value;

    if(title == '') {
        alert('Tên công việc không được để trống!');
        return
    }

    let newTodo = {
        id : createId(),
        title : title,
        status : false
    }

    todos.push(newTodo);
    renderUI(todos)
    input_todo.value = '';
})

function renderUI(arr) {
    todo_list.innerHTML = '';

    if(arr.length == 0) {
        todo_list.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`
        return
    }

    for(let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
            <div class="todo-item ${t.status ? 'active-todo' : ''}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status ? 'checked' : ''} onclick="toggleStatus(${t.id})">
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>
        `
    }
}

function deleteTodo(id) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == id) {
            todos.splice(i, 1);
        }
    }
    renderUI(todos)
}

function toggleStatus(id) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == id) {
            todos[i].status = !todos[i].status;
        }
    }
    renderUI(todos)
}

renderUI(todos)