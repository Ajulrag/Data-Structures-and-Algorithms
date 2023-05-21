function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
  
    const sortedLeft = mergeSort(leftArr);
    const sortedRight = mergeSort(rightArr);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(leftArr, rightArr) {
    const mergedArr = [];
  
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        mergedArr.push(leftArr.shift());
      } else {
        mergedArr.push(rightArr.shift());
      }
    }
  
    return mergedArr.concat(leftArr, rightArr);
  }
  
  // Example usage
  const arr = [8, 3, 5, 1, -9, 2, 7, -4];
  const sortedArr = mergeSort(arr);
  console.log("sorted Array",sortedArr);

  /**
   * --------------ARRAY DRIVER MERGE SORT--------------
   * function mergeSort(arr, isDescend) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
  
    const sortedLeft = mergeSort(leftArr, isDescend);
    const sortedRight = mergeSort(rightArr, isDescend);
  
    const sortedArr = merge(sortedLeft, sortedRight, isDescend);
    sortedArr.forEach((el, index) => (arr[index] = el)); // Update original array
  
    return arr;
  }
  
  function merge(leftArr, rightArr, isDescend) {
    const mergedArr = [];
  
    while (leftArr.length && rightArr.length) {
      if (isDescend) {
        if (leftArr[0] > rightArr[0]) {
          mergedArr.push(leftArr.shift());
        } else {
          mergedArr.push(rightArr.shift());
        }
      } else {
        if (leftArr[0] < rightArr[0]) {
          mergedArr.push(leftArr.shift());
        } else {
          mergedArr.push(rightArr.shift());
        }
      }
    }
  
    return mergedArr.concat(leftArr, rightArr);
  }
  

  const arr = [8, 3, 5, 1, -9, 2, 7, -4];
  mergeSort(arr,true); 
  console.log("Sorted Array:", arr);
   */