const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const randomBtn = document.querySelector(".random-btn");
const text = document.querySelector(".text");
const author = document.querySelector(".author");
const index = document.querySelector(".number")
let num = 0;

const quotes = [
  {
    author: "Derek Sivers",
    quote: "Obvious to you, amazing to others"
  },
  {
    author: "Mahatma Gandi",
    quote: "The problem is you think you have time"
  },
  {
    author: "Mahatma Gandi",
    quote: "Be the Change you want to see in the world"
  },
  {
    author: "Kahlil Gibran",
    quote: "Beauty is not in the face; Beauty is a light in the heart."
  },
  {
    author: "Rabindranath Tagore",
    quote: "You cant cross the sea merely by standing and starring at the water"
  },
  {
    author: "Kirk Franklin",
    quote: "Your perspective will determine your future"
  },
  {
    author: "Mustafa Khundmiri",
    quote: "Your audience can fuel your marketing if your marketing does not fool your audience"
  },
  {
    author: "Mustafa Khundmiri",
    quote: "If you build it, they wont come. If you build an audience before building it, they'll come rushing."
  },
]

const genQuote = num =>{
   text.textContent = quotes[num].quote;
   author.textContent =`-${quotes[num].author}` 
   index.textContent = `${num+1}/${quotes.length}`
}
genQuote(num);

const nextQuote = () =>{
  if(num < quotes.length -1){
    num++
  }else{
    num = 0
  }
  genQuote(num);
}
const prevQuote = () =>{
  if(num > 0){
    num--
  }else{
    num =  quotes.length -1
  }
  genQuote(num);
}
const randomQuote = ()=>{
   num = Math.floor(Math.random()*quotes.length);
   genQuote(num);
}
