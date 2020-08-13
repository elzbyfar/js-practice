const containsCloseNums = (nums, k) => {
	let indexes = {};

	for (let i = 0; i < nums.length; i++) {
		if (Object.keys(indexes).includes(nums[i].toString())) {
			return Math.abs(indexes[nums[i]] - i) <= k;
		} else {
			indexes[nums[i]] = i;
		}
	}
	return false;
};

// console.log(containsCloseNums([ 99, 99 ], 2));
// console.log(containsCloseNums([ 0, 1, 2, 3, 5, 2 ], 3));
