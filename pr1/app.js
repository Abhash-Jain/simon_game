let gameseq=[];
let userseq=[];

let btns=["yellow","red", "green","purple"];

let started =false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function ()
{
    if(started== false)
   { 
    console.log("game started");
    started=true;

    levelUp();
   }

});
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);

}

function levelUp()
{
    userseq= [];
    level++; 
    h2.innerText = `LEVEL ${level}`;
     
    let randId= Math.floor(Math.random()*3);
    let randColor=btns[randId];
    let randBtn=document.querySelector(`.${randColor}`); 
    // console.log(randId);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randBtn);

}
function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            console.log("archit is here");
            setTimeout(levelUp, 1000);  // Corrected line
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";  // Corrected property name
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";  // Corrected property name
        }, 150);
        reset();
    }
}

function btnPress(){

    //console.log("btn was pressed");
    console.log(this);
    let btn = this;
    btnflash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor); 
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns)
 {
    btn.addEventListener("click",btnPress);
 }
 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }
