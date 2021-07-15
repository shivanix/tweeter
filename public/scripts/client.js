/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": '1994-05-25'
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function () {

  console.log("Yes, am ready.");

  renderTweets(tweetData);


  /*----------------------------------------adding event listener for submit--------------------------------*/
  // event.preventDefault() to prevent the default form submission behaviour.

  $("#tweet-made").submit(function (event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
    const formData = $(this).serialize();
    console.log(event);

    // AJAX POST request
    $.ajax({
      type: "POST",
      url: '/tweets',
      data: formData
    });
  });
});

/*----------------------------------------f to return HTML tweet structure-------------------------*/
const createTweetElement = function (tweetData) {
  const userData = tweetData.user;

  const htmlMarkup = ` <article>
   <header>
     <div>
       <img src="${userData.avatars}" alt="boy-img">
       <span>${userData.name}</span>
     </div>
     <span><h3>${userData.handle}</h3></span>
   </header>
   <h2>${tweetData.content.text}</h2>
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
}

/*-------------------------------------f for taking in array of tweet objects----------------------------*/

const renderTweets = function (tweetsArray) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  for (const tweet of tweetsArray) {
    const $newTweet = createTweetElement(tweet);
    $('.tweets-container').append($newTweet);
  }
}
