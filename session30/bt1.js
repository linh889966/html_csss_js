let choice ;
let arr= [];
let products=[
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"món ăn dân tộc Kinh",
    }
];

do {
    choice = menu();
    switch (choice) {
        case 1:
            showProduct();

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        default:
            break;
    }

} while (choice !== 5);

function menu() {
    //hiển thị danh sách
    return parseInt(+prompt(`
        1. Hiển thị các sản phẩm theo tên danh mục.  
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:    
        4. Tính số tiền thanh toán trong giỏ hàng.  
        5. Thoát.
`), 10);
}
// Hiển thị các sản phẩm theo tên danh mục.
function showProduct() {
    let chose= +prompt(`Mời bạn nhập lựa chọn :
        1. Các món dân tộc kinh
        2. Các món dân tộc Thái`);
        if (chose==1) {
            let kinh= products.filter(products=>products.category== `món ăn dân tộc kinh`)
            console.log(kinh);   
        } else if(chose==2) {
            let thai= products.filter(products=>products.category== `Món ăn dân tộc thái`);
            console.log(thai);   
        }else{
            console.log(`Lựa chọn không hợp lệ`);
        }  
}

function muaSanPham() {
    let choseId= +prompt(`Mời bạn nhập ID sản phẩm:`);
    let indexProduct= products.filter(products=> products.)
    if (choseId) {
        
    } else {
        
    }


    
}