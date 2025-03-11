function kiemTranSoNguyen(number){
    if(Number.isInteger(number)&& number>0){
        let count=0;
        for(let i=1; i<number; i++){
            if(number%i==0){
                count++;
            }
        }
        count==1? console.log(`La so nguyen to`): console.log(`Khong phai so nguyen to`);
    }

}

console.log(kiemTraSoNguyen(17));    
console.log(kiemTraSoNguyen(6));     
console.log(kiemTraSoNguyen("text"));