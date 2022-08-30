function displayNum(num){
    result.value+=num
    // result.value=result.value+num
}
function allClear(){
    result.value=""
}
function evaluateExp(){
    // exp=result.value
    // out=eval(exp)
    // result.value=out
    result.value=eval(result.value)
}
function removeElmnt(){
    curExp=result.value
    result.value=curExp.slice(0,-1)
}