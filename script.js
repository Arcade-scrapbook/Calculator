const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
let currentInput = '';

keys.forEach(key => {
    key.addEventListener('click', () => {const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
let currentInput = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        handleInput(key.textContent);
    });
});

window.addEventListener('keydown', e => {
    const key = e.key === 'Enter' ? '=' : e.key;
    if (/[0-9+\-*/.=]/.test(key) || key === 'Backspace') {
        handleInput(key);
    }
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
    } else if (input === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput += input;
    }
    display.textContent = currentInput || '0';
}

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
