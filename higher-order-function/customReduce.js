const nums = [1, 2, 3, 4];

function customReduce(array, callback, initialvalue) {
    let acc = initialvalue
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], i, array)
    }
    return acc
}

const result = customReduce(nums, function (acc, curr) {
    return acc + curr;
}, 0);

console.log(result); // 10
