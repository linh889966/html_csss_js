prompt("Mời bạn nhập vào tháng :");
let month = 12;
switch (month) {
    case (month >= 1 && month <= 3):
        document.write("mùa xuân");
        break;
    case (month >= 4 && month <= 6):
        document.write("mùa hạ");
        break;
    case (month >= 7 && month <= 9):
        document.write("mùa thu");
        break;
    case (month >= 10 && month <= 12):
        document.write("mùa đông");
        break;
    default:
        document.write("tháng không hợp lệ");
}