let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = [];
let test3 = "abc";

function name(params) {
    if (Array.isArray(params)) {
        let primes = params.filter(num => Number.isInteger(num) && isPrime(num));
        console.log(primes.length > 0 ? primes : "Không có số nguyên tố nào");

        if (params.length == 0) {
            console.log(`Mang khong co phan tu nao`)
            return;
        }
    } else {
        console.log(`Du lieu khong hop le`)
    }

}
filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
filterPrimes([]);
filterPrimes("abc");  