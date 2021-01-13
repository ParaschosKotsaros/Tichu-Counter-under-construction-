const submit = document.querySelector("#submitscore")
const scoreA = document.querySelector("#addscoreA")
const scoreB = document.querySelector("#addscoreB")
const resultA = document.querySelector("#resultA")
const resultB = document.querySelector("#resultB")
const reset = document.querySelector('#resetscore')
//buttons  
const tichuA = document.querySelector("#tichuA")
const tichuB = document.querySelector("#tichuB")
const grandA = document.querySelector("#grandA")
const grandB = document.querySelector("#grandB")
const tichuFailA = document.querySelector("#tichuFailA")
const tichuFailB = document.querySelector("#tichuFailB")
const grandFailA = document.querySelector("#grandFailA")
const grandFailB = document.querySelector("#grandFailB")


let finalscoreA = 0;
let finalscoreB = 0;



//adds score 
function addscore(){
  submit.addEventListener('click', ()=>{
  if (scoreA.value <= 125 && scoreA.value >=-25){ 
    // shows the score of every round
  document.getElementById("details1").innerHTML +=`<span class="details1">${scoreA.value}</span></br>`
  document.getElementById("details2").innerHTML +=`<span class="details2">${Math.abs(100 - scoreA.value)}</span></br>`

  finalscoreA = finalscoreA + parseInt(scoreA.value)
  resultA.innerHTML = finalscoreA;
  scoreB.value = Math.abs(100 - parseInt(scoreA.value))
  finalscoreB = finalscoreB + Math.abs(100 - parseInt(scoreA.value))
  resultB.innerHTML = finalscoreB;  

  winner(finalscoreA,finalscoreB)
  } else{alert("wrong score")}
  })
}
//announces the winner of the game 
function winner(teamA,teamB){
  if(teamA>=1000 && teamA>teamB){
      alert("Team A Wins")
      resetscore();
  }
   else if (teamB >=1000 && teamB > teamA){
       alert("Team B Wins")}
       resetscore();
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


function inputUpdate(){
  scoreA.addEventListener("keyup", ()=>{
   scoreB.value = Math.abs(100-scoreA.value);
  });
  scoreB.addEventListener("keyup", ()=>{
    scoreA.value = Math.abs(100 - scoreB.value);
  })
}


// button functions for Team A
function tichu1(){
   tichuA.addEventListener('click',()=>{
       finalscoreA +=100;})}

function tichuFail1(){
  tichuB.addEventListener('click',()=>{
      finalscoreB -=100;})}

function grandtichu1(){
  grandA.addEventListener('click',()=>{
      finalscoreA +=200;})}

function grandFail1(){
  grandFailA.addEventListener('click',()=>{
      finalscoreA -=200})}

// button functions for Team B
function tichu2(){
  tichuB.addEventListener('click',()=>{
      finalscoreB +=100})}

function grandtichu2(){
    grandB.addEventListener('click',()=>{
        finalscoreB +=200})}

 function tichuFail2(){
  tichuFailB.addEventListener('click',()=>{
      finalscoreB -=100})}

  function grandfail2(){
        grandFailB.addEventListener('click',()=>{
            finalscoreB -=200})}
 
  



tichu1();
tichu2();
grandtichu1();
grandtichu2();
grandFail1();
grandfail2();
tichuFail1();
tichuFail2();
inputUpdate();
addscore();
resetscore();

