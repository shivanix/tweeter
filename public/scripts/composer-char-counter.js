alert("Hey! Am working! Wohoo!");

/*---------------------------------------------Testing event handlers---------------------------*/
/*
$(document).ready(function() {
   // --- our code goes here ---
   console.log("Yes, am ready.");
 });

document.addEventListener("dblclick", (event) => {
  console.log(event);

  let x = event.offsetX;
  let y = event.offsetY;
  console.log(x, y);
});

document.addEventListener("keyup", (event) => {
  console.log(event);
  
  const keyInput = event.key;  
  console.log(`Key pressed: ${keyInput}` )
});

document.addEventListener("keydown", (event) => {
  //console.log(event);
  const keyInput = event.key;  

  console.log(`Key pressed: ${keyInput}` )
});
*/

/*-------------------------------------- Event-handlers on selectors using jquery-------------*/
/*
$("#tweet-text").blur(function () {
 
  console.log("Wrote something in the input field, and then clicked outside the field and it lost its focus (blur).")
});


$("#tweet-text").on("keypress", function () {
  
  console.log("Triggered kepress event, when a keyboard-button is pressed.")
  console.log(this.value);
});
*/

/*-------------------------------------Showing characters remaining in the counter----------------*/


  $("#tweet-text").on("input", function() {

    // accessing the value of the input
    console.log(this.value);

    //finding the length of the input
    const tweetLength = this.value.length;
    
    //next() method returns the next sibling elements(e that share the same parent) of the selected element.
    // find() method returns descendant (child, grandchild, & so on) elements of the selected element. 
    const output = $(this).next().find('output');
    
    //counter updating with the value of characters remaining
    const charactersRemaining = 140 - tweetLength
    output["0"].defaultValue = charactersRemaining;

    
    
  });



