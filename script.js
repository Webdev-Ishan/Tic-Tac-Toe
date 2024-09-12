let music= new Audio("music.mp3")
let turn1 = new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let gamepass=false;

function changeturn(){
  if(turn==="X") return 'O'
  else{
    return "X"
  }
}
//  TO CHECIK THE WIN OF THE PLAYER
function checkwin(){

  let boxtext=document.getElementsByClassName('innerbox');
let wins=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

wins.forEach(e=>{
if(  (boxtext[e[0]]).innerText === (boxtext[e[1]]).innerText &&  (boxtext[e[1]]).innerText===(boxtext[e[2]]).innerText && (boxtext[e[0]]).innerText!=="" ){

document.querySelector('.info').innerText =  boxtext[e[0]].innerText + " WON THE MATCH"
let x=document.getElementById('result')
x.style.color="white"
x.style.backgroundColor="yellowgreen"
document.getElementById('image').style.width="200px"


gamepass=true;
}

})

}

// Game Logic

let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{

let boxtext=element.querySelector('.innerbox');


element.addEventListener('click',()=>{
if(boxtext.innerText===''){
    boxtext.innerText=turn;
    turn1.play();
    turn=changeturn();
    checkwin();
    if(!gamepass){
    document.getElementsByClassName('info')[0].innerText="Turn for "+ turn + " now"
}
}

})

})


//  RESTART BUTTON
let restart = document.getElementById('restart'); // assuming the button has an ID of "restart-button"
restart.addEventListener('click',()=>{
let boxtext=document.querySelectorAll('.innerbox');
Array.from(boxtext).forEach(e=>{

e.innerText=" ";
});

turn="X"
})