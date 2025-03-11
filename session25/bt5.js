function demSoNguyenDuong(array){
    let count= 0;
    if(!Array.isArray(array)){
        console.log(`Mang khong hop le`)
        for(let i= -1; i<array.length-1; i++){
            if(Number.isInteger(arr[i+1])&& arr[i+1]>0){
                count++;
            }
        }
        count? console.log(count): console.log(`Khong co so nguyen duong trong mang`);
    }
}
console.log(demSoNguyenDuong([4, 5.4, 6, -2]));
console.log(demSoNguyenDuong([1, 2, 5, 7, -8, 6]));
console.log(demSoNguyenDuong([1.2, -3, -6]));