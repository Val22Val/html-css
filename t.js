// Առաջադրանք 1
// Հայտարարել փոխադրամիջոց անունով class։ 
// Constructor-ի մեջ պահել անիվներ և մաքսիմալ արագություն արգումենտները։ 
// class-ը վերագրել որևէ  փոփոխականի  և փոխանցել 3 և 20 թվերը։Տպել արդյունքը։

// class Poxadramijoc{
//     constructor(anivner, maxAragutyun){
//         this.anivner = anivner;
//         this.maxAragutyun = maxAragutyun;
//     }
// }
// let pox = new Poxadramijoc(3, 20);

// console.log(pox);


// Առաջադրանք 2
// Հայտարարել մեքենա անունով class։Ավելացնել կոնստրուկտոր, 
// որը վերցնում է մակնիշը, մոդելը, տարին և գույնը:
// Ավելացնել setColor անունով մեթոդ,
// որը վերցնում է մեկ պարամետր՝գույն և վերափոխում է մեքենայի գույնը:
// class-ը վերագրել որևէ  փոփոխականի  և փոխանցել համապատասխան արժեքները։ 
// Տպել արդյունքը։ Այնուհետև setColor մեթոդով փոխել մեքենայի գույնը և կրկին տպել արդյունքը։

// class Meqena{
//     constructor(maknish, model, tari, guyn){
//         this.maknish = maknish;
//         this.model = model;
//         this.tari = tari;
//         this.guyn = guyn;
//     }
//     setColor =  (guyn) =>{
//        return meqena.guyn = guyn;
//     }
// }

// let meqena = new Meqena("BMW", "e46", 2000, "gray");

// console.log(meqena);
// meqena.setColor("red");
// console.log(meqena);


// Առաջադրանք 3
// Ունենալ 2class:Առաջինի մեջ որպես constructor պահել 2 արգումենտ և ունենալ ֆունկցիա,
// որը կհաշվի այդ արգումենտների գումարը։
// 2-րդ class-ը պետք է ունենա constructor 3 արգումենտով 
// որից 2-ը պետք է ժառանգվի առաջին class-ից և պետք է 
// ունենա ֆունկցիա որ կհաշվի տվյալ 3 թվերի գումարը։

// class X {
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//     }
//     sum = () => this.a + this.b;
// };

// class Y extends X {
//     constructor(a, b, c){
//         super(a, b);
//         this.c = c;
//     }
//     sum1 = () => this.sum() + this.c
// }

// let x = new X(2, 5);
// let y = new Y(x.a, x.b, 7);

// console.log(y.sum1());


// Առաջադրանք 4
// 1
// 11
// 111
// 1111
// 11111


// let x = "";
// for(i = 1; i <= 5; i++){
//     x += "1"
//     console.log(x);
// }


class Meqena{
    constructor(maknish, model, tari, guyn){
        this.maknish = maknish;
        this.model = model;
        this.tari = tari;
        this.guyn = guyn;
    }
    setColor = (guyn) => this.guyn = guyn;
};

let meqena = new Meqena("BMW", "e46", 2000, "grey");

console.log(meqena);
meqena.setColor("red");
console.log(meqena);
