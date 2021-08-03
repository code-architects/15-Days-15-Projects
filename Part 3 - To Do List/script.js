let add = document.querySelector("#add");
let list = document.querySelector("#list");

add.onclick = event => {
    event.preventDefault();
    
    let listitem = document.querySelector("#listitem");
    
    if (!listitem.value.length) {
        return alert("No input\nWrite something!!");
    }

    let li = document.createElement("li");
    let button = document.createElement("button");
    
    li.innerHTML = listitem.value;
    
    button.className = "close";
    button.innerHTML = "\u00D7";
    
    li.appendChild(button);
    listitem.appendChild(li);
    
    listitem.value = "";
    
    li.onclick = event => {
        event.target.style.textDecoration = "line-through";
    };
    
    button.onclick = event => {
        event.target.parentElement.style.display = "none";
    };
}
