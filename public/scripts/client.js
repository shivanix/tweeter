/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  // --- our code goes here ---
  console.log("Yes, am ready.");
  console.log(timeago.format(new Date()));

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

 const createTweetElement = function (tweetData){
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

//  const $tweet = createTweetElement(tweetData);




/*---------------------------------------------------f for taking array------------------------------------------------*/

const renderTweets = function(tweetsArray){
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  for (const tweet of tweetsArray) {
    const $newTweet = createTweetElement(tweet);
    $('.tweets-container').append($newTweet);
  }
}

renderTweets(tweetData);
});

