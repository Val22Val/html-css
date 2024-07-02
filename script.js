// //1) 
// let str = "Grigor 1254-5687-4559-0015, Mariam 1120-4475-5559-1566, Armen 7855-2114-3354-5641";
// let reg = /[\d]+-[\d]+[\d]+-[\d]+-[\d]+/g;

// console.log(str.match(reg));



// //2)
// let arr = [1, 0, 9, 8, 4,0, 0, 2, 7, 0, 6, 0];
// let arr1 = [];
// arr.forEach(val => {
//     if(val !== 0){
//         arr1.push(val)
//     }
// })
// arr.forEach(val => {
//     if(val === 0){
//         arr1.push(val)
//     }
// })
// console.log(arr1);


// //3)
// let x = "";
// function recursia(i){
//     if(i < 0){
//         return;
//     };
//     console.log(x+="*");
//     return recursia(i-1);
// };
// recursia(6);



// //4)

// let erkir = {
//     Hawaii: 34,
//     Dubai: 556,
//     Batumi: 76,
//     f :() =>{
//         let x = +prompt("mardaqanak");
//         let y = +prompt("or");
//         let z = prompt("vayr");
//         return x*y*erkir[z]
//     }
// };
// console.log(erkir.f());





// //5)
// let input1 = document.querySelector(".i1");
// let input2 = document.querySelector(".i2");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     let x = "";
//     let a = +input1.value;
//     let b = +input2.value;
//     while(a > 0){
//         x+= a%b
//         a = Math.floor(a/b);
//     }
//     console.log(x);
// })