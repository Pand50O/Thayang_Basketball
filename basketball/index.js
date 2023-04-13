let point_1_temp = 0;
let point_2_temp = 0;
let foul_1_temp = 0;
let foul_2_temp = 0;
let sc_temp = 24;
let ticker;
let ticker_time;
let countdownStatus = 1;
let countdownClick = 0;

const btn_point_plus_1 = document.getElementById("point_plus_1");
const btn_point_minus_1 = document.getElementById("point_minus_1");
const point_1 = document.getElementById("point_1");
const btn_point_plus_2 = document.getElementById("point_plus_2");
const btn_point_minus_2 = document.getElementById("point_minus_2");
const point_2 = document.getElementById("point_2");

const btn_foul_minus_1 = document.getElementById("foul_minus_1");
const btn_foul_plus_1 = document.getElementById("foul_plus_1");
const foul_1 = document.getElementById("foul_1");
const btn_foul_minus_2 = document.getElementById("foul_minus_2");
const btn_foul_plus_2 = document.getElementById("foul_plus_2");
const foul_2 = document.getElementById("foul_2");

const sc = document.getElementById("sc");
const sc_plus = document.getElementById("sc_plus");
const sc_minus = document.getElementById("sc_minus");

function plusFunc_1() {
    point_1_temp = point_1_temp + 1;
    point_1.innerHTML = point_1_temp;
}

function minusFunc_1() {
    point_1_temp = point_1_temp - 1;
    point_1.innerHTML = point_1_temp;
}

function plusFunc_2() {
    point_2_temp = point_2_temp + 1;
    point_2.innerHTML = point_2_temp;
}

function minusFunc_2() {
    point_2_temp = point_2_temp - 1;
    point_2.innerHTML = point_2_temp;
}

function minusFoul_1() {
    foul_1_temp -= 1;
    foul_1.innerHTML = foul_1_temp;
}

function plusFoul_1() {
    foul_1_temp += 1;
    foul_1.innerHTML = foul_1_temp;
}

function minusFoul_2() {
    foul_2_temp -= 1;
    foul_2.innerHTML = foul_2_temp;
}

function plusFoul_2() {
    foul_2_temp += 1;
    foul_2.innerHTML = foul_2_temp;
}


// ----------SHORT CLOCK------------

function scMinus(){
    sc_temp -= 1;
    sc.innerHTML = sc_temp;
}

function scPlus(){
    sc_temp += 1;
    sc.innerHTML = sc_temp;
}

function reset(){
    //clearInterval(ticker);
    sc_temp = 24;
    sc.innerHTML = sc_temp;
}

function startSC(){
    countdownStatus = 1;
    clearInterval(ticker);
    ticker = setInterval("tick_sc()", 1000);
}

function stopSC() {
    clearInterval(ticker);
    countdownStatus = 0;
}

function tick_sc() {
    if (sc_temp > 0) {
        if(countdownStatus == 1) {
            sc_temp--;
            sc.innerHTML = sc_temp;
        }
    }
    else {
        clearInterval(ticker);
        sc_temp = 24;
        sc.innerHTML = sc_temp;
    }
}

//-------------TIME---------------
let sec = 10*60;
const time = document.getElementById("time");
const minus_min = document.getElementById("time_minus_min");
const plus_min = document.getElementById("time_plus_min");
const minus_sec = document.getElementById("time_minus_sec");
const plus_sec = document.getElementById("time_plus_sec");
const time_start = document.getElementById("time_start");
const time_stop = document.getElementById("time_stop");

function updateTime(){
    let mins = Math.floor(sec/60);
    let pretty = ((mins < 10 ? "0" : "") + mins + ":" + (sec%60 < 10 ? "0" : "") + sec%60)
    time.innerHTML = pretty;
}

function minusMin() {
    if(sec <= 60) {
        sec = 0;
    }
    sec -= 60;
    updateTime();
}

function plusMin() {
    sec += 60;
    updateTime();
}

function minusSec() {
    if(sec > 0) {
        sec -= 1;
    }
    updateTime();
}

function plusSec() {
    sec += 1;
    updateTime();
}

function tick_time() {
    if (sec > 0) {
        sec--;
        updateTime();
    }
    else {
        clearInterval(ticker);
        updateTime();
    }
}

function startTime(){
    clearInterval(ticker_time);
    ticker_time = setInterval("tick_time()", 1000);
}

function stopTime() {
    clearInterval(ticker_time);
    stopSC();
}

function startTime2(){
    startTime();
    startSC();
}
