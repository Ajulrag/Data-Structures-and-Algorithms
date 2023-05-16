function BS(arr, t, left = 0, right = arr.length) {
    const mid = Math.floor((left + right)/2);
    if( arr[mid] == t) {
        return mid;
    }
    if (t < arr[mid]) {
        right = mid;
    } else {
        left = mid + 1;
    }
    return BS(arr, t, left, right);
}

const array = [1,2,3,4,5,6,7,8,9,10];
console.log(BS(array, 7))