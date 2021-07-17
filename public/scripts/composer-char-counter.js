
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

