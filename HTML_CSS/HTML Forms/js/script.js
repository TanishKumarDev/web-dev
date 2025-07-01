console.log('JavaScript Loaded');

const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.calc-buttons button');

let currentInput = '';

function updateDisplay() {
    display.value = currentInput || '0';
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else {
            if (currentInput === 'Error') currentInput = '';
            const lastChar = currentInput.slice(-1);

            // Prevent multiple operators in a row
            if (isOperator(value)) {
                if (currentInput === '' || isOperator(lastChar)) return;
            }

            // Prevent multiple decimals in a number
            if (value === '.') {
                const parts = currentInput.split(/[\+\-\*\/]/);
                if (parts[parts.length - 1].includes('.')) return;
            }

            currentInput += value;
        }
        updateDisplay();
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || isOperator(e.key) || e.key === '.') {
        const event = new Event('click');
        [...buttons].find(btn => btn.textContent === e.key)?.dispatchEvent(event);
    } else if (e.key === 'Enter' || e.key === '=') {
        [...buttons].find(btn => btn.textContent === '=')?.click();
    } else if (e.key === 'c' || e.key === 'C' || e.key === 'Escape') {
        [...buttons].find(btn => btn.textContent === 'C')?.click();
    }
});

updateDisplay();