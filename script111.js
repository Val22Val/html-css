// window

// console.log(window);
// console.log(window.navigator);
// console.log(window.location);

// console.log(location);
// console.log(navigator.userAgent);

// console.log(screen);
// console.log(document);


// this
// console.log(this);


// scope => () {} []
// global js
// functional f()
// block if, for, switch


// function f(){
//     console.log(this);
// }
// f();

// let x = () => {
//     console.log(this);
// }
// x();

// let obj = {
//     name: "Anna",
//     f1: function (){
//         console.log(this); // this = obj
//     },
//     f2: () => {
//         console.log(this); // this-y chi poxvum
//     }
// }

// obj.f1();
// obj.f2();


// inch e thisy


// this
// function tesakner
// IIFE
// hosting
// type 8


// let arr = [45,100,65,11,98,78,1000,65,98,14,78,35,10452,667,17];

// let p = +prompt()
// let sum = 0;

// for(i = 0; i < arr.length; i++){
//     if(arr[i] > p){
//        sum += arr[i]
//     }
// }
// console.log(sum);

// arr.forEach((item) => {
//     if(item > p){
//         sum+=item
//     }
// })
// console.log(sum);



// let arr = [45,100,65,11,98,78,1000,65,98,14,78,35,10452,667,17];
// let p = +prompt()
// let sum = 0;

// let arr1 = arr.filter((v) => {
//     if(v > p){
//         return v;
//     }
// })

// let total = arr.reduce((aggr, v) =>{
//     return aggr + v
// },0);

// console.log(total);

// let arr2 = arr.filter((v) => v > p);
// let total1 = arr2.reduce((aggr,v) => aggr + v);
// console.log(total1);

let arr = [45,9,8,-3,7,-8,9,8,-6,5,7];
let arr1 = [];

arr.forEach((item, n) => {
    if(item < 0){
        arr.splice(n, 1)
    }
    if(item % 2 !== 0){
        item *= 2
    }

    arr1.push(item)
})

console.log(arr1);