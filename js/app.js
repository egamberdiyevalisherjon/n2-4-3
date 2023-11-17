// ES6 (ECMASCRIPT 6)
// ECMA => European Computer Manufacturing Association

// let a = {};
// a.name = "John";
// a = {}

// const b = {};
// b.name = "Jane";

// let c = "Nimadir";
// let a = Symbol(c);
// let b = Symbol(c);

// let a = () => {};

// let a = 0;

// let b = a || 3; // falsy => false, 0, -0, NaN, "", '', ``, null, undefined, 0n
// let c = a && 4;
// let d = a ?? 5; // nullish => undefined || null

// let fName = "Eshmat";
// let age = 32;
// let a = "Salom, " + fName + "! Siz " + age + " yoshdasiz";
// let b = `Salom, ${fName}! Siz ${age} yoshdasiz`; // Template literal, interpolation

// console.log(a);
// console.log(b);

// for ... of
// **, **=, ||=, &&=, ??=
// default parameter

// function a(b = 1) {
//   console.log(b + 1);
// }
// a(4);
// a();

// Map, Set
// let cars = [123, 323, 43, 4, 4, 323];

// let uniqueCars = new Set(cars);

// console.log([...uniqueCars]);

// let person = {
//   "nandfsf-sdf": false,
//   let: "34",
//   [Symbol("3r")]: 23,
// };

// let person2 = new Map([
//   [{}, 3],
//   ["apple", ["olma"]],
//   [234, 435],
//   [() => {}, 234],
// ]);

// person2.set("apple", ["test"]);
// console.log(person2);

// optional chaining

// let person = {
//   fName: "Eshmat",
//   address: {
//     city: {
//       name: "Toshkent",
//       coordinates: {
//         lat: 12.34535,
//         lng: 43.65464,
//       },
//     },
//     district: "Uchtepa",
//     street: "Al Xorazmiy",
//     apartment: 46,
//   },

//   skills: ["HTML", "CSS", "JS"],
//   talk: () => {
//     console.log("eshmat is talking");
//   },
// };

// console.log(person?.address?.city?.coordinates?.lat);
// console.log(person?.skills?.[0]);

// if (person) {
//   if (typeof person.talk === "function") {
//     person.talk();
//   }
// }
// person?.talk?.();

// if (
//   person &&
//   person.address &&
//   person.address.city &&
//   person.address.city.coordinates &&
//   person.address.city.coordinates.lat
// ) {
//   console.log(person.address.city.coordinates.lat);
// }

// Ternary operator

// let a = 12;

// let b = a > 30 ? 4 : a > 20 ? 5 : 6;

// if (a > 30) {
//   b = 4;
// } else if (a > 20) {
//   b = 5;
// } else {
//   b = 6;
// }

// ... => copy, spread, rest

// Copy
// let a = ["apple", "banana", "cherry"];
// let b = ["potato", "onion", "carrot"];
// let c = ["melon", "water melon", "pumpkin"];

// let person1 = {
//   fName: "eshmat",
//   age: 32,
//   email: "eshmat@gmail.com",
// };

// let person2 = {
//   ...person1,
//   email: "email@gmail.com",
//   ...b,
// };

// person1.fName = "Toshmat";

// let list = [...a, ...b, ...c, person1];

// console.log(person1, person2, list);

// Spread

// let questions = [
//   {
//     text: "Bu kim",
//     answers: [
//       {
//         text: "Eshmat",
//         isCorrect: false,
//       },
//       {
//         text: "Toshmat",
//         isCorrect: false,
//       },
//       {
//         text: "Bolta",
//         isCorrect: true,
//       },
//       {
//         text: "Tesha",
//         isCorrect: false,
//       },
//     ],
//   },
// ];

// function displayAnswers(a1, a2, a3, a4) {
//   console.log([a1.text, a2.text, a3.text, a4.text]);
// }

// displayAnswers(...questions[0].answers);

// let person1 = {
//   fName: "eshmat",
//   age: 32,
//   email: "eshmat@gmail.com",
// };

// function log() {
//   console.log(arguments);
// }

// let a = ["apple", "banana", "cherry"];

// log(person1, ...a);

// REST
// let a = ["apple", "banana", "cherry"];

// function log(obj, ...f) {
//   console.log(f);
// }

// log(person1, ...a);

// function a(num1, num2, ...nums) {
//   console.log(num1 + num2, nums);
// }

// a(3, 4, 5, 5, 6, 56, 5, 65, 6, { 5: 65 });

// function a({ nimadir, ...rest }) {
//   console.log(rest);
// }

// a({ nimadir: "lyuboy", boshqa: "moshina", yana: "boshqa" });

// Destructuring

// function getUser() {
// backend
// ...

//   return {
//     status: 200,
//     message: "OK",
//     data: { fName: "Eshmat", age: 32, id: 34534 },
//   };
// }

// let { data: user } = getUser();
// let response = getUser();
// let user = response.data;

// let [, cher] = ["Apple", "Banana", "Cherry"];

// console.log(user.fName, user.age, user.id);
// console.log(cher);

// let age = 32;
// let fName = "Eshmat";

// let user = {
//   fName,
//   age,
// };

// Async ... await, Promises
// class
