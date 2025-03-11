function capitalizeWords(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello WORLD"));
console.log(capitalizeWords("rIKKei acaDEMy"));
