let input= prompt("Moi ban nhap vao so tien:");

let rate = 23000; // Tỷ giá USD -> VND
let output = "";

if (input.includes("VND-->USD:")) {
    let vnd = parseFloat(input.split(":")[1].trim());
    if (!isNaN(vnd)) {
        let usd = vnd / rate;
        output = `${usd} USD`;
    } else {
        output = "Invalid input";
    }
} else if (input.includes("USD-->VND:")) {
    let usd = parseFloat(input.split(":")[1].trim());
    if (!isNaN(usd)) {
        let vnd = usd * rate;
        output = `${vnd} VND`;
    } else {
        output = "Invalid input";
    }
} else {
    output = "Invalid format";
}

document.write(("VND-->USD: 23000")); 
document.write(("USD-->VND: 2"));   
