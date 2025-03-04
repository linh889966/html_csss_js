let numberA = prompt("Mời bạn nhập số thú nhất");
let numberB = prompt("Mời bạn nhập số thú hai");
let numberC = prompt("Mời bạn nhập số thú ba");
let max = (numberA > numberB) ? ((numberA > numberC) ? numberA : numberC) : ((numberB > numberC) ? numberB : numberC);
document.write(`Số lớn nhất trong 3 số là ${max}`);