function factorial(n) {


    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(7900000));
