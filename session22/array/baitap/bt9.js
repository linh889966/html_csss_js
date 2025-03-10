let arr= [2, 5, 4, 1, 8, 6, 2, 5, 7];
let maxcount; //dem so lan hien thi nhieu nhat
let minElement; //hien thi phan tu be nhat co so lan suat hien trong maxcount

for(let i=0; i<arr.length; i++){
    let count=0; // de dem
    for(let j=0; j<arr.length; i++){

        if(arr[i]==arr[j]){
            count++; //tang len 1
        }
    }
    if(count>maxcount){
        maxcount=count;
        minElement=arr[i];
    }else if(count==maxcount&& minElement>arr[i]){
        minElement=arr[i];
    }
}

console.log(`${maxcount} So phan tu hien thi nhieu nhat trong mang`);