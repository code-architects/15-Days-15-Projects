window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const hourEL = document.querySelector("#hour");
	const minuteEL = document.querySelector("#minute");
	const secondEL = document.querySelector("#second");
	let d = new Date();
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	if (hours >= 0 && hours <= 9) hours = "0" + hours;
	if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
	if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
	hourEL.innerHTML = hours;
	minuteEL.innerHTML = minutes;
	secondEL.innerHTML = seconds;


	const dateEl = document.querySelector("#date");
	let date = d.getDate();
	if (date >= 0 && date <= 9) date = "0" + date;
	let month = d.getMonth() + 1;
	if (month >= 0 && month <= 9) month = "0" + month;
	let year = d.getFullYear();
	if (year >= 0 && year <= 9) year = "0" + year;
	dateEl.innerHTML = `${date}/${month}/${year}`;


	const dayEL = document.querySelector("#day");
	let daynumber = d.getDay(), day = "";
	switch (daynumber) {
		case 0: day = "Sunday"; break;
		case 1: day = "Monday"; break;
		case 2: day = "Tuesday"; break;
		case 3: day = "Wednesday"; break;
		case 4: day = "Thrusday"; break;
		case 5: day = "Friday"; break;
		case 6: day = "Saturday"; break;
	}
	dayEL.innerHTML = day;
}