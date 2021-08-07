const time = document.querySelector('.time');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');
let milliseconds = 0, seconds = 0, minutes = 0, t;

function addtime() {
	milliseconds = Date.now() - timenow;
	let seconds = (Math.floor(milliseconds / 1000));
	let minutes = (Math.floor(seconds / 60));
	let milli = milliseconds.toString().length <= 2 ? `${format(milliseconds.toString().split('')[milliseconds.toString().length - 2])}` : `${milliseconds.toString().split('')[milliseconds.toString().length - 3]}${milliseconds.toString().split('')[milliseconds.toString().length - 2]}`;
	console.log(milli);
	time.innerHTML = format(minutes) + " : " + format(seconds) + "." + milli;
}

function format(data) {
	return (data ? (data <= 9 ? "0" + data : data) : "00");
}
function calltimer() {
	timenow = Date.now()
	t = setInterval(addtime, 33);
}
function stoptimer() {
	clearTimeout(t);
	console.log(milliseconds);
	start.disabled = false;
}
function cleartimer() {
	time.textContent = "00 : 00.0";
	seconds = 0; minutes = 0;
}