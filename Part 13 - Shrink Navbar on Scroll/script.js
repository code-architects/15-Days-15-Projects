const navbar = document.querySelector(".navcontainer");
const logo = document.querySelector(".logo");
window.onscroll = () => {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.style.height = "60px";
		navbar.style.fontSize = "14px";
		logo.classList.add("logo-small");
	} else {
		navbar.style.height = "100px";
		navbar.style.fontSize = "16px";
		logo.classList.remove("logo-small");
	}
}