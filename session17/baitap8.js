let day1= prompt("Day 1:");
let day2= prompt("Day 2:");
let dolech= Math.abs( new Date(day1)- new Date(day2))/ (1000*60*60*24);
document.write("Do lech ngay la:", dolech , "day");
