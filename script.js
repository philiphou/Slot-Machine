
//set variable elements//

let start=document.getElementById("start")
let end=document.getElementById("stop")
let result=document.getElementById("board")
var boxs=document.querySelectorAll(".box")
var total=document.getElementById("final")
var anotherRun=document.getElementById("again")
var winElement=new Audio('coin.wav')
var looseElement=new Audio('Loose.mp3')
var resetElement=new Audio('reset.mp3')
var startElement=new Audio('start.mp3')


var totalScore=0;
// functions//
        // assign random numbers to three slots//
function randomNum(){
    
    for(var i=0; i<3; i++){
        startElement.play();
        let boxNum=Math.floor(Math.random()*3+1);
        boxs[i].innerHTML=boxNum;
        if(boxs[i].textContent==1){
            boxs[i].style.backgroundColor="white"
        } else{
            if(boxs[i].textContent==2){
                boxs[i].style.backgroundColor="red"
            }else{
                boxs[i].style.backgroundColor="yellow"
            }
            
        
        }
    
    }
}


function control(){

    result.textContent="running"
    startElement.play()
    var myInterval=setInterval(randomNum,100);
    function pause(){
        clearInterval(myInterval)
    }
    end.addEventListener("click",pause);
}

   
function outcome(){
    if(boxs[0].innerHTML==boxs[1].innerHTML&&boxs[0].innerHTML==boxs[2].innerHTML){
      result.innerHTML="You Score 100"
      totalScore+=100;
      winElement.play();
    }else if(boxs[0].innerHTML!==boxs[1].innerHTML&&boxs[0].innerHTML!==boxs[2].innerHTML&&boxs[1].innerHTML!==boxs[2].innerHTML){

    result.textContent="You Score 0"
    totalScore+=0;
    looseElement.play();
   } else{
    result.innerHTML="You Score 50"
    winElement.play();
    totalScore+=50;
    
}
   total.innerHTML="You Earn: "+totalScore

}

function another(){
    for(i=0;i<3;i++){
        boxs[i].innerHTML=0;
        boxs[i].style.backgroundColor="black";
    }
    totalScore=0;
    total.innerHTML="You Earn:"+totalScore;
    result.textContent="Good Luck"
    resetElement.play();

}

//Event Listeners//

start.addEventListener("click",control);
end.addEventListener("click",outcome);
anotherRun.addEventListener("click",another)


