let product = [
    {
        id: Math.random(),
        name: "Koshik 1",
        price: 15000
    },
    {
        id: Math.random(),
        name: "Koshik 2",
        price: 19500
    },
    {
        id: Math.random(),
        name: "Koshik 3",
        price: 12000
    },
    {
        id: Math.random(),
        name: "Koshik 4",
        price: 9500
    },
];


product.forEach( (product) => {
    let div = document.createElement("div");
    div.classList.add("product");
    let title = document.createElement("h2");
    title.innerHTML = product.name
    let p = document.createElement("p");
    p.innerHTML = product.price + " դրամ";
    let btn = document.createElement("button");
    btn.innerHTML = "Delete product";
    let btn1 = document.createElement("button");
    btn1.innerHTML = "add";
    
    div.append(title);
    div.append(p);
    div.append(btn);
    div.append(btn1);


    document.getElementsByClassName("div-product")[0].append(div);

    btn.addEventListener("click", () => {
        f(product.id)
    });

    btn1.addEventListener("click", () => {
        add(product.id)
    })
});

function f(x){
    product = product.filter((v) => v.id !== x);
    console.log(product);
    return product
};

let casa = document.createElement("div");
casa.classList.add("casa");
let arr = [];

function add(y){
    let item = product.find((v) => v.id === y )
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let hr = document.createElement("hr")

    h3.innerHTML = item.name
    p.innerHTML = item.price + " դրամ"
    p1.innerHTML = item.id

    casa.append(h3);
    casa.append(p);
    casa.append(p1)
    casa.append(hr)
};



document.body.append(casa)
