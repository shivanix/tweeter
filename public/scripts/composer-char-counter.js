
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

// let counter = 0;
// document.addEventListener("keyup", (event) => {
//   console.log(event);
//   // your code here
//   const keyInput = event.key;  
//   // your code here
//   console.log(`Key pressed: ${keyInput}` )
// });

// document.addEventListener("keydown", (event) => {
//   //console.log(event);
//   const keyInput = event.key;  
//   // your code here
//   console.log(`Key pressed: ${keyInput}` )
// });

// $("#tweet-text").blur(function() {
//     // --- our code goes here ---
//     console.log("Wrote something in the input field, and then clicked outside the field and it lost its focus (blur).")
    
//   });

$("#tweet-text").on("keypress", function () {
  // --- our code goes here ---
  console.log("Triggered kepress event, when a keyboard-button is pressed.")
  console.log(this.value);

});



/*
  $("#tweet-text").on("input", function() {

    // accessing the value of the input
    console.log(this.value);

    //finding the length of the input
    const tweetLength = this.value.length;
    
    //
    let output = $(this).next().find('#counterID');
    // console.log(counter.value); //The this keyword is a reference to the button
    output["0"].defaultValue = 140 - tweetLength;
    
  });


*/
