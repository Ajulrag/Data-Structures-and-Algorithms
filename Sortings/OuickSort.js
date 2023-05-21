function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length-1];

    let left = [];
    let right = [];

    for(let i = 0; i< arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot ,...quickSort(right)]
}

const arr = [3,8,-3,6,-7,0];
console.log(quickSort(arr));




/**
 * -------------------ARRAY DRIVER QUICK SORT-------------------------
 * 
 * function quickSort(arr, isDescend) {
    function sort(arr, isDescend) {
      if (arr.length < 2) {
        return arr;
      }
      
      let leftArray = [];
      let rightArray = [];
      let pivot = arr[arr.length - 1];
      
      if (isDescend) {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < pivot) { 
            rightArray.push(arr[i]);
          } else {
            leftArray.push(arr[i]);
          }
        }
      } else {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > pivot) {
            rightArray.push(arr[i]);
          } else {
            leftArray.push(arr[i]);
          }
        }
      }
      
      return [...sort(leftArray, isDescend), pivot, ...sort(rightArray, isDescend)];
    }
    const sortedArray = sort(arr, isDescend);
    sortedArray.forEach((el, index)=> arr[index]= el)
}

const array = [5, 3, 8, 2, 1, 4];

quickSort(array,true)

console.log(array)
 */