let input = +prompt("Nhập một số nguyên dương:");
    let N = parseInt(input);

    if (isNaN(N) || N <= 0) {
        document.write("Dữ liệu nhập vào không hợp lệ");
    } else {
        let sum = 0;
        for (let i = 1; i <= N; i++) {
            sum += i;
        }
        document.write(sum);
    }