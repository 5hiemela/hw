let continueLoop = true;

while (continueLoop) {
    let x = prompt("Enter the first number:");
    let y = prompt("Enter the second number:");

    let operator = prompt("Enter an operator (+, -, *, /, %):");

    continueLoop = confirm("Click OK to continue or Cancel to exit.");
}