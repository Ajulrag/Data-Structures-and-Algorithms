function insertionSort(arr) {
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert;
    }
}

const arr = [8,20,-2,4,-6];
insertionSort(arr);
console.log(arr);


/**
 * ------------------ARRAY DRIVER INSERTION SORT-----------------------
 * 
 * function insertionSort(arr,isDescend) {
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1
        
        if (isDescend) {
            while (j >= 0 && arr[j] < numberToInsert) {
              arr[j + 1] = arr[j];
              j = j - 1;
            }
          } else {
            while (j >= 0 && arr[j] > numberToInsert) {
              arr[j + 1] = arr[j];
              j = j - 1;
            }
          }
          
          arr[j + 1] = numberToInsert;
    }
    
}

const arr = [8,20,-2,4,-6];
insertionSort(arr,true);
console.log(arr);
  
 */