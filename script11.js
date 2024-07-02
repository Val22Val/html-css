//Առաջադրանք 1
//Ստեղծել ասինքրոնծրագիր,որը https://jsonplaceholder.typicode.com/users հղումից 
//կստանա user-ների տվյալները,կսպասի բոլոր տվյալների ստացմանը և console պատուհանում կտպի այն։

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(ob => {
//     ob.forEach((item) => {
//         console.log(item.name);
//     })
// });

// Առաջադրանք 2
// Ստեղծել ասինքրոն ֆունկցիա,որը կունենա իր մեջ  new  Promise համապատասխան արգումենտներով։
// Promise-ի մեջ ստեղծել setTimeout ֆունկցիա,որը օգտագործելով  resolve կտպի “done“ բառը։
// Այնուհետև await-ում սպասել գործողության ավարտին և տպել արդյունքը։

// async function f(){
//     await new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             return resolve("done")
//         },500)
//     }).then(res => console.log(res))
// };

// f()


// Առաջադրանք 3
// Ստեղծել փոփոխական և նրան վերագրել +prompt()։Ստեղծել ասինքրոն ֆունկցիա,
// որն իր մեջ կպարունակի try և կսպասի https://api.punkapi.com/v2/beers?per_page=10 
// հղման պատասխանին,որտեղ 10 թվի փոխարեն պետք է լինի prompt-ում ներմուծված արժեքը։
// Եթե այդպիսի թիվ չի գտնվել ստեղծել error 'Data not fetched!' հաղորդագրությամբ։
// Եթե ամեն ինչ ճիշտ է տպել պարունակությունը էկրանին։

// let x = +prompt();

// async function f(){
//      try{
//         return await fetch(`https://api.punkapi.com/v2/beers?per_page=${x}`)
//         .then(res => res.json())
//         .then(j => console.log(j))
//     }catch(err){
//         console.error(new Error("Data not fetched!"));
//     }
// }

// f()

// ???????????????????????????????????

// Առաջադրանք 4
// HTML-ում ստեղծել input,button և p թեգերը։Օգտագործելով հետևյալ հասցեն՝
//    https://jsonplaceholder.typicode.com/users ՝  ստեղծել ծրագիր,
//    որտեղ  input-ում մուտքագրված անուն- ազգանունը կհամեմատենք հասցեում
//    նշված user-ների անվան և ազգանվան հետ և եթե համընկնեն,
//    ապա ցուցադրել տվյալ մարդու էլեկտրոնային հասցեն՝ տեղադրված p թեգի մեջ,
//    հակառակ դեպքում տպել հետևյալ հաղորդագրությունը՝ "Տվյալ անունով user չի գտնվել"։
//     Նախապես ստուգել,որ input-ի պարունակությունը դատարկ չէ։
//     Ծրագիրը իրականացնելու համար տեղադրել click event-ը button թեգի վրա։

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// async function user(){
//     await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) =>  res.json())
//     .then((j) => f(j))
// }

// function f(arr){
//     if(input.value !== ""){
//         let u = arr.find((v) => v.name === input.value)
//         if(!u){
//             p.innerHTML = "Տվյալ անունով user չի գտնվել"
//         }
//         p.innerHTML = u.email
//     }
// }


// btn.addEventListener("click", user)


// Առաջադրանք 5
// HTML-ում ստեղծել input,button և div թեգերը։Օգտագործելով հետևյալ հասցեն՝
// http://api.tvmaze.com/search/shows?q=Titanik `   ստեղծել ծրագիր,
// որտեղ input-ում կմուտքագրենքորևէ ֆիլմի անուն և կստանանք ֆիլմի անունը,
// նկարը և  ժանրը՝ հավաքված div թեգի մեջ։Նախապես ստուգել,
// որ input-ի պարունակությունը դատարկ չէ։
// Ծրագիրը իրականացնելու համար տեղադրել click event-ը button թեգի վրա։

let input = document.querySelector("input");
let btn = document.querySelector("button");
let div = document.querySelector("div");
let p = document.querySelector("p");

async function f(){
    await fetch("http://api.tvmaze.com/search/shows?q=Titanik")
    .then((res) => res.json())
    .then((j) => x(j))
};

function x(arr){
    arr.forEach(v => {
      if(input.value !== ""){
        if(v.show.name.toLowerCase() === input.value){
            div.innerHTML = v.show.genres + "<br>"
            let img = document.createElement("img");
            img.src = v.show.image.medium
            p.innerHTML = v.show.name;
            div.appendChild(img)
        }
      }else{
        div.innerHTML = "";
        p.innerHTML = "";
      }
    });
}

btn.addEventListener("click",f)


// let arr = [45,9,8,-3,7,-8,9,8,-6,5,7];
// let arr1 = [];

// arr.forEach((item, n) => {
//     if(item < 0){
//         arr.splice(n, 1) 
//     }
// })
// arr.forEach((v) => {
//     if(v % 2 !== 0){
//         v *= 2
//     }
//     arr1.push(v)
// })

// console.log(arr1);



