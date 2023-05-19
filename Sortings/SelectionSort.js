function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap the elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  
  // Example usage
  const array = [5, 3, 8, 2, 1, 4];
  console.log("Original Array:", array);
  
  const sortedArray = selectionSort(array);
  console.log("Sorted Array:", sortedArray);
  