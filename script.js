const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
let currentInput = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        handleInput(key.textContent);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 100);
    });
});

window.addEventListener('keydown', e => {
    const key = e.key === 'Enter' ? '=' : e.key;
    if (/[0-9+\-*/.=]/.test(key) || key === 'Backspace') {
        handleInput(key);
        const keyElement = document.querySelector(`.key[data-code="${key}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            setTimeout(() => keyElement.classList.remove('active'), 100);
        }
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
