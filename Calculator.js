function showInput(inputValue) {
    document.getElementById("result").value += inputValue;
    return inputValue;
}

function solve() {
    document.getElementById("result").value = eval(document.getElementById("result").value)
}