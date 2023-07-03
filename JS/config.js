let whichPlayer=0;
function showEdit(event){
    aside.style.display="block";
    eror.textContent="";
    input.classList.remove("wrong");
    input.value="";
    whichPlayer=event.target.dataset.btn;
    if(whichPlayer==1){
        document.querySelector("#img1").style.display="block";
    }
    else if(whichPlayer==2){
        document.querySelector("#img2").style.display="block";
    }
}
function closeEdit(){
    aside.style.display="none";
    document.querySelector("#img1").style.display="none";
    document.querySelector("#img2").style.display="none";
}
function confirm(event){
    event.preventDefault();
    const iValue= new FormData(event.target).get("playername").trim();
    if(iValue===""){       //eror for empty name
        eror.textContent="Inter a valid name";
        input.classList.add("wrong");
    }
    else {    //put the names in the right place
        if(whichPlayer==1){
            playerObject[0].name=iValue;
            playername1.textContent=iValue;
            turn.textContent= iValue;
        }
        else if(whichPlayer==2){
            playerObject[1].name=iValue;
            playername2.textContent=iValue;
        }
        closeEdit();
    }
}