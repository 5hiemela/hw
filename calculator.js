let continueLoop = true;

// Create a table to display the results
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

// Loop until the user clicks "Cancel"
while (continueLoop) {
    let x = prompt("Enter the first number:");
    let y = prompt("Enter the second number:");

    let operator = prompt("Enter an operator (+, -, *, /, %):");

    let result;

    // Checks if inputs are valid numbers & calculates the result based on operator
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

    // Display the result in the table
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    continueLoop = confirm("Click OK to continue or Cancel to exit.");
}

// Close the table
document.write("</table>");
