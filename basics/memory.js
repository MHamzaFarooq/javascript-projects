// -------------Stack and Heap memories-------------
// -> All the primitive data types use stack memory while non primitive data types use heap memory

// -------------The difference?-------------

// Stack example
let id = 12345
let anotherId = id
anotherId = 54321

console.table([id,anotherId]) // Output 54321
 // Output 12345
// It uses a copy of the data and perform manipulation on it without effecting the original value

// Heap example
let array = ["Hamza", 12, true]
let array2 = array
array2[1] = 69

console.table([array, array2]); // Output ["Hamza", 69, ture] for both
// So it refrences from the same data in the heap memory and change the original value