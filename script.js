const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
let currentInput = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        handleInput(key.textContent);
    });
});

function handleInput(input) {
    if (input === 'C') {
        currentInput = '';
    } else if (input === '=') {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
    } else {
        currentInput += input;
    }
    display.textContent = currentInput || '0';
}
