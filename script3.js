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


// let input1 = document.querySelector(".i1");
// let input2 = document.querySelector(".i2");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     let str = "";
//     let inp1 = +input1.value;
//     let inp2 = +input2.value;
//     while(inp1 > 0){
//         str += inp1 % inp2;
//         inp1 = Math.floor(inp1 / inp2);
//     };
//     console.log(str);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let x = Math.floor(arr.length / 2);
// console.log(arr[x]);


// function max(a, b){
//     if(a > b){
//         return a;
//     }else{
//         return b;
//     }
// }

// // console.log(max(4, 2));

// let arr = [];
// let arr1 = [];

// function fillArr(limit){
//     for(i = 1; i <= limit; i++){
//         arr.push(i);
//     }
// }
// fillArr(10);
// console.log(arr);

// function fillArr1(){
//     arr.forEach(val => {
//         arr1.push(val+1);
//     })
// }

// fillArr1();

// console.log(arr1);

// let avtoner = [
//     {
//         maknish: "bmw",
//         drner: 2
//     },
//     {
//         maknish: "ford",
//         drner: 4
//     },
//     {
//         maknish: "hyundey",
//         drner: 3
//     },
//     {
//         maknish: "bugaty",
//         drner: 2
//     }
// ];



// function find(arr){
//     let coupe = [];
//     arr.forEach(val => {
//         if(val.drner === 2){
//             coupe.push(val);
//         };
//     })
//     return coupe;
// };

// console.log(find(avtoner));


// let tver = [1,2,3,4,5,6,7,8,9,10];

// function filterArrey(arr){
//     arr = arr.filter(val => {
//         if(val % 2 !== 0){
//             return val
//         }
//     })
//     return arr
// };

// console.log((filterArrey(tver)));

// let kendani = [
//     {
//         anun: "krea",
//         gorcoxutyun: "qaylel"
//     },
//     {
//         anun: "agrav",
//         gorcoxutyun: "trchel"
//     },
//     {
//         anun: "arciv",
//         gorcoxutyun: "trchel"
//     },
//     {
//         anun: "hovaz",
//         gorcoxutyun: "vazel"
//     }
// ];


// function trchun(arr){
//     arr.forEach(val => {
//         if(val.gorcoxutyun === "trchel"){
//             console.log(true);;
//         }else{
//             console.log(false);;
//         }
//     });
// };

// trchun(kendani);



// function trchun(arr){
//     arr = arr.filter(val => {
//         if(val.gorcoxutyun === "trchel"){
//             return val;
//         }
//     });
//     return arr;
// };

// console.log(trchun(kendani));


// function random(){
//     setInterval(() => { 
//         console.log(Math.floor(Math.random() * 10));
//     },1000);
// };


// random();

// let input1 = document.querySelector(".i1");
// let input2 = document.querySelector(".i2");
// let btn = document.querySelector("button");


// function randomColor(){
//     return Math.floor(Math.random() * 255);
// };

// function bodyColor(){
//     setInterval(() => {
//          input1.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//          input2.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//          btn.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//     },300)
// };

// bodyColor()


// let person = [
//     {fn: "Kate", ln: "Karapetyan", ph: "098 87 87 45", gender: "female"},
//     {fn: "Joe", ln: "Harutunyan", ph: "098 34 87 69", gender: "male"},
//     {fn: "MIke", ln: "Saxatelyan", ph: "094 58 12 37", gender: "male"},
//     {fn: "Jill", ln: "Isahakyanyan", ph: "097 36 14 59", gender: "female"}
// ];


// function transform(arr){
//     return arr.filter(obj => {
//         return obj.gender === "female";
//     }).map(obj => {
//         return {
//             firstName: obj.fn,
//             lastName: obj.ln,
//             phone: obj.ph,
//             gender: obj.gender
//         };
//     });
// };

// console.log(transform(person));


// let person = {
//     firstName: "Michel",
//     lastName: "Jackson"
// };

// function magic(obj){
//     return Object.keys(obj).reduce((aggr, key) => {
//         aggr[obj[key]] = key;
//         return aggr;
//     },{})
// };

// console.log(magic(person));