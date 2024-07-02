// async , await

// async function f(){
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello...");
//         }, 1000);
//     })
// };

// async function f1(){
//     return await new Promise((resolve, reject) => {
//         resolve("sdfgsdg");
//     })
// }

//  function f2(){
//     let f =  f();
//     let f1 = f1();
//     console.log(f);
//     console.log(f1);
// }

// f2();




// async = function = new Promise
// await = stipuma f-in spasel Promise-i patasxanin

// let promise = new Promise((resolve, reject) => {
//     return resolve(1);
// });

// promise.then((res) => console.log(res))

// function f(){
//     return Promise.resolve(1);
// };

// f().then((res) => console.log(res))


// async function f(){
//     return (1);
// };

// f().then((res) => console.log(res))

// async function myFunction(){
//     let x = await new Promise((res, rej) => {
//         setTimeout(() => {
//            return res(1)
//         }, 1000);
//     });
//     alert(x);
//     console.log(x);
// };

// myFunction();

// async function api(){
//     let users = [];
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(json => users = json);
//     return users;
// }

// api().then(x => getUsers(x)) // x = users

// function getUsers(arr){
//     arr.forEach((v, i) => {
//         let div = document.createElement("div");
//         div.innerHTML = `${i+1}) ${v.title}`;
//         document.body.appendChild(div);
//     });
// }
