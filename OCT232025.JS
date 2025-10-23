TODAY I WAS LERNING BY FIND AND FILTER IN JAVASCRIPT



<script>



// const  users = [
// 
// {
// 
// id : 1, name : "John Doe", age : 26, email : "Doe@gmail.com", city : "New York", 
// },
// {
// id : 2, name : "gopi", age : 23, email : "gopi@gmail.com", city : "New York",
// },
// {   
// id : 3, name : "manikanta", age : 48, email : "gopi@gmail.com", city : "New York", 
// },
// {   
// id : 4, name : "jhon", age : 22, email : "jhon@gmail.com", city : "New York",  
//  },
// {
// id : 5, name : "pinckey", age : 25, email : "pinckey@gmail.com", city : "New York",
// 
// }
//  
// ]
// 
// 
// const filterData = users.find((item) => item.email ==="gopi@gmail.com")    any 1 match  it will return 1st match result
// console.log(filterData)

// const  users = [
// 
// {
// 
// id : 1, name : "John Doe", age : 26, email : "Doe@gmail.com", city : "New York", 
// },
// {
// id : 2, name : "gopi", age : 23, email : "gopi@gmail.com", city : "New York",
// },
// {   
// id : 3, name : "manikanta", age : 48, email : "gopi@gmail.com", city : "New York", 
// },
// {   
// id : 4, name : "jhon", age : 22, email : "jhon@gmail.com", city : "New York",  
//  },
// {
// id : 5, name : "pinckey", age : 25, email : "pinckey@gmail.com", city : "New York",
// 
// }
//  
// ]
// 
// 
// const filterData = users.filter((item) => item.city ==="New York")   
// console.log(filterData)


//const  users = [

//  {
//  
//  id : 1, name : "John Doe", age : 26, email : "Doe@gmail.com", city : "New York", 
//  },
//  {
//  id : 2, name : "gopi", age : 23, email : "gopi@gmail.com", city : "New York",
//  },
//  {   
//  id : 3, name : "manikanta", age : 48, email : "gopi@gmail.com", city : "New York", 
//  },
//  {   
//  id : 4, name : "jhon", age : 22, email : "jhon@gmail.com", city : "New York",  
//   },
//  {
//  id : 5, name : "pinckey", age : 25, email : "pinckey@gmail.com", city : "New York",
//  
//  }
//   
//  ]
//  
//  
//  const filterData = users.find((item) => item.id=2)   
// console.log(filterData)


//  const  users = [
//  
//  {
//  
//  id : 1, name : "John Doe", age : 26, email : "Doe@gmail.com", city : "New York", 
//  },
//  {
//  id : 2, name : "gopi", age : 23, email : "gopi@gmail.com", city : "New York",
//  },
//  {   
//  id : 3, name : "manikanta", age : 48, email : "gopi@gmail.com", city : "New York", 
//  },
//  {   
//  id : 4, name : "jhon", age : 22, email : "jhon@gmail.com", city : "New York",  
//   },
//  {
//  id : 5, name : "pinckey", age : 25, email : "pinckey@gmail.com", city : "New York",
//  
//  }
//   
//  ]
//  
//  
//  // const filterData = users.filter((item) => item.age >20)   // all match  it will return all match result
//  const filterData = users.filter((item) => item.age <25)   // all match  it will return all match result
//  console.log(filterData)





  const  users = [
 
 {
 
 id : 1, name : "gopi", age : 26, email : "Doe@gmail.com", city : "New York", 
 },
 {
 id : 2, name : "gopi", age : 23, email : "gopi@gmail.com", city : "New York",
 },
 {   
 id : 3, name : "manikanta", age : 48, email : "gopi@gmail.com", city : "New York", 
 },
 {   
 id : 4, name : "jhon", age : 22, email : "jhon@gmail.com", city : "New York",  
  },
 {
 id : 5, name : "pinckey", age : 25, email : "pinckey@gmail.com", city : "New York",
 
 }
  
 ]
        // include method are using this array function
 const filterData = users.filter(item => item.name.includes('go'))   // all match  it will return all match result
 console.log(filterData)



</script>
