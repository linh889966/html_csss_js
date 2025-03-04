let chucai= prompt("Moi ban nhap vao chu cai: ");
if(('a' <= chucai && chucai <= 'z') || ('A' <= chucai && chucai <= 'Z')  && chucai.length === 1){
    document.write(" Đây là chữ cái");
}else{
    document.write("Không phải chữ cái");
}