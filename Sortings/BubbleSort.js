function bubbleSort(arr) {
    let swapped;
    do{
        swapped = false;
        for (let i=0; i<arr.length-1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
}

const arr = [9,-4,0,7,-2,6];
bubbleSort(arr);
console.log(arr);


/***
 * --------------------------------------ARRAY DRIVER BUBBLE SORT-----------------------
 * 
 * function bubbleSort(arr, isDescend) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (isDescend ? arr[i] < arr[i + 1] : arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    
  }
  
  const arr = [3, 9, -6, 9, 0, -7, 0];
  bubbleSort(arr,true);
  console.log(arr);
 */