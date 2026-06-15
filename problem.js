// Problem 1: Debounce Function

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Problem 2: Throttle Function


function throttle(fn, limit) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
}


// Problem 3: Deep Clone an Object

function deepClone(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}


// Problem 5: Implement Array.prototype.map from Scratch

function myMap(arr, callback) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {

        result.push(
            callback(arr[i], i, arr)
        );

    }

    return result;
}