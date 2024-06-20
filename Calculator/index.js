let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let str = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonTxt = e.target.textContent;
        if (buttonTxt === '=') {
            str = eval(str);
            input.value = str;
        }
        else if (buttonTxt === 'AC') {
            str = '';
            input.value = str;
        }
        else if (buttonTxt === 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        else {
            str += buttonTxt;
            input.value = str;
        }



    })
})