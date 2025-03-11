const filterEvenNumbers = (arr) => 
    !Array.isArray(arr) ? "dữ liệu không hợp lệ" :
    arr.some(num => num % 2 === 0) ? arr.filter(num => num % 2 === 0).join(", ") :
    "mảng không chứa số chẵn";

console.log(filterEvenNumbers([11, 4, 65, 6])); 
console.log(filterEvenNumbers([1, 3, 5, 17]));   
console.log(filterEvenNumbers("text"));      