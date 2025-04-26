interface Teacher {
  readonly firstName: string; // can't be changed after creation
  readonly lastName: string; // can't be changed after creation
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number; // optional
  [key: string]: any; // allow other attributes
}

interface Directors extends Teacher {
  numberOfReports: number;
}


// Example:

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Example2:

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


console.log(teacher3);
console.log(director1);
