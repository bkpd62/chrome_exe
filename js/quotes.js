const quotes = [
    {
        quote: "oneoneone - 1",
        author: "oneoneone - 2"
    },
    {
        quote: "twotwotwo - 1",
        author: "twotwotwo - 2"
    },
    {
        quote: "threethreethree - 1",
        author: "threethreethree - 2"
    },
    {
        quote: "fourfourfour - 1",
        author: "fourfourfour - 2"
    },
    {
        quote: "fivefivefive - 1",
        author: "fivefivefive - 2"
    },
    {
        quote: "sixsixsix - 1",
        author: "sixsixsix - 2"
    },
    {
        quote: "sevensevenseven - 1",
        author: "sevensevenseven - 2"
    },
    {
        quote: "eighteighteight - 1",
        author: "eighteighteight - 2"
    },
    {
        quote: "nineninenine - 1",
        author: "nineninenine - 2"
    },
    {
        quote: "tententen - 1",
        author: "tententen - 2"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;