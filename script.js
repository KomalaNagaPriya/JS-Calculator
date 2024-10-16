function toDisplay(val){
    document.getElementById("result").value += val;
}
function clearResult(){
    document.getElementById("result").value = "";
}
function calculate(){
    let result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}
