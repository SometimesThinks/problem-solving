function solution(n) {
    const nums = new Array(n + 1)
    nums[1] = 1
    
    for (let i = 2; i < n + 1; i++) {
        nums[i] = nums[i - 1] + 1
        
        while (nums[i] % 3 === 0 || nums[i].toString().includes('3')) {
            nums[i] += 1
        }
    }

    return nums[n]
}