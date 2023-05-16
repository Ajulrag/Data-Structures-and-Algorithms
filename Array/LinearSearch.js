function linearSearch(arr,target) {
    for (let i=0; i<arr.length; i++ ) {
        if(arr[i] === target) {
            return i;
        }   
    }
    return -1;
}

console.log(linearSearch([3,5,2,8,9],2));