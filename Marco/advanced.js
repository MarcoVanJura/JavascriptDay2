// let a = 7;
// let b = 14;
// let c = "21";
// let d = '36';
// let e = 42;
// let sum = a + b + Number(c) + Number(d) + e
// console.log(sum)

// let f = '1';
// let g = 15;
// let h = 8;
// let i = "1";

// let multiply = Number(f) * g * h * Number(i)
// console.log(multiply)

// let divide = sum / multiply
// document.write(divide)

let people = ["Greg", "Mary", "Devon", "James"]
people.shift()
console.log(people)
people.unshift("Matt")
console.log(people)
people.pop()
console.log(people)
people.push("Marco")
console.log(people)
    // people.splice(0, 2)
    // console.log(people)
let peoplecopy = people.slice(2, 4)
console.log(peoplecopy)