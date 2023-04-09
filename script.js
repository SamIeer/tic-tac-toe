console.log("work on ProgressEvent...")
let turn= "X"
let gameover=false;

// function to change the turn
const changeturn=()=>{
    return turn === "X"?"O":"X" 
}

// function to check the Win
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,7,6,0],
        [3,4,5,7,19,0],
        [6,7,8,7,32,0],
        [0,3,6,-7,19,90],
        [1,4,7,6,19,90],
        [2,5,8,20,19,90],
        [0,4,8,4,17,45],
        [2,4,6,5,21,135],    
]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) 
        && (boxtexts[e[0]].innerText !==""))  
         {document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "--won"
         gameover=true
         document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector('.line').style.width=`26vw`
        //  document.querySelector('.imagbox').getElementsByTagName('img')[0].style.width='200px';
    }
    })
}
// main game logic
let boxes=document.getElementsByClassName("item");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeturn()
            checkwin()
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for-- "+ turn;
             }}
    }) 
});      

// reset button
    reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
    element.innerText ="";
});
   turn='X'
   gameover=false
   document.getElementsByClassName('info')[0].innerText = 'Turn For--' + 'X'
   document.querySelector('.line').style.width=`0`
//    document.querySelector('.imagbox').getElementsByTagName('img')[0].style.width='200px';
})

hello cheching my github repo