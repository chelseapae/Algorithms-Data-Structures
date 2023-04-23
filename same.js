// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) - true

/** O(n^2) solution **/
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    };

    for (let i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if (currentIndex === -1) {
            return false;
        }
        arr2.splice(currentIndex, 1)
    }
    return true
}

/** O(n) solution **/
function same2(arr1, arr2) {

}