var number1 = Math.ceil(Math.random() * 9); //Math.ceil = return the closest and greatest intergral like Math.ceil(21.4) = 22
var number2 = Math.ceil(Math.random() * 9);
var result = number1 * number2;
var word = document.createElement('div'); // which means that I would make new "div" tag
word.textContent = number1 + " x " + number2;
document.body.append(word); //which means I would append "div" tag inside the body tage
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number'; //If I put the mouse icon on the codes, I could figure out the type of code. For example, if  someone make ambiguous variables, other people would consider this as another code and try to type wrong function which makes serious errors. Ts prevent this kind of errors effeciently.
form.append(input);
var button = document.createElement('button');
button.textContent = 'input';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = 'It is right';
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        result = number1 * number2; //restart multiplication tables.
        word.textContent = number1 + " x " + number2;
        input.value = '';
    }
    else {
        resultDiv.textContent = 'It is false';
        input.value = '';
        input.focus(); // move cursor to input box.
    }
});
//habbits that I shuold Bear in mind 
//1. the sector of " <script src>" = you should always link this with .js file.
//2. write codes in .ts file -> open terminal -> type "ts filename.ts" -> then, I would receive the compiled file translated into .js
//3. Before I start coding, I should/ open terminal -> type "tsc filename.ts -w" which allows me to find bugs immediately.
//4.
