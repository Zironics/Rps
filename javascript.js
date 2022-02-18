
let item=document.querySelectorAll('.item');
let hscore=document.querySelector(".hscore");
let cscore=document.querySelector(".cscore");
let playerSelection;
let p=document.querySelector(".comment");
let overlay=document.querySelector('.overlay');
let final=document.querySelector('.final')
let button=document.querySelector(".again");
let fs=document.querySelector('.final-score');

function computerSelect()
{
    return Math.floor(Math.random()*3);
}

function isEnd()
{
    return (hscore.textContent=='5' || cscore.textContent=='5');
}

function openEndGame()
{
    overlay.classList.add('active');
    final.classList.add("active");
    if(hscore.textContent=='5')
    {
        fs.textContent='You Won!';
    }
    else
    {
        fs.textContent='You Lost!';
    }
}

function closeEndGame()
{
    overlay.classList.remove('active');
    final.classList.remove('active');
}

function round(playerSelection)
{
    let d=computerSelect();
    if(playerSelection.toLowerCase()=='rock' && d==1) return "You lost the round! Paper beats rock";
    if(playerSelection.toLowerCase()=='rock' && d==2) return "You won the round! rock beats scissors";
    if(playerSelection.toLowerCase()=='paper' && d==0) return "You won the round! paper beats rock";
    if(playerSelection.toLowerCase()=='paper' && d==2) return "You lost the round! scissors beats paper";
    if(playerSelection.toLowerCase()=='scissors' && d==0) return "You lost the round! rock beats scissors";
    if(playerSelection.toLowerCase()=='scissors' && d==1) return "You won the round! scissors beats paper";
    return 'Its a tie!';
}

item.forEach(element => {
    element.addEventListener('click',function(e){
        element.classList.add('transform');
        setTimeout(() => {
            element.classList.remove("transform");
        }, 200);
        if(isEnd())
        {
            openEndGame();
            return;
        }
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
        n+=1;
        p.textContent=result;
    }
    else if(result.substring(0,7)=='You los')
    {
        q+=1;
        p.textContent=result;
    }
    else
    {
        p.textContent=result;
    }
    hscore.textContent=""+n;
    cscore.textContent=""+q;
    if(isEnd())
    {
        openEndGame();
        return;
    }
});
      
});

overlay.addEventListener('click',closeEndGame);
button.addEventListener('click',restartGame);

function restartGame()
{
    closeEndGame();
    hscore.textContent='0';
    cscore.textContent='0';
    p.textContent='';
}