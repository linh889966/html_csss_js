let count=0; // dem so luong nguoi dung sai moi lan nhap
let passWord= "khanhlinh";
while(count<3){
    let pass= prompt("Moi ban nhap mat khau:");
    if(passWord===pass){
        console.log("Mat khau dung");
        break;
    }else{
        console.log("Mat khau sai");
        count++;
    }
}
