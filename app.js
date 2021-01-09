const submit = document.querySelector("#submitscore")
const scoreA = document.querySelector("#addscoreA")
const scoreB = document.querySelector("#addscoreB")
const resultA = document.querySelector("#resultA")
const resultB = document.querySelector("#resultB")
const tichuA = document.querySelector("#tichuA")
const reset = document.querySelector('#resetscore')
let finalscoreA = 0;
let finalscoreB = 0;

//adds score 
function addscore (){
    submit.addEventListener('click', ()=>{
    if (scoreA.value <= 125 && scoreA.value >=-25){ 
      // shows the score of every round
    document.getElementById("details1").innerHTML +=`<span class="details1">${scoreA.value}</span></br>`
    document.getElementById("details2").innerHTML +=`<span class="details2">${Math.abs(100 - scoreA.value)}</span></br>`
    finalscoreA = finalscoreA + parseInt(scoreA.value)
    resultA.innerHTML = finalscoreA;
    finalscoreB = finalscoreB + Math.abs(100 - parseInt(scoreA.value))
    resultB.innerHTML = finalscoreB;  

    winner(finalscoreA,finalscoreB)
    } else{alert("wrong score")}
    })
}
//announces the winner of the game 
function winner(teamA,teamB){
  if(teamA>=1000 && teamA>teamB){
      alert("Team A Wins")}
   else if (teamB >=1000 && teamB > teamA){
       alert("Team B Wins")}
}

// resets score back to zero for new game
function resetscore(){
    reset.addEventListener('click',()=>{
      //deletes the score from every round
      if(document.getElementsByClassName("details1")){
        document.querySelectorAll('.details1').forEach(function(a){
        a.remove()
        })
      }
      if(document.getElementsByClassName("details2")){
        document.querySelectorAll(".details2").forEach(function(a){
        a.remove()
        })
      }
      //deletes finalscore
      resultA.innerHTML = 0;
      resultB.innerHTML = 0;
      finalscoreA = 0;
      finalscoreB = 0;
    })
}



addscore();
resetscore();



