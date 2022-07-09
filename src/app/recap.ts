const username: string = 'Gonzalo';
const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
   // constructor(private age: number, public lastName : string) // Resumes the declaration
}

const nico = new Person(15, 'Martínez');
