let nums1 = [10, 20, 30, 40, 50];
let nums2 = [10, 20, 35, 40, 50];

let isAllMultipleOf10 = function (arr) {
    return arr.every(function (el) {
        return el % 10 === 0;
    });
};

console.log("Array 1:", nums1);
console.log("Are all elements multiples of 10?", isAllMultipleOf10(nums1));

console.log("Array 2:", nums2);
console.log("Are all elements multiples of 10?", isAllMultipleOf10(nums2));
