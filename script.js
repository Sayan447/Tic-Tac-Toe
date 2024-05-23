let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('#reset-btn')

let newgamebtn = document.querySelector('#new-btn')
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector('#msg');


let turn0 = true; // playerX , playerO


const winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];




// reset game
const resetgame =  () => {

    turn0 = true;
    enableboxes();
    msgcontainer.classList.add('hide')

}




boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        if(turn0){ //playerO
            box.innerText = 'O'
            turn0 = false; // it's true the next time that's why it is false 
        }

        else{ //playerX
            box.innerText = "X";
            turn0 = true 
        }

        box.disabled = true;
        checkwinner();
    })
})



 
// after the the winner every button should be disable
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}


// for enable boxes
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showwinner = (winner) =>{
    msg.innerHTML = `<i>Congratulation, winner is ${winner}</i>`
    msgcontainer.classList.remove('hide');
    disableboxes();
}






const checkwinner= () => {
    for(let pattern of winpattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos2Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner" , pos1Val);
                showwinner(pos1Val);
            }
        }
    }
}







// when the newgamebtn is on or triggered then the resetgame was triggered
newgamebtn.addEventListener('click',resetgame)

resetbtn.addEventListener('click',resetgame)