let activePlayer=1;  //use 1 or 2
let matrix=[
    ["","",""],
    ["","",""],
    ["","",""],
]

let playerObject=[
    {name: "palyer 1", symbol:"X"},
    {name: "player 2", symbol: "O"}
]
function swichPlayers(){
    if (activePlayer==1){
        activePlayer=2;
    }
    else {
        activePlayer=1;
    }
}
function upMatrix(){
    matrix[0][0]=allItems[0].textContent;
    matrix[0][1]=allItems[1].textContent;
    matrix[0][2]=allItems[2].textContent;

    matrix[1][0]=allItems[3].textContent;
    matrix[1][1]=allItems[4].textContent;
    matrix[1][2]=allItems[5].textContent;

    matrix[2][0]=allItems[6].textContent;
    matrix[2][1]=allItems[7].textContent;
    matrix[2][2]=allItems[8].textContent;
}
function endgame(){
    for(const item of allItems){
        item.removeEventListener('click',clickOnBoard);
    }
    document.querySelector(".result").style.display="block";
    turn.parentElement.style.display="none";
}

function chekforWin(){
    for (let i=0;i<3;i++){
        if (matrix[i][0]!="" && matrix[i][0]==matrix[i][1] && matrix[i][1]==matrix[i][2]){
            winner.textContent=playerObject[activePlayer-1].name;
            endgame();
            return;
        }
    }
    for (let i=0;i<3;i++){
        if (matrix[0][i]!="" && matrix[0][i]==matrix[1][i] && matrix[1][i]==matrix[2][i]){
            winner.textContent=playerObject[activePlayer-1].name;
            endgame();
            return;
        }
    }
    if (matrix[0][0]!="" && matrix[0][0]==matrix[1][1] && matrix[0][0]==matrix[2][2]){
        winner.textContent=playerObject[activePlayer-1].name;
        endgame();
        return;
    }
    if (matrix[0][2]!="" && matrix[0][2]==matrix[1][1] && matrix[0][2]==matrix[2][0]){
        winner.textContent=playerObject[activePlayer-1].name;
        endgame();
        return;
    }
}
function startNew(){
    document.querySelector(".board-game").style.display="block";
    document.querySelector(".result").style.display="none";
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            matrix[i][j]="";
        }
    }
    for(const item of allItems){
        item.addEventListener('click',clickOnBoard);
        item.textContent="";
        item.classList.remove("disabled");
    }
    activePlayer=1;
    turn.textContent=playerObject[activePlayer-1].name;
    turn.parentElement.style.display="block";
}
function clickOnBoard(event){
    const li=event.target;
    if(li.textContent){
        alert("click on a empty cell")
        return;
    }
    li.classList.add("disabled");  //puting the right symbol
    li.textContent=playerObject[activePlayer-1].symbol;

    upMatrix(); //cheking for winner
    chekforWin();

    swichPlayers();
    turn.textContent=playerObject[activePlayer-1].name; //correcting turn
}
