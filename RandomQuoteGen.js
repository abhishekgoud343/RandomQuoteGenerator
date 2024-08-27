const quoteList = ["quote1", "quote2", "quote3", "quote4"];

const display = document.getElementById('displ');
const button = document.getElementById('generate');
button.addEventListener('click', () => quoteDisplay(Math.floor(Math.random() * quoteList.length))); //generates a random index for the quote list array and passes it to the quote display function

function quoteDisplay(index) {
    display.textContent = quoteList[index]; //quote is displayed
}