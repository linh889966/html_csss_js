let arr = [];
let input;
let flag=0;
do {
    input = Number(prompt("Moi ban nhap vao so:"));
    if (Number.isInteger(input)) {
        if (input > 0) {
            flag=1;
            
        } else {
            console.log("Số lượng phần tử không được nhỏ hơn 0")
        }

    } else {
        console.log("Khong hop le. Moi nhap lai")
    }
    if(flag){break;}
    alert("Hu");
} while (1);

for(let i=0; i< input; i++){
    do {
        let number= +prompt(`Moi nhap gia tri thu: ${i+1}`);
        if(Number.isInteger(number) || Number.isFinite(number)){
            arr.push(number);
            break;
        }else{
            alert("Khong hop le!");
        }   
    } while (1);
}
let max= arr[0];
let nbmax;
for(let i=1; i< arr.length; i++){
    if(max <= arr[i]) {
        nbmax= max;
        max= arr[i];
    }
}
console.log("So lon thu 2 la: "+nbmax)