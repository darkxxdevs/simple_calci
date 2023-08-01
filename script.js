const input1 = document.querySelector("#input1");
const operator = document.querySelector("#operator");
const result = document.getElementById("result_")
const input2 = document.querySelector("#input2");
var count = 0;


function changeToMinus() {
    operator.innerHTML = "-"
    operator.value = "-"
}

function changeToPro() {
    operator.innerHTML = "x"
    operator.value = "x"
}

function changeToDivide() {
    operator.innerHTML = "/"
    operator.value = "/"
}




function doCalculations() {
    const oprationNumber = document.getElementById("operation-numbers")


    const inputVal1 = parseFloat(input1.value);
    const inputVal2 = parseFloat(input2.value);

    switch (operator.value) {
        case '-':
            result.innerHTML = inputVal1 - inputVal2;
            break;

        case 'x':
            result.innerHTML = inputVal1 * inputVal2;
            break;

        case '/':
            result.innerHTML = inputVal1 / inputVal2;
            break;
        default:
            result.innerHTML = inputVal1 + inputVal2;
            break;


    }
    count++
    oprationNumber.innerHTML = count;
}

function resetToDefalut() {
    result.innerHTML = ""
    input1.value = ""
    input2.value = ""
    operator.innerHTML = "+"
    operator.value = "+"

}
