const printDigits = num =>{
    while(num){
        let digit = num % 10
        console.log(digit)
        num -= digit
        num /= 10
    }
}

console.log(printDigits(314))
console.log(printDigits(2505))
console.log(printDigits(45678))

// Write a function called printDigits that takes in one argument, num. 
// When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. 
// Do not do this by just turning the number into a string and reversing it. 
// Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)