function binarySearch(arr,target,left=0,right=arr.length) {
    const mid =Math.floor((left+right)/2);
    if(arr[mid] == target) {
        return mid;
    }
    if(right - left==1) {
        return -1;
    }
    if(target < arr[mid] ) {
        right = mid;
    } else {
        left = mid+1;
    }
    return binarySearch(arr,target,left,right);
}

console.log(binarySearch([1,2,3,4,5,6,8,98],1))