function display(num){
    result.value+=num
}
function allclear() {
    result.value=""
    
}

function evalexp(){
   // currentexp=result.value
   // result.value=eval(currentexp)
   result.value=eval(result.value)
}

function backspace(){
    result.value=result.value.slice(0,-1)
}