let test1= ["apple","banana", "cat", "dog"];
let test2= [];
let test3= "abc";

function filter(arr) {
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log(`mang khong chua phan tu nao`);
            return;
        }
        let ketqua= arr.filter(function length(item, index, arr){
            return item.length>5;
        })
        console.log(`Ket qua la :`,ketqua)

    }else{
        console.log(`Du lieu khong hop le`)
    } 
}
filter(test1);
filter(test2);
filter(test3);
