function chuoiKyTu(str) {
    let userInput = prompt("Nhập vào một chuỗi:");
    return typeof str !== "string" ? "Dữ liệu không hợp lệ" :
        str === str.split("").reverse().join("") ?
            "là chuỗi đối xứng" : "không phải chuỗi đối xứng";
}
console.log(chuoiKyTu(userInput));
