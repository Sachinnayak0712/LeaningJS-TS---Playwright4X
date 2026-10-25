let arr = [1,2,3];
console.log(arr);
// Add to END
arr.push(4);
console.log(arr);

/*
Explanation: .push() adds one or more elements to the end of an array and returns the new length.
*/

// Remove from END
arr.pop();
console.log(arr);

/*
Explanation: .pop() removes the last element from an array (4) and returns it.
*/

arr.push(5, 6);
console.log(arr);

/*
Explanation: You can pass multiple arguments to .push() to append several elements to the end of the array at once.
*/

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

/*
Explanation: .unshift() adds one or more elements to the beginning of an array, shifting existing elements to higher indices.
*/

// Remove from BEGINNING
arr.shift();
console.log(arr);

/*
Explanation: .shift() removes the first element from an array (0) and shifts all remaining elements down.
*/


// [ 1, 2, 3, 5, 6 ]
arr.splice(2,1);
console.log(arr);

/*
Explanation: The .splice(start, deleteCount) method changes the contents of an array by removing or replacing elements.
2 is the starting index (pointing to the number 3).
1 means delete 1 element starting from that index.
As a result, 3 is removed, leaving [ 1, 2, 5, 6 ].
*/

arr.splice(2, 0, 99);
console.log(arr);

/*
Explanation:
2 is the starting index (pointing to 3).
0 means delete 0 elements (so nothing gets removed).
99 is the element to insert.
This inserts 99 right at index 2, shifting 3, 5, and 6 to the right.(Note: The commented out lines // arr.splice(2, 1, 99); would have replaced 3 with 99, and // arr.splice(2, 2, 99); would have replaced both 3 and 5 with 99).
*/

// [ 1, 2, 99, 5, 6 ]
arr.splice(1, 2, 10, 20);
console.log(arr);

/*
Explanation:
1 is the starting index (pointing to 2).
2 means delete 2 elements starting from index 1 (which removes 2 and 99).
10, 20 are the new elements to insert at that position.
This removes 2 and 99, inserts 10 and 20 in their place, and leaves the rest of the array intact.
*/