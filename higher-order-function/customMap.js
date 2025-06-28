
const nums = [1, 2, 3];

function customMap(nums, logic){
    const newArr = []
    for (let index = 0; index < nums.length; index++) {
        newArr.push(logic(nums[index]))
    }
    return newArr
}

const result = customMap(nums, function (num) {
    return num * 2;
});

const result2 = customMap(nums, function (num) {
    return num * 3;
});


console.log(result);
console.log(result2);