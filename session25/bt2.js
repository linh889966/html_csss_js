function thamso (a, b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        return a+b;
    }
    console.log("Du lieu khong hop le")
}
console.log(thamso(2,6));
console.log(thamso(3, "text"));
console.log(thamso(7, -7));
console.log(thamso(4.5, 3));
    