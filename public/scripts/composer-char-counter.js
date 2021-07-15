// alert("Hey! Am working! Wohoo!");


/*-------------------------------------Showing characters remaining in the counter----------------*/

$(document).ready(function () {
  $("textarea").on("input", function () {
    console.log("INPUT DETECTED!");
    // accessing the value of the input
    console.log(this.value);

    //finding the length of the input
    const tweetLength = this.value.length;

    //next() method returns the next sibling elements(e that share the same parent) of the selected element.
    // find() method returns descendant (child, grandchild, & so on) elements of the selected element. 
    const output = $(this).next().find('#counterID');

    //counter updating with the value of characters remaining
    const charactersRemaining = 140 - tweetLength
    output[0].defaultValue = charactersRemaining;

    console.log(output[0].defaultValue);
  })
});
//   $(".tweet-text").on("input",function() {
//     let textCount = $(this).val(); //capturing all characters in the textarea
//     let newCount = 140 - textCount.length; 
//     $(".counter").val(newCount);

//     if(newCount < 0) {
//         $(".counter").css({color: "#ff0000"});
//     } else {
//         $(".counter").css({color: "#000000"});
//     }

// })

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
