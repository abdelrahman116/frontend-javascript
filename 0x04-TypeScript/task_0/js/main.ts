interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student_1: Student = {
  firstName: "Mark",
  lastName: "luther",
  age: 25,
  location: "Egypt",
};

const Student_2: Student = {
  firstName: "Sam",
  lastName: "King",
  age: 29,
  location: "UEA",
};

const studentsList: Student[] = [Student_1, Student_2];

const table = document.createElement("table");
const header = table.insertRow();
header.innerHTML = "<th>First Name</th><th>Location</th>";

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

document.body.appendChild(table);
console.log("TypeScript is very working!");
