// Ques 1

console.log("*** Question 1 ***");
var student = {
  name: "Abhishek Singh",
  sclass: "2nd year",
  rollno: "07",
};

console.log(student);

// Ques 2

console.log("\n*** Question 2 ***");
console.log("Before Deleting rollno prop");
console.log(student);
console.log("After Deleting rollno prop");
delete student.rollno;
console.log(student);

// Ques 3

console.log("\n*** Question 3 ***");
var student = {
  name: "Abhishek Singht",
  sclass: "2nd year",
  rollno: 07,
};
console.log("Length is:", Object.keys(student).length);

// Ques 4

console.log("\n*** Question 4 ***");
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.map((obj) => {
  console.log(
    "-Book Name:",
    obj.title,
    "-Author Name:",
    obj.author,
    "-Reading Status:",
    obj.readingStatus
  );
});

// Ques 5

console.log("\n*** Question 5 ***");
var cylinder = new Object({
  pi: 3.1416,
  radius: 5,
  height: 7,
});

console.log(
  "Volume:",
  cylinder.pi * Math.pow(cylinder.radius, 2) * cylinder.height
);

// Ques 6

console.log("\n*** Question 6 ***");
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var temp = [];
library.map((obj) => {
  temp.push(obj.libraryID);
});
temp.sort((a, b) => b - a);
// console.log(temp);

for (let i in temp) {
  library.map((obj) => {
    if (obj.libraryID === temp[i]) console.log(obj);
  });
}