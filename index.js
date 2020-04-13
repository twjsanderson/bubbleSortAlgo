/**
 * Swap Function
 * Helper function that swaps elements in place
 * @param {array} (array)
 * @param {number} (larger number)
 * @param {number} (smaller number)
 */
const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

/**
 * Bubble Sort Function
 * Version 1 (Recursion)
 * @param {array} (unsorted array)
 * @return {array} (sorted array)
 */
const bubbleSort1 = (array) => {
    
    // Base case for single element in the array
    if (array.length <= 1) return array

    // Boolean represents whether elements in the array have been swapped
    let check = false;

    // Run through array and swap elements if second element is greater than the first
    for(let i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) {
            swap(array, i, i + 1)
            check = true
        }
    }

    // If the elements haven't been swap the array is sorted, return array
    // else recursively call bubbleSort()
    if (!check) {
        return array
    } else {
       return bubbleSort1(array);
    }
};

/**
 * Bubble Sort Function
 * Version 2 (Iterative)
 * @param {array} (unsorted array)
 * @return {array} (sorted array)
 */
const bubbleSort2 = (array) => {
    
    // Initialize a stop variable that will be used as 
    // the stopping point for the inner loop. 
    // Once an inner cycle is complete the last variable will become the largest number in the array.
    // We can therefore ignore it and leave it in place, and shorten the area our loop scans for the next
    // iteration. Hence the array.length - i;
    let stop;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0, stop = array.length - i; j < stop; j++) {
            if (array[j] > array[j + 1]){
                swap(array, j, j + 1);
            }
        }
    }

    return array;
};


const array1 = [2,3,7,6,1];
console.log('recursive bubble sort: ', bubbleSort1(array1));

const array2 = [5,2,3,4,1];
console.log('iterative bubble sort: ', bubbleSort2(array2));

