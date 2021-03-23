/**
 * @param   {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
var towSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let cha = target - nums[i];
    if (map.has(cha)) {
      return [map.get(cha), i];
    } else {
      map.set(nums[i], i);
    }
  }
  //   return [0, 0];
};
module.exports = towSum;
