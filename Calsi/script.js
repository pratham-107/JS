let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');

for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        let data = e.target.innerText;

        if (data === "AC") {
            display.value = "";
        } else if (data === "=") {
                display.value = eval(display.value);
        } else if (data === "<=") {
            display.value = display.value.slice(0, -1); // Backspace
        } else {
            display.value += data;
        }
    });
}
