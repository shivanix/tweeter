/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  // --- our code goes here ---
  console.log("Yes, am ready.");

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

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
     <span>${tweetData.created_at} days ago</span>
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

 const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
console.log($tweet); // to see what it looks like
  
// console.log($tweet[0])

$('.tweets-container').append($tweet);

});

