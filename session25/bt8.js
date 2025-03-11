function isStrongPassword(password) {
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /[0-9]/.test(password);
}
console.log(isStrongPassword("Abc123!@"));  
console.log(isStrongPassword("weakpass"));  
console.log(isStrongPassword("ABC12345"));  
console.log(isStrongPassword("abcdefg1"));  
console.log(isStrongPassword("Aa1"));       
