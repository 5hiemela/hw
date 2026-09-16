let continueLoop = true;

// Create a table to display the results
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

// Array to store only valid results
let validResults = [];

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

    // Push valid result into array
    if (!isNaN(result)) {
        validResults.push(result);
    }

    // Display the result in the table
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    continueLoop = confirm("Click OK to continue or Cancel to exit.");
}

// Close the table
document.write("</table>");

// Calculate total
let total = 0;

for (let i = 0; i < validResults.length; i++) {
    total += validResults[i];
}

// Calculate min, max, and average
let min;
let max;
let average;

// Check if there are valid results to avoid errors
if (validResults.length > 0) {
    min = Math.min(...validResults);
    max = Math.max(...validResults);
    average = total / validResults.length;
} else {
    min = "N/A";
    max = "N/A";
    average = "N/A";
}

// Create summary table
document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + average + "</td><td>" + total + "</td></tr>");
document.write("</table>");
