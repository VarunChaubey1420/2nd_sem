let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;

let math = parseFloat(document.getElementById("math").value);
let science = parseFloat(document.getElementById("science").value);
let english = parseFloat(document.getElementById("english").value);

if(name=="" || roll=="" || isNaN(math) || isNaN(science) || isNaN(english)){
alert("Please fill all fields");
return;
}

let student = {
name:name,
roll:roll,
math:math,
science:science,
english:english
};

students.push(student);

alert("Student Added!");

}

function displayStudents(){

let output="<h3>All Students</h3>";

for(let s of students){

output+=`
Name: ${s.name} |
Roll: ${s.roll} |
Math: ${s.math} |
Science: ${s.science} |
English: ${s.english}<br>
`;
}

document.getElementById("output").innerHTML=output;

}

function calculateTotal(){

let output="<h3>Total Marks</h3>";

for(let s of students){

let total = s.math + s.science + s.english;

output+=`
Name: ${s.name} |
Total: ${total}<br>
`;
}

document.getElementById("output").innerHTML=output;

}

function calculateAverage(){

let output="<h3>Average Marks</h3>";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

output+=`
Name: ${s.name} |
Average: ${avg.toFixed(2)}<br>
`;
}

document.getElementById("output").innerHTML=output;

}

function highScorers(){

let output="<h3>Students with Avg > 80</h3>";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

if(avg>80){

output+=`
Name: ${s.name} |
Average: ${avg.toFixed(2)}<br>
`;

}

}

document.getElementById("output").innerHTML=output;

}

function failedStudents(){

let output="<h3>Failed Students</h3>";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

if(avg<40){

output+=`
Name: ${s.name} |
Average: ${avg.toFixed(2)}<br>
`;

}

}

document.getElementById("output").innerHTML=output;

}

function countStudents(){

document.getElementById("output").innerHTML =
"<h3>Total Students: "+students.length+"</h3>";

}