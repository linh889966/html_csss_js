 // Hàm thêm công việc
 function addTask() {
    let taskInput = document.getElementById("taskInput"); // Lấy ô nhập liệu
    let taskText = taskInput.value.trim(); // Lấy nội dung và loại bỏ khoảng trắng
    if (taskText === "") return; // Nếu rỗng thì không làm gì
    
    let li = document.createElement("li"); // Tạo phần tử danh sách mới
    li.innerHTML = `${taskText} 
        <button onclick="editTask(this)">Sửa</button> 
        <button onclick="deleteTask(this)">Xóa</button>`; // Gán nội dung công việc + nút sửa, xóa
    
    document.getElementById("taskList").appendChild(li); // Thêm vào danh sách
    taskInput.value = ""; // Xóa nội dung ô nhập sau khi thêm
}

// Hàm sửa công việc
function editTask(button) {
    let newText = prompt("Sửa công việc:", button.parentElement.firstChild.textContent); // Hiện hộp thoại nhập nội dung mới
    if (newText !== null) {
        button.parentElement.firstChild.textContent = newText; // Cập nhật nội dung công việc
    }
}

// Hàm xóa công việc
function deleteTask(button) {
    button.parentElement.remove(); // Xóa phần tử chứa công việc
}