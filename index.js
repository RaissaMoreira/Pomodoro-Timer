// Coletando as variáveis
let wm = document.getElementById('w_minutes');
let ws = document.getElementById('w_seconds');

let counter = document.getElementById('counter');

let bm = document.getElementById('b_minutes');
let bs = document.getElementById('b_seconds');

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
//store a reference to a timer variable
let startTimer;

// MUDANDO O HTML
// wm.innerText
// ws.innerText
// bm.innerText
// bs.innerText
// counter.innerText

// Ativando os botões
start.addEventListener('click', function() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer,1000);
  } else {
    alert ('Timer is already running!');
  };
});

reset.addEventListener('click', function () {
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = 5;
  bs.innerText = "00"

  counter.innerText = 0;

  stop ();
  startTimer = undefined;
});

pause.addEventListener('click', function() {
  stop ();
  startTimer = undefined;
});

// Start timer function
function timer () {

  // Work Timer
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (ws.innerText == 0 && wm.innerText != 0) {
    ws.innerText = 59;
    wm.innerText--;
  };

  // Break Timer
  if (wm.innerText ==0 && ws.innerText == 0) {
     if (bs.innerText != 0) {
     bs.innerText--;
     } else if (bs.innerText == 0 && bm.innerText != 0) {
      bs.innerText = 59;
      bm.innerText--;
     };
  };

  // Cycles
  if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
    wm.innerText = 25; 
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    counter.innerText++;
  };
};

// Stop start timer function
function stop () {
  clearInterval(startTimer);
};