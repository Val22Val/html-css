// //1) 
// let str = "Grigor 1254-5687-4559-0015, Mariam 1120-4475-5559-1566, Armen 7855-2114-3354-5641";
// let reg = /[\d]+-[\d]+[\d]+-[\d]+-[\d]+/g;
// console.log(str.match(reg));

// let str = "Grigor 1254-5687-4559-0015, Mariam 1120-4475-5559-1566, Armen 7855-2114-3354-5641";
// let reg = /[0-2]{4}-\d{4}-\d{4}-\d{4}/g;
// let result = str.match(reg);
// for(let i = 0; i < result.length; i++){
//     document.write(result[i]+"<br>")
// }


// //2)
let arr = [1, 0, 9, 8, 4,0, 0, 2, 7, 0, 6, 0];
let arr1 = [];
arr.forEach(val => {
    if(val !== 0){
        arr1.push(val)
    }
})
arr.forEach(val => {
    if(val === 0){
        arr1.push(val)
    }
})
console.log(arr1);


// let arr1=[];
// let arr=[1,0,9,8,4,0,0,2,7,0,6,0];
// arr = arr.filter(function(v){
//   if(v!==0){
//     return v;
//   }else{
//     arr1.push(v);
//   }
// })
// for(let i=0; i<arr1.length; i++){
//   arr.push(arr1[i])
// }
// console.log(arr)

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
// mi angam avela ashxatum u 7-n el a tpum dra hyamar paymany petqa poxes

// 1-ին եղանակ
let x = "";
function recursia(i){
    if(i < 1){ 
        return;
    };
    console.log(x+="*");
    return recursia(i-1);
};
recursia(6);

// 2-րդ եղանակ 
function f(a){
    if(a===0) return;
    f(--a);
    for(let i=0;i<=a;i++){
      document.write('*');
    }
    document.write('<br>');
}
f(6)

// 3-րդ եղանակ
function f1(a){
  for(var x=1;x<=a;x++){
      for (var y=1;y<=x;y++){
      document.write("*");
      }
         document.write("<br>");
    }
}
f(6)

// //4)

let erkir = {
    Hawaii: 10,
    Dubai: 20,
    Batumi: 30,
    f: () => {
        let x = +prompt("mardaqanak");
        let y = +prompt("or");
        let z = prompt("vayr");
        return x*y*erkir[z]
    }
};
console.log(erkir.f());


let tour = {
	Hawaii:3000,
	Dubai:2000,
	Batumi:1000,
	price:function(){
    let people = prompt("People");
    let days = prompt("Days");
    let place = prompt("Place");
		let result=people*days*tour[place];
		return result;
	}
}
document.write("Տուրը կարժենա " + tour.price() + "$:");




// // //5)
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
// });


let input1 = document.querySelector(".i1");
let input2 = document.querySelector(".i2");
let btn = document.querySelector("button");

btn.addEventListener('click',function(){
	let num1=input1.value;
	let num2=input2.value;
	let s='';
	while(num1>0){
		s+=num1%num2;
     	num1=parseInt(num1/num2);
	}
	alert(s)
});

