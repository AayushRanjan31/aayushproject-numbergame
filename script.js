let btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    document.querySelector(".main").classList.remove("hide");
     document.querySelector(".game").classList.add("hide");
     gamepannel();
});

function gamepannel() {
function makebubble(){
    let bubble = "";
for(i=1;i<=176;i++){
   let num = Math.floor(Math.random()*10)
   bubble += `<div class="bubble">${num}</div>` 
}
document.querySelector(".pad").innerHTML = bubble; 
}

function timerset(){ 
    
    let timmer = 60; 
 const timer = setInterval( ()=> { 
    
    if(timmer > 0) {
       
        timmer--;
        document.querySelector("#timer").textContent = timmer;
    }


    else {
       clearInterval(timer);
       const winner = document.querySelector(".pad")
       winner.innerHTML =`<div class = "newpag"><h3>Game Over! Your Score ${score}</h3> <button class="newbtn" onclick="btnstart()">New Game</button></div>`;
       winner.classList.add("winnerbox");
    }

}, 1000)

}

let score = 0;
function scorebubble(){
    score += 10;
  document.querySelector("#scorebox").innerHTML = score;
}

let hit = 0;
function hitbubble(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitbox").innerHTML = hit;
}

const gamepannel = document.querySelector(".pad")
gamepannel.addEventListener("click",(detl)=>{
    let numbox = Number(detl.target.textContent);
    if (numbox == hit){
        scorebubble();
        makebubble();
        hitbubble();
    }
   

} );



hitbubble();
makebubble();
timerset();

}

function btnstart(){
    document.querySelector(".pad").classList.remove("winnerbox")
    document.querySelector("#scorebox").innerHTML = 0;
    gamepannel();
}


