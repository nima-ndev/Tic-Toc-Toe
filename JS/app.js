 //cart Elemnts
const showbutton1=document.querySelector(".player-1 button");
const showbutton2=document.querySelector(".player-2 button");
const playername1=document.querySelector(".playerName1");
const playername2=document.querySelector(".playerName2");
//Edit window
const aside= document.querySelector("aside");
const form=document.querySelector(".aside-box");
const dark=document.querySelector(".dark");
const cancelBtn=document.querySelector('.aside-box .first-button');
const input=document.querySelector('.aside-box input');
const eror=document.querySelector('.eror');
//board-game
const turn= document.querySelector("#turn");
const allItems= document.querySelectorAll(".game-board li");
const winner=document.getElementById("winner");
const startbtn=document.getElementById("startNewGame");

showbutton1.addEventListener('click',showEdit);
showbutton2.addEventListener('click',showEdit);
cancelBtn.addEventListener('click',closeEdit);
 form.addEventListener('submit',confirm);
 startbtn.addEventListener('click',startNew);


for(const item of allItems){
 item.addEventListener('click',clickOnBoard);
}

console.dir(matrix);