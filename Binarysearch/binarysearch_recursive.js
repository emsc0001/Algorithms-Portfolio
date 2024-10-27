let count = 0;

function binarySearchRecursive(value, array, low, high, comparator = (a, b) => a - b) {
    count++;
    
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);
    const comparison = comparator(value, array[mid]);

    if (comparison === 0) {
        return mid;
    } else if (comparison < 0) {
        return binarySearchRecursive(value, array, low, high, comparator);
    } else {
        return binarySearchRecursive(value, array, low, high, comparator);
    }
}