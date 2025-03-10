let arr= [2, 1, 7, 1];
let khong;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i; j++){
        if(arr[j]>arr[j+1]){
            khong = arr[j];
            arr[j]= arr[j+1];
            arr[j+1]= khong;
        }
    }
    
}console.log(arr);

//arr[0]=2 > arr[1]=1
//=> sẽ truyền arr[0] vào không thì arr[0] sẽ rỗng arr[1] =1 khong 2
//truyền arr[1] vao arr[0] thi bay gio arr[0] = 1 arr[1] se rong khong van bang 2
//cho khong truyen gia tri vao arr[1] bang 2
//ket qua khong se rong arr[0] 1 va arr[1] 2