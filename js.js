let check = true;
let Ans = "";
function display(expression){
    document.querySelector('input').value += expression;
}
function solveExpression(expression) {
    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");
    expression = expression.replaceAll("%", "/100")
    let res;
    try {
        res = eval(expression);
    }
    catch(e) {
        if(e instanceof SyntaxError){
            res = "invalid";
        } else {throw e;}
    }
    return res;
}
function deleteCharacter() {
    if(check) {
        var valueInput = document.querySelector('input').value;
        valueInput = valueInput.substring(0, valueInput.length - 1);
        document.querySelector('input').value = valueInput;
    }
    else {
        document.querySelector('input').value = "";
    }
}
function checkValidExpression(){
    var input = document.querySelector('input').value;
    if(input.charAt(input.length - 1) ) {

    }
}
document.addEventListener('DOMContentLoaded',  () => {
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = () => {
            var datasetInputType = Object.keys(button.dataset)[0];
            if(datasetInputType === "number" || datasetInputType === "dot"){
                var checkOpe = document.querySelector('input').value;
                if(!check && !(checkOpe.includes("+") || checkOpe.includes("-") || checkOpe.includes("×") || checkOpe.includes("÷"))){
                    deleteCharacter();
                    check = true;
                }
                display(Object.values(button.dataset)[0]);
            }
            else if(datasetInputType === "ope") {
                if(!check ){
                    deleteCharacter();
                    display(Ans + Object.values(button.dataset)[0]);
                }
                else {
                    display(Object.values(button.dataset)[0]);
                }
            }
            else if(datasetInputType === "equal") {
                var result = solveExpression(document.querySelector('input').value);
                Ans = result;
                document.querySelector('input').value = "";
                display(result);
                check = false;
                
            }
            else if(datasetInputType === "ec"){
                deleteCharacter();
                check = true;
            }
        }
    })
});
