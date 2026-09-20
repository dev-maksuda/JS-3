// ------------------ object add ------------------
// let students = {
//     name: "Imran",
//     roll: 11,
//     isPresent: true,
//     adress: "Uttara",
// }
// students.email = "imran@gmail.com"
// console.log(students)
// --------------------- this ----------------------
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;  //object er vhitore access nite chaile this
  }
};
console.log(person. fullName())

const a = {fullName: person.firstName + " " + person.lastName  //object er baire access nite chaile 

}
console.log(a)
    