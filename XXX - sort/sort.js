// My bubblesort function
function bubbleSort (array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array [i + 1]) {
                let temp = array [i];
                array[i] = array [i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return array;
}

// test of the function
let arr = [5, 3, 33, 8, 4, 2, 55]
console.log(bubbleSort(arr));