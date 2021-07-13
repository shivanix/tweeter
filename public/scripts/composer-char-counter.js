alert("Hey! Am working! Wohoo!");
// console.log("Hey! Am working! Wohoo!");

// $(document).ready(function() {
//   // --- our code goes here ---
//   console.log("Yes, am ready.");
// });

// document.addEventListener("dblclick", (event) => {
//   console.log(event);
//   // your code here
//   let x = event.offsetX;
//   let y = event.offsetY;
//   console.log(x, y);
// });

let counter = 0;
document.addEventListener("keyup", (event) => {
  console.log(event);
  // your code here
  const keyInput = event.key;  
  // your code here
  console.log(`Key pressed: ${keyInput}` )
});

document.addEventListener("keydown", (event) => {
  //console.log(event);
  const keyInput = event.key;  
  // your code here
  console.log(`Key pressed: ${keyInput}` )
});