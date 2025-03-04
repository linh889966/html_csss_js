let numberA= prompt("Moi ban vao a");
let numberB= prompt("Moi ban vao b");
let numberC= prompt("Moi ban vao c");
let delta = numberB * numberB - 4 * numberA * numberC;

    if (delta < 0) {
        document.write("Phương trình vô nghiệm");
    } else if (delta === 0) {
        let x = -numberB / (2 * numberA);
        document.write(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
    } else {
        let x1 = (-numberB + Math.sqrt(delta)) / (2 * numberA);
        let x2 = (-numberB - Math.sqrt(delta)) / (2 * numberB);
        document.write(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }