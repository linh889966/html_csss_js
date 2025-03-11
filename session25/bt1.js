function findMinValue(arr) {
    return !Array.isArray(arr) ? "Giá trị không hợp lệ" :
           arr.length === 0 ? "Mảng không chứa phần tử" :
           `Phần tử nhỏ nhất trong mảng là ${Math.min(...arr)}`;
}

console.log(findMinValue([2, 4, 8, 1, 9])); 
console.log(findMinValue([])); 
console.log(findMinValue("abc")); 
console.log(findMinValue([5, 2, 7, 5, 4])); 
