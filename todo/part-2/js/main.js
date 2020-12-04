function createId() {
    return Math.floor(Math.random() * 100000);
}

const todos = [
    {
        id : createId(),
        title : "Ăn tối",
        isStatus : false
    },
    {
        id : createId(),
        title : "Đi quẩy",
        isStatus : false
    },
    {
        id : createId(),
        title : "Học lập trình",
        isStatus : true
    }
]

const todo_list = document.querySelector('.todo-list');

function renderUI(arr) {
    if(arr.length == 0) {
        todo_list.innerHTML = '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
        return
    }

    todo_list.innerHTML = '';

    for(let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
            <div class="todo-item ${t.isStatus ? 'active-todo' : ''}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.isStatus ? 'checked' : ''}>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>
        `
    }
}

renderUI(todos)