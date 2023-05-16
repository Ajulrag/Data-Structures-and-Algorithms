function recFact(n) {
    if(n == 0 ) {
        return 1;
    }
    return recFact(n-1) * n;
}
console.log(recFact(5));