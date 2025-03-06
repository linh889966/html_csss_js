let numberArray= prompt("Moi ban nhap vao day so bat ky");

if(!isNaN(numberArray) && !Number.isInteger(numberArray)){
    console.log(numberArray.split("").reverse().join(""),"Hop le!");
}else{
    console.log("Khong hop le!");
}

