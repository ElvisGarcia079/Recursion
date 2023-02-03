function fibbonaci(num){
    if(num <= 1){
        return num;
    }

    return num * fibbonaci(num - 1)
}

console.log(fibbonaci(5))