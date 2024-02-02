const quotesDictionary = [
  "Life is what we make it and how we make it – whether we realize it or not. - Napoleon Hill",
  "Don't let anyone tell you what you can't do. Follow your dreams and persist. - Barack Obama",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best way to find out what you want in life is to try a lot of things. - Oprah Winfrey",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"]

const quoteDisplay = document.getElementById("quoteDisplay");
const button = document.getElementById("button");

quoteDisplay.textContent="Quote Display";

button.addEventListener("click", randomQuoteFN);

function randomQuoteFN() {
  const randomIndex = Math.floor(Math.random() * quotesDictionary.length);
  const randomQuote = quotesDictionary[randomIndex];
  quoteDisplay.textContent = randomQuote;
}

randomQuoteFN();