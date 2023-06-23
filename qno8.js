// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

let data_array = [1, 2, 3, 4, 4];
function missingNumber(data_array) {
    for (i = 0; i < data_array.length - 1; i++) {
        if (data_array[i] === data_array[i + 1]) {
            return ([data_array[i], data_array[i] + 1])
        }
    }
}
console.log(missingNumber(data_array))
