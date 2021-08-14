const searchEl = document.querySelector(".search");
const form = document.querySelector("#searchform");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchquery = searchEl.value;
    if (searchquery.length == 0) {
        return false;
    } else {
        window.location = `https://www.google.com/search?q=${searchquery}`;
    }
});
console.log("Have a Nice Day... 😊");
console.log("Coded by @code.architects");