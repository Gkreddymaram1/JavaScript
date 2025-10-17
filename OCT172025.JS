<script>
// object methods example key()
//let obj ={
//    name: "Alice",
//    age: 30,
//    city: "New York"
//}
//console.log(Object.keys(obj)); // ["name", "age", "city"]




// object methods example values()
//let obj ={
  //  name: "Alice",
    //age: 30,
    //city: "New York"
//}
//console.log(Object.values(obj)); // ["Alice", 30, "New York"]


// object methods example entries()
// let obj ={
//     name: "Alice",
//     age: 30,
//     city: "New York"
// }
// console.log(Object.entries(obj)); // [["name", "Alice"], ["age", 30], ["city", "New York"]]



// hasown example 1
// let obj ={
//     name: "Alice",
//     age: 30,
//     city: "New York"
// }       
// console.log(Object.hasOwn(obj, 'age')); // true

// hasown example 2
//let obj ={
//    name: "Alice",
//    age: 30,
//    city: "New York"
//}       
// console.log(Object.hasOwn(obj, '30')); // false
//

//ASSIGN EXAMPLE
// let target = { a: 1, b: 2 };
// let source = { b: 4, c: 5 };
// Object.assign(target, source);
// console.log(target); // { a: 1, b: 4, c:


// freeze example
let obj = {
    name: "Alice",
    age: 30
};  
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
 // This will not change the age property

</script>
