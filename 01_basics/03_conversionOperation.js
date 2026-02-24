// let score = "33"
// console.log(typeof score); // string
// console.log(typeof (score)); // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 33


// let score = "33abc"
// console.log(typeof score); // string
// console.log(typeof (score)); // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// let score = null
// console.log(typeof score); // object
// console.log(typeof (score)); // object 

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //0


// let score = undefined
// console.log(typeof score); // undefined
// console.log(typeof (score)); // undefined

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN


// let score = true
// console.log(typeof score); // boolean
// console.log(typeof (score)); // boolean
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //1  0 if false



// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false if string is empty if there's something in the string then true



// let someNumber = 33 
// let StringNumber = String(someNumber)
// console.log(StringNumber);//33
// console.log(typeof StringNumber);//string


// ************************** Operations **************************

// let value = 3
// let negValue = -value
// console.log(negValue); // -3

// console.log(2 + 2); //4
// console.log(2 - 2); //0
// console.log(2 * 2); //4
// console.log(2 ** 3);//8
// console.log(2 / 3);//0.6666666
// console.log(2 % 2);//0 modulo gives the remainder


// let str1 = "Anurag"
// let str2 = " Singh"
// let str3 = str1 + str2
// console.log(str3); // Anurag Singh

// console.log("1" + 2); //12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2); //122 👉 If a string appears first, everything after becomes string concatenation.
// console.log(1 + 2 + "2"); // 32 👉 If numbers come first, they get added before string conversion happens.
// // instead of these thing practise using parenthesis () which is a good practise


// console.log(+true); // 1 :Here + act as unary plus operator i.e convert value to number it is basically Number(value)
// console.log(+false);      // 0
// console.log(+null);       // 0
// console.log(+"123");      // 123
// console.log(+"abc");      // NaN
// console.log(+undefined);  // NaN


// let num1 , num2 ,num3
// num1 = num2 = num3 = 4 // not a good practise again try using 
// // let num1 = 4;
// // let num2 = 4;
// // let num3 = 4;

let gameCounter = 100
gameCounter++; // postfix operator : Use the value and then increase it
console.log(gameCounter);//101
++gamecounter; // prefix operator : Increase the value first and then use it