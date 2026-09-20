// ================================== Object ===============================
// let students = {
//     name: "Imran",
//     roll: 11,
//     isPresent: true,
//     adress: "Uttara",
// }
// students.email = "imran@gmail.com"     // new object add 
// console.log(students)
// --------------------- this ----------------------
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;  //object er vhitore access nite chaile this
//   }
// };
// console.log(person. fullName())

// const a = {fullName: person.firstName + " " + person.lastName  //object er baire access nite chaile 

// }
// console.log(a)

    // ---------------------- delete -------------------
//     let students = {
//     name: "Imran",
//     roll: 11,
//     isPresent: true,
//     adress: "Uttara",
// }
// delete students .adress  //ja delete korbo tar samne delete likhe dibo
// console.log(students)
//------------------------- check exist property ------------------------
// let students = {
//     name: "Imran",
//     roll: 11,
//     isPresent: true,
//     adress: "Uttara",
// }
// let result =("roll" in students)   //roll students er vhitore ace kina check kora holo
// console.log(result)
// -------------------------- Nested Object -----------------------------
let students = {
    name: "Imran",
    roll: 11,
    isPresent: true,
    adress: "Uttara",
    hobby: {
    hobby1: "Hiking",
    hobby2: "Bird_Watching",
    hobby3: "Photography",
    hobby4: "Camping",
    hobby5: "Gardening",
}  
}
console.log(students.hobby)            //hobby access korte chaile        
console.log(students.hobby.hobby1)     //hobby1 access korte chaile

    
