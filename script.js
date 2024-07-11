const display = document.getElementById('display');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
let currentInput = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        handleInput(key.textContent);
        if (key.textContent === '=') {
            key.classList.add('active');
            setTimeout(() => key.classList.remove('active'), 100);
            triggerGlowAnimation();
        } else {
            key.classList.add('active');
            setTimeout(() => key.classList.remove('active'), 100);
        }
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
            if (key === '=') {
                triggerGlowAnimation();
            }
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

function triggerGlowAnimation() {
    keys.forEach(key => {
        key.classList.add('glow');
        setTimeout(() => key.classList.remove('glow'), 500);
    });
}
