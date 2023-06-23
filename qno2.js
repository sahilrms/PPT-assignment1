let num = [5, 1, 5, 5, 5, 2, 3, 4, 5]
let val = 5;
function swapNumber(num = [], val) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] === val) {
            num[i] = '_';
        }
    }

    for (let i = 0; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] === '_' && num[j] != '_') {
                let temp = num[j];
                num[j] = num[i];
                num[i] = temp;
            }
        }
    }

    return ({
        num, "k": countNotUnderscore(num)
    })

}

function countNotUnderscore(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '_') {
            count++;
        }
    }
    return count;
}

console.log(swapNumber(num, val)) 