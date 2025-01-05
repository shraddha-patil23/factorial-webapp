// JavaScript for factorial calculations
document.getElementById("calculateBtn").addEventListener("click", () => {
    const numberInput = document.getElementById("number").value;
    const method = document.getElementById("method").value;
    const outputDiv = document.getElementById("output");

    // Clear previous output
    outputDiv.innerHTML = "";

    // Input validation
    const number = parseInt(numberInput);
    if (isNaN(number) || number < 0) {
        outputDiv.innerHTML = "Please enter a valid positive integer.";
        return;
    }

    // Factorial calculation
    let result;
    if (method === "iterative") {
        result = factorialIterative(number);
    } else if (method === "recursive") {
        result = factorialRecursive(number);
    }

    // Display result
    outputDiv.innerHTML = `The factorial of ${number} using the ${method} method is: <strong>${result}</strong>`;
});

// Iterative factorial function
function factorialIterative(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Recursive factorial function
function factorialRecursive(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorialRecursive(num - 1);
}
