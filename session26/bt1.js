function number(arr){
    if(!Array.isArray(arr)){
        console.log(`Du lieu khong hop le`)
        return;
    }
    if(arr.length===0){
        console.log(`Khong co phan tu nao trong mang`)
        return;
    }
    let rs = arr.filter(num => Number.isInteger(num) >=10);
    console.log(rs.length > 0 ? rs: "Không có số nào lớn hơn hoạc bằng 10")
}
number= ([1, 22, 10, 9, 8]);  
number= ([]);  
number= ("abc");  
number= ([5, 7, 9]);

