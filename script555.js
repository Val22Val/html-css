// $(function(){
    // $("button").on("click", function(){
    //     alert();
    // });
    // $("button").off("click", function(){
    //     alert("No click");
    // });

    // $(document).on("mousemove", function(evt){
    //     console.log(evt.pageX, evt.pageY);
    // });

    // $("input").keydown(function(e){
    //     console.log(e.target.value);
    // });

    // $("input").keypress(function(e){
    //     console.log(e.target.value);
    // });


    // $("input").select(function() {
    //     console.log("Nshel");
    // });

    // $("button").click(function(){
    //     $("#h2").animate({
    //         fontSize: "125px",
            
    //     }).css({
    //         color: "red",
    //         transform: "rotate(65deg)"
    //     });
    // })

    // $("button").first().click(() => {
    //     $("#h2").hide(1000);
    // });

    // $("button").last().click(() => {
    //     $("#h2").show(1000);
    // });


    // $("button").first().click(() => {
    //     $("#h2").toggle();
    // })

    // $("button")first().click(() => {
    //     $("#h2").fadeOut(1000);
    // })
    // $("button").last().click(() => {
    //     $("#h2").fadeIn(1000);
    // })

    // $("button").first().click(() => {
    //     $("#h2").fadeToggle(1000);
    // });

    // $("button").first().click(() => {
    //     $("#h2").fadeTo(1000, 0.5);
    // });

    // $("button").click(() =>{
    //     $("#h2").hide("fast", function(){
    //         alert("Texty anhetacav");
    //     });
    // });

    // let p = "<p>text...</p>";
    // let div = $("<div></div>")
    // div.css({
    //     width: "200px",
    //     height: "100px",
    //     border: "2px solid teal"
    // })
    // $("#h2").append(p)
    // div.append(p);
    // console.log(div);
    // $("body").append(div);


    // let div = $("<div></div>");
    // let button = $("<button>Click</button>");
    // let img = $("<img src='telegram.svg'>");
    // let a = $("<a href='https://web.telegram.org/a/'>Telegram</a>");
    // a.attr("target", "_blanck")

    // div.css({
    //     width: "300px",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "space-around",
    //     minHeight: "350px",
    //     // border: "1px solid"

    // })

    // img.css({
    //     width: "100px",
    //     height: "100px"
    // })

    // button.css({
    //     width: "70px",
    // })

    // div.append(button, img, a);

    // $("body").append(div);

    // button.click(() => {
    //     img.attr("src", "instagram.jfif");
    //     a.attr("href", "https://www.instagram.com/");
    //     a.html("Insagram");
    // })
// });


let btn = document.querySelector("button");

let inputTeg = document.querySelector(".d1");
let inputQanak = document.querySelector(".d2");
let inputText = document.querySelector(".d3");
let u = document.createElement("u");


btn.addEventListener("click", (e) => {
    if(inputTeg.value !== "" && inputQanak.value !== "" && inputText.value !== ""){
        for(let i = 1; i <= +inputQanak.value; i++){
            let teg = document.createElement(inputTeg.value);
            teg.innerHTML = inputText.value;
            document.body.append(teg);
        };

        inputTeg.value = "";
        inputQanak.value = "";
        inputText.value = "";
    }else{
        
        u.style.color = "red";
        u.innerHTML = "xndrum enq mutqagrel bolor dashtery";

        if(inputTeg.value === ""){
            inputTeg.style.border = "1px solid red";
        } 
        if(inputQanak.value === ""){
            inputQanak.style.border = "1px solid red";
        } 
        if(inputText.value === ""){
            inputText.style.border = "1px solid red";
        }
        document.body.append(u);
    }

    e.preventDefault();
})