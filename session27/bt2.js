let choice;
let arr= [];

do {
    choice= menu();
    switch (choice) {
        case 1:
            arr= danhSach();
            break;
        case 2:
            showList(arr);
        default:
            search(arr);
            break;
    }

} while (choice !== 5);

function menu() {
    let choice = +prompt(`
        1. Nhập danh sách sinh viên.
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên.
        4. Xóa sinh viên khỏi danh sách.
        5. Thoát.
        `
    )
        return choice;
}
 function danhSach() {
    let n;
    do {
        n= +prompt(`Số lượng sinh viên:`);
        if(Number.isInteger(n) && n>0){
           break;
        }else{
            alert(`Lỗi cú pháp`);
        }      
    } while (1);

    let arr= []; 
    for(let i=0; i<n; i++){
        let fullName= prompt(`Mời bạn nhập vào họ và tên sinh viên ${i+1}`);
        arr.push(fullName);
    } 
    return arr;
 }


 function showList(arr) {
    for(let i=0; i<arr.length; i++){
        alert(`Sinh viên thứ  ${i+1} là : ${arr[i]}`);
    } 
 }
 function search(arr){
    let searchName= prompt(`Tên cần tìm kiếm là:`)
    if(arr.includes(searchName)){
        alert(`Tồn tại!`);
   }else{
    alert(`Không tồn tại!`);
   }
 }
