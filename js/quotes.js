const quotes = [
    {
        quote: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Only I can change me life, no one can do it for me",
        author: "Carol Burnett"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Gail Winfrey"
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "Washington Irving"
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
