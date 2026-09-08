function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(7900000));

function factorial2(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial2(n - 1);
}

console.log(factorial2(5)); // 120
console.log(factorial2(7900000));
