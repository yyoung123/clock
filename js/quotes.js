const quotes = [
  {
    quote: "Life is a series of building, testing, changing and iterating.",
    author: "Lauren Mosenthal",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Generosity is giving more than you can, and pride is taking less than you need.",
    author: "Khalil Gibran",
  },
  {
    quote: "life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
  {
    quote: "The world is a book, and those who do not travel read only a page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is what happens to you while you are busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
// console.log(quotes[Math.floor(Math.random() * 10)]);
// console.log(quotes[0]); // 첫번째 명언 출력

// Math.random()  -> 0.36135750982088566 : 0에서 1 사이의 숫자를 랜덤으로 제공
// Math.round(1.5) -> 2 :반올림
// Math.ceil(1.3) -> 2 :올림
// Math.floor(1.9) -> 1 :버림
