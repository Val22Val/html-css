// Promise - xostum
// kkatarvi
// chi katarvi
// jamanak
// ankax

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve("done");
//     }, 1500);
// });

// promise.then((v) => console.log(v));

// then 
// catch


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(15 > 20){
//             resolve(15);
//         }
//         reject(20);
//     }, 1000);
// })
// .then(
//     (res) => console.log(res),
//     (err) => console.error(err)
// );

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Error");
//     }, 1000)
// })
// .catch((err) => console.error(err));

// new Promise((resolve, reject) => {
//     let p = +prompt("mutqagrel drakan tiv");
//     if(p > 0){
//        return resolve(`${p}- drakan e`);
//     }
//     return reject(`${p}- bacasakan e`) 
// })
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// new Promise((resolve, reject) => {
//     let p = +prompt("mutqagrel drakan tiv");
//     if(p > 0){
//        return resolve(`${p}- drakan e`);
//     }
//     return reject(`${p}- bacasakan e`) 
// }).finally(() => console.log("tiv"))
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let number = 8;
//         if(number % 2 === 0){
//             return resolve(number);
//         };
//         return reject("Kent");
//     });
// })
// .then((res) => res / 2) // res = 8
// .then((x) => x + 5) // x = res / 2
// .then((y) => y ** 2) // y = x + 5
// .then((result) => console.log(result)) // result = y ** 2
// .catch((err) => console.error(err));

// function number(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             num % 2 !== 0 ? resolve("kent") : reject(new Error(`${num} tivy kent che`));
//         })
//     })
// }
// number(4).then((res) => console.log(res)).catch((err) => console.error(err));


// Promise.all([
//     new Promise((res) => setTimeout(() => res(1), 2000)),
//     new Promise((res, rej) => setTimeout(() => rej(2), 500)),
//     new Promise((res) => setTimeout(() => res(3), 1000))
// ]).then((response) => console.log(response))
// .catch((err) => console.error(err))


// Promise.allSettled([
//     new Promise((res) => setTimeout(() => res(1), 2000)),
//     new Promise((res, rej) => setTimeout(() => rej(2), 500)),
//     new Promise((res) => setTimeout(() => res(3), 1000))
// ])
// .then((response) => console.log(response))
// .catch((err) => console.error(err))


// Promise.race([
//     new Promise((res) => setTimeout(() => res(1), 2000)),
//     new Promise((res, rej) => setTimeout(() => res(2), 500)),
//     new Promise((res) => setTimeout(() => res(3), 1000))
// ]).then((response) => console.log(response))


// Promise.reject( new TypeError("Reject...")).catch((err) => console.error(err.name));
// Promise.resolve(456456)
// .then((res) => console.log(res));


function f(x){
    return new Promise((resolve, reject) => setTimeout(() => {
        x % 2 !== 0 ? resolve("even number") : reject(new Error("odd number"))
    }))
};

f(4).then((res) => console.log(res)).catch((err) => console.error(err))




// Promise => object{}

// TNAIN
// array metodner filter, map, find, forEach
// regexp
// dom
// object