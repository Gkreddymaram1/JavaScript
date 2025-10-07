
<script>
  /*
  var a = 10  var anedhi varbke name okati unna support chesthadi
  var a = 20
  console.log (a)


let
let a = 10   // Identifier 'a' has already been declared not supported this  same varible 
let a = 20   //varaible name same and let to a syntax error are formed
console.log(a)
   

const
const a = 10    var ane varible ki tappithe deniki support cheyadu
const a = 10   //const Identifier 'a' has already been declared
console.log(a)




string method
let message = 'HI'
message += 'gk'   // this is a string + string method

console.log(message)





let name ='gk'   this is 
name += 

`hi how ${'it today'}  you me dear brother`    // manam change cheyali anukunnadhi $  doller symbel{ curlibases pedithe easy ga change cheyavachu} 


console.log(name)



what is scope exmple:


. Global Scope	Script .	Outside any function or block declared variable.
2. Function Scope	Function  declare  variables  function 	Declared inside a function using var, let, or const.
3. Block Scope	{} (curly braces)  declare  variables  block 	Declared inside {} using let or const.



---

🔸 1. Global Scope Example

let name = "Gopal"; // Global variable

function greet() {
  console.log("Hello " + name); // Accessible here
}

greet();  // Output: Hello Gopal
console.log(name); // Accessible here also

🟢 Explanation:
name variable function declare  global scope.


---

🔸 2. Function Scope Example

function showMessage() {
  var message = "Welcome to JavaScript!";
  console.log(message); // Accessible inside function
}

showMessage();
console.log(message); // ❌ Error: message is not defined

🔴 Explanation:
message variable function  declare  function .


---

🔸 3. Block Scope Example

{
  let x = 10;
  const y = 20;
  console.log(x, y); // Accessible here
}
console.log(x, y); // ❌ Error: not defined

🟢 Explanation:
let  const variables block {} .


---

⚡ Extra: var vs let vs const Scope Difference

Keyword	Scope Type	Redeclare	Reassign

var	Function scope	✅ Yes	✅ Yes
let	Block scope	❌ No	✅ Yes
const	Block scope	❌ No	❌ No



---

💡 Example (All in One)

var a = 1; // global

function test() {
  var b = 2; // function scope
  if (true) {
    let c = 3; // block scope
    const d = 4; // block scope
    console.log(a, b, c, d); // ✅ 1, 2, 3, 4
  }
  console.log(a, b); // ✅ 1, 2
  // console.log(c, d); ❌ Error: block scope
}

test();
















</script>
