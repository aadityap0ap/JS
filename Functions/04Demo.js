// Lexical vs Global Scope
// Scope simply means: "Where can a variable be used?"

// 🔹 GLOBAL SCOPE
// These variables are written outside any function
// So they can be used ANYWHERE in the file
const userName = 'Aditya';
const userAge = 23;
var a = 50; // also global (but var is old style)

function subtract() {
    debugger
    // 🔹 FUNCTION SCOPE
    // Variables written inside a function
    // They can be used ONLY inside this function

    const x = 45;
    const y = 29;
    const z = 4;

    console.log(x - y);     // works (x and y are inside subtract)
    console.log(userName); // works (global variable can be used inside function)

    function child() {
        // 🔹 BLOCK / INNER FUNCTION SCOPE
        // Variables written inside this function
        // They can be used ONLY inside child()

        const childName = 'Fateh Singh';

        console.log(childName); //  works (same scope)
        console.log(z);         //  works (child can access parent's variables)
        console.log(userAge);   //  works (global variable)
    }

    child(); // calling the child function
}

// Calling the subtract function
subtract();

// 🔹 BACK TO GLOBAL SCOPE
// This line runs after everything above
console.log('Program Ended');
