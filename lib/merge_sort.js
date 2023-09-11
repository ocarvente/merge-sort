function merge(array1, array2) {
    // go through both arrays and grab the first element.
    // if the array is empty set the element to infinity to sort the element from other array
    // compare the elements
    // pop the smaller element and push that to the solution array
    var result = [];

    while(array1.length || array2.length) {

        var element1 = array1.length ? array1[0] : Infinity;
        var element2 = array2.length ? array2[0] : Infinity;

        let smaller = element1 < element2 ? array1.shift() : array2.shift();
        result.push(smaller);
    }
    return result;
}

function mergeSort(array) {
    if(array.length<=1) {
        return array;
    }
    let middleIndex = Math.floor(array.length/2);
    let leftSorted = mergeSort(array.slice(0, middleIndex));
    let rightSorted = mergeSort(array.slice(middleIndex));

    return merge(leftSorted, rightSorted);
}

module.exports = {
    merge,
    mergeSort
};