const calculate = (num, calc, result) => {
  calc.innerHTML = num + "=";
  // *** Logic is based on single operator calculations ***.
  // Transform the output string into an array of values.
  let outputArray = num.split("")

  // Find the value of the operator in our array
  function getOperator(outputArray) {
    let operator = outputArray.filter(index  =>  
        (index === "+" | index === "-" | index === "/" | index === "*"))
        .toString();  
    return operator;
  }

  let newOperator = getOperator(outputArray)

  // Locate operator, store values either side of operator into variables.
  let i = outputArray.indexOf(newOperator);  
  let right = parseFloat(outputArray.splice(i+1).join(""));
  let left = parseFloat(outputArray.splice(-0, i).join(""));

  // Pass variables to switch statement and evaluate.  
  switch(newOperator) {
    case "+":
        let plus = (left + right);
        (plus - Math.floor(plus)) !== 0 ?
          result.innerHTML = plus.toFixed(2) :
          result.innerHTML = plus;
    break;
    case "-":
        let minus = (left - right);
        (minus - Math.floor(minus)) !== 0 ?
          result.innerHTML = minus.toFixed(2) :
          result.innerHTML = minus;
    break;
    case "*":
        let multiply = (left * right);
        (multiply - Math.floor(multiply)) !== 0 ?
          result.innerHTML = multiply.toFixed(2) :
          result.innerHTML = multiply;
    break;
    case "/":
        let divide = (left / right);
        (divide - Math.floor(divide)) !== 0 ?
          result.innerHTML = divide.toFixed(2) :
          result.innerHTML = divide;
    break;
    default:
    break;
  }
}

export default calculate;