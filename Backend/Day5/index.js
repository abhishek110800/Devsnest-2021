var fs=require("fs");
fs.writeFileSync("day5/tha5.txt","Hello");
fs.readFileSync("day5/tha5.txt","utf-8");
fs.appendFileSync("day5/tha5.txt"," World!");
fs.unlinkSync("day5/tha5.txt");

fs.rmdirSync("day5");