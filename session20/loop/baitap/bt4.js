let str = prompt("Mời bạn nhập vào chuỗi :");
let seach = prompt("Mời bạn nhập vào từ muốn tìm kiếm :");
let flag = 0;
for (let i = 0; i < str.length; i++ ) {
    if (str[i] == seach) {
        flag = 1;
        break;
    }
}
flag == 1 ? document.write("Tồn tại!") : document.write("Không tồn tại!");