// ================================ Array ================================

let studentName = "Imran"
let studentsList = ["Imran", "Rahul", "Ahsan", "Tanvir", "Fahim", "Sajid", "Arif", "Nabil", "Rayhan", "Asif"];
console.log(studentsList)               //studentslist dekhar jonno

console.log(studentsList.length)        //koyta data ace seta dekhar jonno
console.log(studentsList[5])            //6 no e kon data ace seta dekhar jonno
console.log(studentsList[0])            // first e kon data ace seta dekhar jonno

let lastIndex = studentsList.length-1
console.log(studentsList[lastIndex])       // last e kon data ace seta dekhar jonno   

studentsList[0]  = "Imran Hasan"   
console.log(studentsList)                  //update korar jonno

for(let i=0; i<studentsList.length; i++){
console.log(studentsList[i])                  // For Loop use kore first to last list ber kora
}

studentsList.map((item)=>{
console.log(item)                           // Map use kore list ber kora
}) 

studentsList.map((item,index)=>{
console.log(item,index)                   // Map use kore list o index ber kora        
}) 
console.log(studentsList.toString())     //toString use kore list ber kora
console.log(studentsList)

console.log(studentsList.at(5))         //at use kore index ber kora

console.log(studentsList.join(" * "))         //join symbol use kore list ber kora

console.log(studentsList.pop())                 //pop use kore last item ber kora

let removeItem = studentsList.pop()                 //pop use kore  item remove kora
console.log(removeItem)

studentsList.push("Akash")
console.log(studentsList)                        //push use kore  item add kora