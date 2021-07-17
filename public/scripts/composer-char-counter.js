
/*-----------------------------------Showing characters remaining in the counter----------------*/

$(document).ready(function() {
  $("textarea").on("input", function() {
   
    //Finding the length of the input
    const tweetLength = this.value.length;

    //next() method returns the next sibling elements(e that share the same parent) of the selected element.
    // find() method returns descendant (child, grandchild, & so on) elements of the selected element.
    const output = $(this).next().find('#counterID');

    //Counter updating with the value of characters remaining
    const charactersRemaining = 140 - tweetLength;
    output.val(charactersRemaining);
    if (charactersRemaining < 0) {
      $("#counterID").css({color: "#D83A56"});
    } else {
      $("#counterID").css({color: "#171717"});
    }
  });
});


/*------------------------------------------Testing event handlers---------------------------*/
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

/*----------------------------------- Event-handlers on selectors using jquery-------------*/
// it's beneficial to use the on method; bind/click are mapped to the on method internally
//utilizing the on method is going to result in faster and more consistent code.
/*
$("#tweet-text").blur(function () {
 
  console.log("Wrote something in the input field, and then clicked outside the field and it lost its focus (blur).")
});


$("#tweet-text").on("keypress", function () {
  
  console.log("Triggered kepress event, when a keyboard-button is pressed.")
  console.log(this.value);
});
*/
