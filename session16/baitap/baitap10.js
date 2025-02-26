let number1= +prompt("Moi ban nhap so thu nhat :");
let number2= +prompt("Moi ban nhap so thu hai :");

let min = Math.min(number1, number2);
let max = Math.max(number1, number2);

let soNgauNhien = Math.random() * (max - min) + min;

alert("Gia tri la :", soNgauNhien);