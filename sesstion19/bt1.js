let month = prompt("Moi ban nhap vao thang : ");
// if ( 1 < month && month >12 ) {
//     document.write=( "Thang khong hop le :",month);
// }

// let month31day= [1, 3, 5, 7, 8, 10, 12];
// let month30day= [4, 6, 9, 11];
// if (month in month31day) {
//     document.write(`Thang ${month}, co 31 ngay`);
//     document.write("<br>Thang " + month + ", co 31 ngay");
// }else if (month in month30day) {
//     document.write(" Thang "  + month +  "co 30 ngay");
// }else{
//     alert(1)
//     document.write("Thang khong hop le", month);
// }

if (month % 2 === 0){
    if (month == 2){
        document.write(" Thang "  + month +  "co 29 ngay <br>");
    }else {
        document.write(" Thang "  + month +  "co 30 ngay <br>");
    }
} else if (month % 2 === 1){
    document.write(" Thang "  + month +  "co 31 ngay <br>");
}else {
    document.write("Thang khong hop le", month);
}

// switch (month){
//     case 1:
//         document.write(" Thang "  + month +  "co 31 ngay <br>");
//         break;
//     case 3:
//         document.write(" Thang "  + month +  "co 31 ngay <br>");
//         break;
//     case 5:
//         document.write(" Thang "  + month +  "co 31 ngay <br>");
//         break;
//     case 7:
//         document.write(" Thang "  + month +  "co 31 ngay <br>");
//         break;
//     case 9:
//         document.write(" Thang "  + month +  "co 31 ngay <br>");
//         break;
//     case 11:
//         document.write(" Thang "  + month +  "co 31 ngay <br>");
//         break;
//     case 2: 
//         document.write(" Thang "  + month +  "co 30 ngay <br>");
//     break;    
    
//     case 4: 
//         document.write(" Thang "  + month +  "co 30 ngay <br>");
//     break;    
    
//     case 6: 
//         document.write(" Thang "  + month +  "co 30 ngay <br>");
//     break;    
    
//     case 8: 
//         document.write(" Thang "  + month +  "co 30 ngay <br>");
//     break;    
    
//     case 10: 
//         document.write(" Thang "  + month +  "co 30 ngay <br>");
//     break;    
    
//     case 12: 
//         document.write(" Thang "  + month +  "co 30 ngay <br>");
//         break;
// }

