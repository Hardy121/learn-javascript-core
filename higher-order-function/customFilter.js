const nums = [1, 2, 3, 4, 5];

function customFilter(nums, logic){
    let filteredArr = []
    for (let i = 0; i < nums.length; i++) {
        if (logic(nums[i])) {
            filteredArr.push(nums[i])
        }
    }
    return filteredArr
}

const result = customFilter(nums, function (num) {
  return num % 2 === 0;
});

const result2 = customFilter(nums, function (num) {
  return num % 2;
});

console.log(result); // [2, 4]
console.log(result2); //[ 1, 3, 5 ]
