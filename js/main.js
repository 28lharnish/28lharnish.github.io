//* Change Variable
let styleMode = document.cookie;

//* Change Variable
let styleTag = document.getElementById("styleSheet");

//* Conditional Branch + Else Branch
if (styleMode == "dark") {
    styleTag.href = "./css/dark.css";
    document.cookie = "dark";
} else {
    styleTag.href = "./css/light.css";
    document.cookie = "light";
}

//* Common Event
function switchMode() {
    if (styleMode == "dark") {
        styleTag.href = "./css/light.css";
        document.cookie = "light";
        styleMode = "light";
    } else {
        styleTag.href = "./css/dark.css";
        document.cookie = "dark";
        styleMode = "dark";
    }
}

function showHide() {
    let toolBarButtons = document.getElementById("buttons");
    
    if(toolBarButtons.style.display === 'block') {
         toolBarButtons.style.display = 'none'
    } else {
         toolBarButtons.style.display = 'block'
    }
}
