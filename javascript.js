
let item=document.querySelectorAll('.item');
let hscore=document.querySelector(".hscore");
let cscore=document.querySelector(".cscore");
let playerSelection;
let p=document.querySelector(".comment");

function computerSelect()
{
    return Math.floor(Math.random()*3);
}

function round(playerSelection)
{
    let d=computerSelect();
    if(playerSelection.toLowerCase()=='rock' && d==1) return "You lost the round! Paper beats rock";
    if(playerSelection.toLowerCase()=='rock' && d==2) return "You won the round! rock beats scissors";
    if(playerSelection.toLowerCase()=='paper' && d==0) return "You won the round! paper beats rock";
    if(playerSelection.toLowerCase()=='paper' && d==2) return "You lose the round! scissors beats paper";
    if(playerSelection.toLowerCase()=='scissors' && d==0) return "You lose the round! rock beats scissors";
    if(playerSelection.toLowerCase()=='scissors' && d==1) return "You won the round! scissors beats paper";
    return 'Its a tie!';
}

item.forEach(element => {
    element.addEventListener('click',function(e){
        element.classList.add('transform');
        if(element.classList.contains("rock"))
        {
            playerSelection='rock';
        }
        else if(element.classList.contains("paper"))
        {
            playerSelection='paper';
        }
        else if(element.classList.contains("scissors"))
        {
            playerSelection='scissors';
        }
        
    let result=round(playerSelection);
    let n=parseInt(hscore.textContent);
    let q=parseInt(cscore.textContent);
    if(result.substring(0,7)=='You won')
    {
        n=n+1;
        if(n==5)
        {
            p.textContent="You Won congratulations!";
            n=0;
            q=0;
        }
        else
        {
            p.textContent=result;
        }
    }
    else if(result.substring(0,7)=='You los')
    {
        q+=1;
        if(q==5)
        {
            p.textContent="You Lost! Machines will overtake humanity because of you";
            n=0;
            q=0;
        }
        else{
            p.textContent=result;
        }
    }
    else
    {
        p.textContent=result;
    }
    hscore.textContent=""+n;
    cscore.textContent=""+q;
      
    });

    element.addEventListener('transitionend',function(e){
        if(e.propertyName=='background-color')
        {
            element.classList.remove('transform');
        }
    })
});