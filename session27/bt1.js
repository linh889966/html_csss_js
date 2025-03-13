let choice;

do {
    choice= Menu();
    switch (choice) {
        case 1:
           cong();
            
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;      

        default:
            break;
    }
    
} while (choice!==5);

 function Menu() {
    let choice = +prompt(`
        1. Cộng hai số.
        2. Trừ hai số.
        3. Nhân hai số.
        4. Chia hai số.
        5. Thoát.
        Hãy nhập lựa chọn của bạn:`

    ) 
    return choice;
 }

 function cong() {
    let number1= +prompt(`Mời bạn nhập vào số thứ nhất :`);
    let number2= +prompt(`Mòi bạn nhâp vào sô thứ 2:`);
    let sum = number1 + number2;
    alert(`Kết quả là: ${sum}`);  
 }
