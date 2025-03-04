let input= +prompt("Mời bạn nhập vào :");
let number=parseInt(input);
if (isNaN(number) || number <= 0) {
    document.write("Dữ liệu nhập vào không hợp lệ");
} else {
    let ketQua = [];
    for (let i = 5; i <= number; i += 5) {
        ketQua.push(i);
    }
    document.write(`Các số chia hết cho 5 từ 1 đến ${N} là: ${ketQua.join(", ")}`);
}