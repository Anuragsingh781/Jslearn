// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2!=1);

// console.log("2" > 1); // js tries to convert string to number
// console.log("02" > 1); // therefore 2 > 1 and hence true


//For comparison operators (>, <, >=, <=):

//👉 JavaScript converts null to a number
console.log(null > 0);

//👉 JavaScript converts null to a number which is 0 thus 0 > 0 and hence false
console.log(null == 0);
/*Now this is different.

The == operator does abstract equality comparison.

⚠️ Special rule in JS:

null is only equal to undefined

null is NOT equal to 0
thus false
*/
console.log(null >= 0); // convert to 0 thus 0>=0 and hence true

console.log(null == undefined) //true Everything else with null → false


// == vs ===
/*
== (Loose Equality)

👉 Compares values only
👉 Performs type conversion (type coercion) before comparing

console.log(5 == "5");     // true : Because "5" (string) is converted to 5 (number), then compared.

=== (Strict Equality)

👉 Compares value AND datatype
👉 ❌ No type conversion

console.log(5 === "5");   // false : Because:

5 → number

"5" → string
Different types → false immediately.

*/