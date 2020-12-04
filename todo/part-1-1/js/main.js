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
const todo_input = document.getElementById('todo-input');
const btn_add = document.getElementById('btn-add');

btn_add.addEventListener('click', function() {
    // lấy nội dung ô input
    let title = todo_input.value
    // Kiểm tra value rỗng
    if(title == '') {
        alert('Nội dung không được để trống');
        return
    }
    // Xử lý trường hợp có dữ liệu

    // 1. Tạo công việc mới
    let newTodo = {
        id : createId(),
        title : title,
        isStatus : false
    }

    // 2. Thêm cv mới vào mảng todos
    todos.push(newTodo);

    // 3. Hiển thị lại danh sách
    renderUI(todos)

    // 4. clear input sau khi thêm
    todo_input.value = '';
})

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
                    <input type="checkbox" ${t.isStatus ? 'checked' : ''} onclick="toggleStatus(${t.id})">
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="updateTodo(this, ${t.id})">
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

renderUI(todos)

function deleteTodo(id) {
    for(let i = 0; i< todos.length; i++) {
        if(todos[i].id == id) {
            todos.splice(i, 1);
        }
    }
    renderUI(todos)
}

function toggleStatus(id) {
    for(let i = 0; i< todos.length; i++) {
        if(todos[i].id == id) {
            todos[i].isStatus = !todos[i].isStatus;
        }
    }
    renderUI(todos)
}

function updateTodo(btn, id) {
    let todo_item_title = btn.parentElement.parentElement.querySelector('.todo-item-title');
    let para = todo_item_title.querySelector('p')
    let title = para.innerText;
    todo_item_title.insertAdjacentHTML('beforeEnd', `<input type="text" value="${title}">`)
    para.parentElement.removeChild(para)
}