function isPrime(n) {
    if(n<2){
        console.log("Ith");
        return false;
    }

    for( let i=2; i<n; i++ ) {
        if( n%i == 0 ) {
            
            return false;
        }
    }
    console.log(n+"is Prime");
    return true;
}

console.log(isPrime(5));