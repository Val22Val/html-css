// Ստեղծել փոփոխական և նրան վերագրել prompt պատուհան ,
// որն իր մեջ կպարունակի " Մուտքագրեք Ձեր տարիքը " արտահայտությունը:Եթե տարիքը փոքր է 
// 18-ից ստեղծել error՝ "Թույլատրելի մուտքը 18-ից բարձր" հաղորդագրությամբ,
// հակառակ դեպքում տպել "Ձեր մուտքը հաստատվել է" հաղորդագրությունը։
//  Օգտագործելով  catch-ը տպել error-ը։

// let tariq = +prompt("Մուտքագրեք Ձեր տարիքը")
// try{
//     if(tariq < 18){
//        throw new Error("Թույլատրելի մուտքը 18-ից բարձր");
//     }else{
//         alert("Ձեր մուտքը հաստատվել է");
//     }
// }catch(err){
//     console.error(err);
// };



// Ունենք հետևյալ զանգվածը [45,100,65,11,98,78,1000,65,98,14,78,35,10452,667,17]
// Տպել զանգվածի այն անդամները, որոնք մեծ են ներմուծված(prompt-ով) թվից։ 
// Հաշվել նաև ընտրված թվերի գումարը։

// let arr = [45,100,65,11,98,78,1000,65,98,14,78,35,10452,667,17]
// let tiv = +prompt("mutqagreq tiv");
// let sum = 0;

// for(i = 0; i < arr.length; i++){
//     if(arr[i] > tiv){
//         console.log(arr[i]);
//         sum+=arr[i];
//     }
// }
// console.log(sum);

// Առաջադրանք
// Օգտվելով map մեթոդից զանգվածի բոլոր անդամների առաջին տառերը  դարձնել մեծատառ։
// Օգտագործել հետևյալ զանգվածը["john", "JACOB", "jinGleHeimer", "schmidt"]

// let arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// arr = arr.map((item) =>{
//     item = item.slice(0,1).toUpperCase() + item.slice(1);
//     console.log(item);
// });



// Առաջադրանք
// Օգտվելով filter մեթոդից տպել զանգվածի այն string-ային անդամները,
// որոնց երկարությունը փոքր է կամ հավասար 5։
 
// let arr = ["fsff", "dfggdfd", "dsf", "fdfgdfg"];
// let arr1 = [];

// arr.filter((item) => {
//     item = item.split("");
//     if(item.length <= 5){
//         arr1.push(item.join(""));
//     }
// });
// console.log(arr1);


// Առաջադրանք
// Օգտվելով filter մեթոդից տպել զանգվածի այն անդամները,որոնք մեծ են  4-ից։

// let arr = [3, 5, 6, 21, 2, 46, 8];

// arr.filter((item) => {
//     if(item > 4){
//         console.log(item);
//     }
// });


// Առաջադրանք
// Գրել ծրագիր,որը կվերադարձնի ամենաերկար երկրի անունը։
// Օգտագործել հետևյալ զանգվածը ["Australia", "Germany", "United States of America"]

// let arr1 = ["Australia", "Germany", "United States of America"];

// function f(arr){
//    for(i = 0; i < arr.length; i++){
//     arr[i] = arr[i].split("")
//     if(arr[i].length > arr[0].length){
//         console.log(arr[i].join(""));
//     }
//    }
// }

// f(arr1);



// // Դասավորել տարրերը աճման կարգով( 2 ցիկլ)։
// let arr=[1,7,9,6,-5,85];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let x = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = x;
//         }
//     }
// }
// console.log(arr);



// Առաջադրանք
// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի new Promise(resolve) արգումենտով։
// Նրա մեջ ստեղծել setTimeout  ֆունկցիա,
// որտեղ արգումենտում ստացված արժեքը պետք է մեծացնել 2 անգամ։

// function f(x){
//     return new Promise((resolve) => setTimeout(() => resolve(x * 2)))
// }

// f(6).then((res) => console.log(res))




// Առաջադրանք
// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի 
// new Promise(resolve, reject) արգումենտներով։Նրա մեջ ստեղծել setTimeout  ֆունկցիա,
// որտեղ կստուգենք՝ արդյոք ֆունկցիային փոխանցված արգումենտը կենտ է,եթե այո,
// ապա  resolve-ի մեջ տպել "even number",
// հակառակ դեպքում՝ ստեղծել error՝ "odd number" հաղորդագրությամբ։
// Կանչել ֆունկցիան և փոխանցել արգումենտ և համապատասխան արգումենտինconsole պատուհանում 
// տպել հաղորդագրությունը։

// function f(x){
//     return new Promise((resolve, reject) => setTimeout(() =>{
//         x % 2 === 0 ? resolve("even number") : reject(new Error("odd number"));
//     }))
// };

// f(4).then((res) => console.log(res)).catch((err) => console.error(err));


// Տպել զանգվածի այն անդամները, որոնք մեծ են ներմուծված(prompt-ով) թվից։
//  Հաշվել նաև ընտրված թվերի գումարը։

// let arr = [45,100,65,11,98,78,1000,65,98,14,78,35,10452,667,17];
// let x = +prompt("nermuceq tiv");
// let sum = 0; 

// for(i = 0; i < arr.length; i++){
//     if(arr[i] > x){
//         console.log(arr[i]);
//         sum+=arr[i];
//     }
// }
// console.log(sum);

// let input = document.querySelector(".input");
// let div = document.querySelector(".div");
// let check = document.querySelector(".check");
// let delet = document.querySelector(".delete");

// input.addEventListener("keydown", function(e){
//     if(e.key === "Enter"){
//         div.innerHTML += input.value + "<br>";
//         input.value = ""
//     }
// })

// check.addEventListener("click", function(){
//     check.checked ? div.style.textDecoration = "line-through" : div.style.textDecoration = "none";
// })

// delet.addEventListener("click", function(){
//     div.innerHTML = "";
// })

// let table = document.querySelector("table");
// let inner = "";
// for(i = 1; i <= 10; i++){
//     inner += `<tr style=" width: 20px; height: 20px;">`;
//     for(j = 1; j <= 10; j++){
//         if(i === 1 || j === 10 || j === 1 || i === 10){
//             inner += `<td style="width: 20px; height: 20px; background-color: rgb(${rgb()}, ${rgb()}, ${rgb()});"></td>`
//         }else{
//             inner += "<td></td>"
//         }
//     }
//     inner += "</tr>";
// }

// function rgb(){
//     return Math.floor(Math.random() * 255);
// }


// table.innerHTML = inner


// let mutq = document.querySelector(".mutq");
// let block = document.querySelector(".block");

// mutq.addEventListener("click", () => {
//     if(block.style.display === "none"){
//         block.style.display = "block"
//     }else{
//         block.style.display = "none"
//     }
// })


// persons = [
//     {
//       id: 325326,
//       firstname: "Dan",
//       lastname: "Tiger",
//       image: "url",
//       birthday: "03.18.1990",
//       gender: "Male",
//       hobbie: ["Football", "Reading"],
//       nationality: "switzerland",
//       friends: [325330, 325334],
//       residence: 10041
//     },
//     {
//       id: 325326,
//       firstname: "Fan",
//       lastname: "Tiger",
//       image: "url",
//       birthday: "03.18.2005",
//       gender: "Male",
//       hobbie: ["Football", "Reading"],
//       nationality: "switzerland",
//       friends: [325330, 325334],
//       residence: 10041
//     },
//     {
//       id: 325330,
//       firstname: "Frank",
//       lastname: "Lion",
//       image: "url",
//       birthday: "10.05.1991",
//       gender: "male",
//       hobbie: ["walking", "basketball"],
//       nationality: "syria",
//       friends: ["", "", ""],
//       residence: 10041
//     },
//     {
//       id: 325334,
//       firstname: "Bilal",
//       lastname: "Zakki",
//       image: "url",
//       birthday: "08.19.1999",
//       gender: "male",
//       hobbie: ["swimming", "walking"],
//       nationality: "canda",
//       friends: [325330, 325326],
//       residence: 10012
//     }
//   ];

//   let hobbie = [];
//   persons.forEach((item) => {
//     for(i = 0; i < item.hobbie.length; i++){
//         hobbie.push(item.hobbie[i])
//     }
//   })
//   console.log(hobbie);

// persons.forEach((item) => {
//     document.write(item.firstname + " " + item.lastname + "<br>");
// })


// let arr = [
//     1,
//     false,
//     ["abc", 70, ["hi", 7, [[4, 1]]]],
//     8,
//     ["xyz", "4", [14, "bye"]],
//   ];

  
//   let sum = 0;
// for(i = 0; i < arr.length; i++){
//     if(typeof arr[i] === "object"){
//       arr[i].forEach((item) => {
//             if(typeof item === "number"){
//                 sum += item;
//             }
//         })
//     }else if(typeof arr[i] === "number"){
//         sum += arr[i];
//     }
// }
// console.log(sum);