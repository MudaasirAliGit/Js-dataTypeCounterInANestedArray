// Assignment 10 Js:
// Write a JavaScript program that takes an array containing
// elements of various types (such as strings, numbers, booleans,
// and nested arrays) and counts the total number of strings, numbers,
// and booleans in the entire array (including nested arrays).

// let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

// Output example: 
// Numbers: countOfNum
// String: countOfStr
// Bool: countOfBool.



// Input
let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

//Process
console.log(arr);
arr = arr.flat(Infinity);
console.log(arr);

let number = 0, string = 0, boolean = 0;
for(let i=0; i<arr.length; i++){
    switch(typeof arr[i]){
        case 'number':
            ++number;
            break;
        case 'string':
            ++string;
            break;
        case 'boolean':
            ++boolean;
            break;
     }
}

// Output
alert(`Data type count of nested array:\n\nNumbers: ${number} \nString: ${string} \nBoolean: ${boolean}`);
