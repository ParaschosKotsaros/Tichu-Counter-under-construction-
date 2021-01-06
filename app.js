const submit = document.querySelector("#submitscore")
const scoreA = document.querySelector("#addscoreA")
const scoreB = document.querySelector("#addscoreB")
const resultA = document.querySelector("#resultA")
const resultB = document.querySelector("#resultB")
const tichuA = document.querySelector("#tichuA")
const reset = document.querySelector('#resetscore')
const undoscore = document.querySelector("#undo")
let finalscoreA = 0;
let finalscoreB = 0;

//adds score 
function addscore (){
    submit.addEventListener('click', ()=>{

    if (scoreA.value <= 125 && scoreA.value >=-25){
    finalscoreA = finalscoreA + parseInt(scoreA.value)
    resultA.innerHTML = finalscoreA;
    finalscoreB = finalscoreB + Math.abs(100 - parseInt(scoreA.value))
    resultB.innerHTML = finalscoreB;  
    } else{alert("wrong score")}
    })
}

//announces the winner of the game 
function winner(teamA,teamB){
  if(teamA>1000 && teamA>teamB){
      alert("Team A Wins")}
   else if (teamB >1000 && teamB > teamA){
       alert("Team B Wins")}
}


// resets score back to zero
function resetscore(){
    reset.addEventListener('click',()=>{
      resultA.innerHTML = 0;
      resultB.innerHTML = 0;
      finalscoreA = 0;
      finalscoreB = 0;
    })
}

function undo(){
    undoscore.addEventListener('click',()=>{
        finalscoreA = finalscoreA - finalscoreA
        finalscoreB = finalscoreB - finalscoreB
    })
}

addscore();
resetscore();
undo();



