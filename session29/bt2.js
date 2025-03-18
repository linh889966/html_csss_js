let choice;
let arr = [];
let nextId = 1;
do {
    choice = Menu();
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProducts();
            break;
        case 3:
            displayProductDetails();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            filterProductsByPrice();
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
} while (choice !== 7);

function Menu() {
    return parseInt(prompt(`
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo id.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát`
    ), 10);
}

function addProduct() {
    let name = prompt("Tên sản phẩm:");
    let price = +prompt("Giá sản phẩm:");
    let category = prompt("Danh mục sản phẩm:");
    let quantity = +prompt("Số lượng sản phẩm trong kho:");
    let product = { id: nextId++, name, price, category, quantity };
    arr.push(product);
    console.log("Đã thêm sản phẩm:", product);
}

function displayProducts() {
    console.log("Danh sách sản phẩm:", arr.length > 0 ? arr : "Danh sách trống!");
}

function displayProductDetails() {
    let id = +prompt("Nhập ID sản phẩm cần xem chi tiết:");
    let product = arr.find(p => p.id === id);
    console.log(product ? product : "Không tìm thấy sản phẩm.");
}

function updateProduct() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let product = arr.find(p => p.id === id);
    if (product) {
        product.name = prompt("Nhập tên mới:") || product.name;
        product.price = +prompt("Nhập giá mới:") || product.price;
        product.category = prompt("Nhập danh mục mới:") || product.category;
        product.quantity = +prompt("Nhập số lượng mới:") || product.quantity;
        console.log("Cập nhật thành công:", product);
    } else {
        console.log("Không tìm thấy sản phẩm để cập nhật.");
    }
}

function deleteProduct() {
    let id = +prompt("Nhập ID sản phẩm cần xóa:");
    let index = arr.findIndex(p => p.id === id);
    if (index !== -1) {
        arr.splice(index, 1);
        console.log("Đã xóa sản phẩm có ID:", id);
    } else {
        console.log("Không tìm thấy sản phẩm để xóa.");
    }
}

function filterProductsByPrice() {
    let minPrice = +prompt("Nhập giá thấp nhất:");
    let maxPrice = +prompt("Nhập giá cao nhất:");
    let filteredProducts = arr.filter(p => p.price >= minPrice && p.price <= maxPrice);
    console.log("Sản phẩm trong khoảng giá:", filteredProducts.length ? filteredProducts : "Không có sản phẩm nào.");
}
