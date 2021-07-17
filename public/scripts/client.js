/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  /*---------------------------------------Func calls AJAX Get req then renders tweets--------------- */
  const loadTweets = function() {
    
    $.ajax({
      type: "GET",
      url: '/tweets'
    })
      .then(function(moreTweets) {
        $(".tweets-container").empty();
        renderTweets(moreTweets);
      });
  };
  
   loadTweets();

  /*----------------------------------------Adding event listener for submit--------------------------------*/

  $("#tweet-made").submit(function(event) {
  
    // event.preventDefault() to prevent the default form submission behaviour.
    event.preventDefault();
  
    // Hide error html element prior to validation
    $(".error-message").hide();
    const formData = $(this).serialize();
    
    // validation before sending the form data to the server
    if ((formData.length - 5) <= 140 && formData !== null && !((formData.length - 5) <= 0)) {
      
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: formData
      })
      
      // "done" is used instead of then because done will only execute when the Deferred object is resolved
      // "then" will execute even while the Deferred object is still in progress
        .done(()=>{
          $("textarea").val('');//Clear text area
           $("#counterID").val(140);//Setting character numbers to 140
          loadTweets();
        });

      // error messages
    } else {
      console.log("error");
      $(".error-message").slideDown(200);
      if (formData.length > 140) {
        $(".error-message").find("p").text("Oops! tweet content too long, limit to 140 chars.");
      }
      if ((formData.length - 5) <= 0) {
        $(".error-message").find("p").text("Oops! tweet content is empty.");
      }
      if (formData === null) {
        $(".error-message").find("p").text("Oops! tweet content is invalid.");
      }
      return $("body").click(function() {
      $(".error-message").slideUp(1000);
      })
    }
  });
});

/*----------------------------------------Func to return HTML tweet structure-------------------------*/

const createTweetElement = function(tweetData) {
  const userData = tweetData.user;

  const htmlMarkup = ` <article>
   <header>
     <div>
       <img src="${userData.avatars}" alt="profileImage">
       <span>${escapeHtml(userData.name)}</span>
     </div>
     <span><h3>${escapeHtml(userData.handle)}</h3></span>
   </header>
   <h2>${escapeHtml(tweetData.content.text)}</h2>
   <hr>
   <footer>
     <span>${timeago.format(tweetData.created_at)}</span>
     <div>
       <span><i class="fas fa-flag"></i></span>
       <span><i class="fas fa-retweet"></i></span>
       <span><i class="fas fa-heart"></i></span>
     </div>
   </footer>
 </article>`;

  const $tweet = $(htmlMarkup);

  return $tweet;
};

/*-------------------------------------Func for taking in array of tweet objects----------------------------*/

const renderTweets = function(tweetsArray) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and prepends it to the tweets container

  for (const tweet of tweetsArray) {
    const $newTweet = createTweetElement(tweet);
    $('.tweets-container').prepend($newTweet);
  }
};

/*--------------------------------------Preventing XSS with an "escape" func----------------------------------*/
const escapeHtml = function(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
};