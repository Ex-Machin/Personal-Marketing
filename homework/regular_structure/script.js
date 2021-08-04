// console.log use to check if it's work at all

console.log('Hello world');

// ; - semicolon  // sometimes we need it, sometimes it's not necessery

// Variables

const foo = 5; // const foo = 5,
const bar = 4; //       bar = 4;

const foobar = foo + bar;

console.log(foobar);
alert(foobar);


// Quotes 

const maleName = "Jane"; // double quotes

const femaleName = 'Jim'; // quotes

const string = 'I came up with a new word: "dslf" ';  // combinataion

const strangePhrase = `Wubbalubbadubdub`; // backticks - also we will need it for encapsulation

const color = 'I\'m Slim Shady'  // we can use Escape character for 
console.log(color);

// Escape character \

// document

const constParagraph = document.querySelector('p');

let letParagraph = document.getElementById('carouselExampleIndicators');

var varParagraph = document.querySelector('#paragraph')

// function

function say(phrase) {
    console.log(phrase);
}

say('hello');
say("it's me");

// another example 

let sum = function(a, b) {
    return a + b;
};

console.log( sum(1, 2) );

// function naming (screenshots)

showMessage() // this will show the message
getAge() // this will get the age
calcSum() // this will calculate sum

// an so on (we are writing code most of the time not for us but for others too)

// array function (we don't need to use "return")

let sumForArray = (a, b) => a + b;

// addeventListener

// click - Left click
//contextmenu - right click
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.

// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>. Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.

// style 

// background-color  => elem.style.backgroundColor = ""
// z-index           => elem.style.zIndex = "2"
// border-left-width => elem.style.borderLeftWidth = "2px";
// display           => elem.style.display = "none";