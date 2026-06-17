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

function isAnagram(str1, str2) {
    const sorted1 = str1.toLowerCase().split('').sort().join('');
    const sorted2 = str2.toLowerCase().split('').sort().join('');

    return sorted1 === sorted2;
}

const str1 = "listen";
const str2 = "silent";

console.log(isAnagram(str1, str2));

// Problem 3: Find Missing Number

function findMissing(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let num of arr) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5];
const n = 5;

console.log(findMissing(arr, n));

// Problem 4: Valid Parentheses
// Problem 5: Binary Search