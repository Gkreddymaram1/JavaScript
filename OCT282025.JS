TODAY I WAS LERNING EVENTS METHOD EVENTS AND EVENTPROPGATIONS



<script>



// EVENTS


// function handleClick() {
//     alert("Hi my name is Gopi");
// }
 
// 
// <button onclick="handleClick()">Click</button>




//  function handleSubmit(){
//      alert('form is submit')
//  }
//  
//  const handleClear=()=>{
//      alert('form is clear')
//  }

//  
//  <button onclick="handleSubmit()">submit</button>
//  <button onclick="handleClear()">clear</button



// function handleSubmit(){
//      alert('form is submit')
//  }
//  
//  const handleClear=()=>{
//      alert('form is clear')
//  }

//  //<>
//  
//  
//  <div onclick="handleSubmit()">
//  <div onclick="handleClear()">clear</div>
// 
// </div>
// event declaration

// eventpropgation

function handleParent(){
     console.log('Parent Clicked')

 }
 
 const handleChild=(event)=>{
         event.stopPropagation()
     console.log('Child  Clicked')
 }
 const handleSubChild=(event)=>{
     event.stopPropagation()
     console.log('Subchild  Clicked')
    
 }
 </script>
 
  
 <div onclick="handleParent()">
    parent
  <div onclick="handleChild(event)">
    Child

   <div onclick="handleSubChild(event)">
    SubChild

</div>



