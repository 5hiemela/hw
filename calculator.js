let continueLoop = true;

document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (continueLoop) {
    let x = prompt("Enter the first number:");
    let y = prompt("Enter the second number:");

    let operator = prompt("Enter an operator (+, -, *, /, %):");

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Invalid input number";
    } else if (operator === "+") {
        result = Number(x) + Number(y);
    } else if (operator === "-") {
        result = Number(x) - Number(y);
    } else if (operator === "*") {
        result = Number(x) * Number(y);
    } else if (operator === "/") {
        result = Number(x) / Number(y);
    } else if (operator === "%") {
        result = Number(x) % Number(y);
    } else {
        result = "Invalid operator"
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    continueLoop = confirm("Click OK to continue or Cancel to exit.");
}

document.write("</table>");
