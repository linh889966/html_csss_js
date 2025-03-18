let choice;
let contacts = []; // Mảng chứa danh bạ
let nextId = 1; // ID tự động tăng

do {
    choice = Menu();
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            searchByPhone();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
} while (choice !== 6);

function Menu() {
    return parseInt(prompt(`
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
        6. Thoát.
    `), 10);
}

function addContact() {
    let name = prompt("Nhập tên liên hệ:");
    let email = prompt("Nhập email liên hệ:");
    let phone = prompt("Nhập số điện thoại liên hệ:");
    let contact = { id: nextId++, name, email, phone };
    contacts.push(contact);
    console.log("Đã thêm liên hệ:", contact);
}

function displayContacts() {
    console.log("Danh sách liên hệ:", contacts.length ? contacts : "Danh bạ trống.");
}

function searchByPhone() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let contact = contacts.find(c => c.phone === phone);
    console.log(contact ? contact : "Không tìm thấy liên hệ.");
}

function updateContact() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần cập nhật:"), 10);
    let contact = contacts.find(c => c.id === id);
    if (contact) {
        contact.name = prompt("Nhập tên mới:") || contact.name;
        contact.email = prompt("Nhập email mới:") || contact.email;
        contact.phone = prompt("Nhập số điện thoại mới:") || contact.phone;
        console.log("Cập nhật thành công:", contact);
    } else {
        console.log("Không tìm thấy liên hệ để cập nhật.");
    }
}

function deleteContact() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần xóa:"), 10);
    let index = contacts.findIndex(c => c.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Đã xóa liên hệ có ID:", id);
    } else {
        console.log("Không tìm thấy liên hệ để xóa.");
    }
}
