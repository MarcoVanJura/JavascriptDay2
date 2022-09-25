// // let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

// // // console.log(text.replaceAll("$", " "))
// // // console.log(text.split("$").join(" "))
// // // document.write(text.split("$").join(" "))
// // let modtext = text.split("$").join(" ");
// // document.write(modtext)

// // var age = 32
// // var checkage = (age < 18) ? "too young" : "old"
// // console.log(checkage)


// function main() {
//     var hour = parseInt(readLine(), 10);
//     // Your code goes here
//     time = hour >= 0 && hour <= 12 ? "am" : "pm";
//     console.log(time)
// }

// var mystring1 = "I am learning ";
// var mystring2 = "JavaScript with SoloLearn.";
// document.write(mystring1 + mystring2);


// console.log(typeof isLateToWork); // Returns "boolean"

// let result = 4 - "j";
// console.log(result); // Returns "NaN"
// console.log(typeof result); // Returns "number"

// let baby = "Bushra "
// let verb = "I love "
// let dich = "you "
// let voll = verb + dich + baby;
// console.log(voll)


// console.log('Hello world!'.length);
// // 12
// // The length of the string is 12


// console.clear();
// let notebook = ["Eier kaufen"]

// let newNote = prompt();
// notebook.push(newNote);

// console.log(notebook[0]);
// console.log(notebook[1]);
// console.log(notebook[2]);
// console.log(notebook[3]);
// console.log(notebook[4]);
// // console.log(notebook[5]);


// let input = prompt("Bitte Grad Celsius eingeben");

// let result = celsiuszuF(input);

// console.log(input + " Grad Celsius" + result + "F");

// function celsiuszuF(celsius) {
//     return celsius * (9 / 5) + 32;
// }


// function whatCanIdo(age) {
//     if (age === 15) {
//         console.log("Du darfst den Führerecshein machen")

//     }

//     if (age === 16) {
//         console.log("Du darfst schon wählenn")
//     }

//     if (age >= 18) {
//         console.log("du bist alt")
//     } else {
//         console.log("du bist zu jung")
//     }
// }

// whatCanIdo(10);


let b = 'I am a JavaScript developer.';
let temp = new Array();
temp = b.split(' ');
console.log(temp); // Output ["I", "am", "a", "JavaScript", "developer."]