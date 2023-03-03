function sumNumbers(n){
    
    // Base Case
    if(n <= 1){
        return n;
    }

    return n + sumNumbers(n-1);
}

console.log(sumNumbers(5));