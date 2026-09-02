function getMin(nums) {
    let min = nums.reduce(function (minVal, el) {
        if (el < minVal) {
            return el;
        } else {
            return minVal;
        }
    });
    return min;
}

let numbers1 = [20, 10, 40, 5, 30];
let numbers2 = [-5, 12, 0, -15, 8];

console.log("Array 1:", numbers1);
console.log("Minimum value in Array 1:", getMin(numbers1));

console.log("Array 2:", numbers2);
console.log("Minimum value in Array 2:", getMin(numbers2));
