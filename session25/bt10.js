let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];

function showProducts() {
    console.log("Danh sách sản phẩm có sẵn:");
    products.forEach(product => {
        console.log(`${product[0]} - Số lượng: ${product[1]} - Giá: ${product[2]}`);
    });
}

function addToCart(productName) {
    let product = products.find(p => p[0] === productName);
    if (!product) {
        console.log("Sản phẩm không tồn tại.");
        return;
    }
    if (product[1] === 0) {
        console.log("Sản phẩm đã hết hàng.");
        return;
    }
    
    let cartItem = cart.find(item => item[0] === productName);
    if (cartItem) {
        cartItem[1] += 1;
    } else {
        cart.push([productName, 1, product[2]]);
    }
    product[1] -= 1;
    console.log(`${productName} đã được thêm vào giỏ hàng.`);
}

function checkout() {
    let total = cart.reduce((sum, item) => sum + item[1] * item[2], 0);
    console.log("Hóa đơn của bạn:");
    cart.forEach(item => {
        console.log(`${item[0]} - Số lượng: ${item[1]} - Tổng: ${item[1] * item[2]}`);
    });
    console.log(`Tổng tiền: ${total}`);
}

function exit() {
    console.log("Thoát chương trình.");
}
showProducts();
addToCart("mèn mén");
addToCart("mèn mén");
addToCart("bánh bao");
checkout();
exit();
