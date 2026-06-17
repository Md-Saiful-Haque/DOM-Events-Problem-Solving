// Day 9 — Algorithms & Problem Solving I

// Problem 1: Two Sum

function twoSum(arr, target) {
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if(complement in map) {
            return [map[complement], i];
        }

        map[arr[i]] = i;
    }

    return [];
}

const arr = [2, 7, 11, 15]
const target = 9;

console.log(twoSum(arr, target));

// Problem 2: Check Anagram


// Problem 3: Find Missing Number
// Problem 4: Valid Parentheses
// Problem 5: Binary Search