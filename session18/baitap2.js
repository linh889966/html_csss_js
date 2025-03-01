let numBer1= prompt("Moi ban nhap diem toan");
let numBer2= prompt("Moi ban nhap diem van");
let numBer3= prompt("Moi ban nhap diem anh");
let trungBinhMon= ( numBer1 + numBer2 + numBer3 ) / 3;
if ( trungBinhMon >= 8){
    console.log("Gioi");
}else(6.5 < trungBinhMon && trungBinhMon < 7.9) {
    console.log("Ban xep loai kha");
    
} else if (5.0 < trungBinhMon && trungBinhMon < 6.4){
    console.log("Ban xep loai trung binh");
    
} else {
    console.log("trung binh mon la");
    
}