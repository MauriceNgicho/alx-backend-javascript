interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};


const student1: Student = {
  firstName: "Maurice",
  lastName: "Ngicho",
  age: 25,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Alex",
  lastName: "Kinyanjui",
  age: 23,
  location: "Nairobi,
};

const studentsList: Student[]  = [student1, student2];


// Create a table
const table = document.createElement("table");
studentList.forEach((Student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = Student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = Student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
 });

 document.body.appendChild(table);
