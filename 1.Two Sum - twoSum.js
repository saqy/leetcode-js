/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {


    let map = {};
    for (let i = 0; i < nums.length; i++) {

        const num1 = nums[i];
        const num2 = target - num1;
        if (map[num2] !== undefined) {
            return [map[num2], i];
        }

        map[nums[i]] = i;

    }

    return [];

};

// Time complexity for this is 0(n) and space complexcity is also 0(n) since it is using object to store index and values of nums

// There is also a brute froce way to solve this, that will require 2 loops and time complexity for that would be o(n square.)