function sumNumbers(n){
    
    if(n <= 1){
        return n;
    }

    return n + sumNumbers(n-1);
}

console.log(sumNumbers(5));