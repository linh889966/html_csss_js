let test1= ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let test2= [];
let test3= "abc";

function filter(arr) {
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log(`Mang khong co trong phan tu`)
            return;
        }
        let validEmails = arr.filter(arr => typeof arr === "string" && arr.includes("@") && !arr.includes(" "));
        console.log(validEmails.length > 0 ? validEmails : "Không có email hợp lệ");
    }else{
        console.log(`Du lieu khong hop le`)

     }  
}
filter(test1);
filter(test2);
filter(test3);

