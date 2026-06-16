// Problem 1: Safe JSON Parse

function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

console.log(safeJsonParse('{"a":1}'));;

// Problem 2: Retry a Promise

async function retry(fn, times) {
  let lastError;
  
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }
  
  throw lastError;
}


// Problem 3: Implement Promise.all from Scratch



// Problem 4: Flatten Object (Deep)

// Problem 5: Group Array by Property