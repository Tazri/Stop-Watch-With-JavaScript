//Track Element
let secBox = document.getElementById('secound');
let minBox = document.getElementById('minute');
let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let pauseBtn = document.getElementById('pause');

//Variable
let secound = 0;
let isRunning = false;
let intervalId = null;

//Create Function
function start(){
    if(!isRunning){
        isRunning = true;
        intervalId = setInterval(function(){
            changeTime(secound++)
        },1000)
    }
}

function reset(){
    pause();
    secound = 0;
    changeTime(0);
}

function pause(){
    isRunning = false;
    clearInterval(intervalId);
}

//Add EventListener
startBtn.addEventListener('click',start)
pauseBtn.addEventListener('click',pause);
resetBtn.addEventListener('click',reset);

//Change Time tool
function changeTime(sec){
    minBox.textContent = Number.parseInt(sec/60) < 10 ? '0'+Number.parseInt(sec/60): Number.parseInt(sec/60);
    secBox.textContent = sec%60 < 10 ? '0'+(sec%60):sec%60; 
}
