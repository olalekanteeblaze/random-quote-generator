function openURL(url) {
  window.open(
    url,
    "Share",
    "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
  );
}

var quotes = [
  [
    " We are what we repeatedly do; excellence, then, is not an act but a habit.", 
    "-Aristotle"],
  [
    "Those who believe in telekinetics, raise my hand.", 
    "-Kurt Voneggut"],
  [
    " Sometimes I worry about being a success in a mediocre world.", 
    "—Lily Tomlin"],
  [
    "If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.",
    "—Anon"],
  [
    "When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.", 
    "—Clarence Darrow"],
  [
    "I’d rather live with a good question than a bad answer.", 
    "—Aryeh Frimer"], 
  [
    "We learn something every day, and lots of times it’s that what we learned the day before was wrong.",
    "—Bill Vaughan"]
  
];

var randompick = 0;
var prev = 0;
var  quotable = "";
var  author = "";

function randomQuote(){
  do {
    randompick = Math.floor(Math.random() * quotes.length);
     } while ( randompick === prev);
  quotable = quotes[randompick][0];
  author = quotes[randompick][1];
};

function generateNewQuote(){
  $(".btn").css({
    opacity:"0"
  });
  $(".btn").animate({
    opacity:"1"
  });
  $("#quote").html(quotable);
  $(".author").html(author);
  
};

$(document).ready(function(){
  randomQuote();
  generateNewQuote();
});

$("#generate").on("click", function(){
  randomQuote();
  generateNewQuote();
  prev = randompick;
  
});

$("#tweetQuote").on("click", function(){
  
  openURL(         "https://twitter.com/intent/tweet?hashtag=quotes&related=freecodecamp&text="
  +
          encodeURIComponent('"' + quotable + '"' + author)
  );
});


