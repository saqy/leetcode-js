/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function (nums) {

    let leftSum=0;
    const sum = nums.reduce((accum, currentValue, nextValue) => {
        return accum + currentValue;
    }, 0);

    for (let i=0; i< nums.length; i++){
        const rightSum = sum - leftSum - nums[i];

        if(leftSum === rightSum ){
            return i;
        }

        leftSum+=nums[i];
    }

return -1;

}