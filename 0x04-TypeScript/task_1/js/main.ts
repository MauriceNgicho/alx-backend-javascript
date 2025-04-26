interface Teacher {
  readonly firstName: string; // can't be changed after creation
  readonly lastName: string; // can't be changed after creation
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number; // optional
  [key: string]: any; // allow other attributes
}


// Example:

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


console.log(teacher3);
