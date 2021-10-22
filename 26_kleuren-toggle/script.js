// -------------VISIBLE-------------

const color = ["none", "red", "orange", "blue", "green"]
const showActiveColor = document.querySelector(".showActiveColor");
let textP = document.querySelector(".textP");
let activeColor = "";

// -------------MENU-------------

// ZIE OOK README: 

// IF MENU-CODE IS UNCOMMENTED, UNCOMMENT ALL CODE IN THIS FILE.
// ALSO CSS: notes are included

// const toggleNavigation = () => {
//     let getMenuButton = document.querySelector(".menu-button");
//     getMenuButton.addEventListener("mouseover", showMenu);
//     let getMenu = document.querySelector(".color-menu");
//     getMenu.addEventListener("mouseout", showMenu);
// }

// const showMenu = () => {
//     let getColorMenu = document.querySelector(".color-menu");
//     getColorMenu.classList.toggle("visible");
// }

// toggleNavigation();

// -------------SHOW COLOR AS BACKGROUND IN MAIN-------------

const showColorMain = (mainColor) => {
    let getColorText = document.querySelector("main");
    if(mainColor === "none") {
        getColorText.innerHTML= "";
    } else {
        getColorText.innerHTML= mainColor;
        getColorText.style.textTransform="capitalize";
        getColorText.style.opacity=0.5;
    }
}

// -------------EVENT LISTENERS-------------

const menuItems = document.querySelectorAll("li");
for (let i=0; i<menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        textP.innerHTML = "";
        activeColor = color[i];
        let bodyColor = document.querySelector("body");
        bodyColor.style.background = color[i];
        showColorMain(color[i]);
        // UNCOMMENT IF ABOVE CODE IS ALSO UNCOMMENTED
        // showMenu();
        createPar();
})}


document.addEventListener("keydown", function(e){
    let bodyColor = document.querySelector("body");
    textP.innerHTML = "";

    if (e.key == 0) {
        bodyColor.style.background = color[e.key];      
    } else if (e.key == 1) {
        bodyColor.style.background = color[e.key];
    } else if (e.key == 2) {
        bodyColor.style.background = color[e.key];
    } else if (e.key == 3) {
        bodyColor.style.background = color[e.key];
    } else if (e.key == 4) {
        bodyColor.style.background = color[e.key];
    }
    if (color[e.key] !== undefined){
        showColorMain(color[e.key])
        activeColor = color[e.key];
        createPar();
    }
});

const createPar = () => {
    showActiveColor.addEventListener("mousedown", function() {
        showActiveColor.style.textTransform="capitalize";
        textP.innerHTML=activeColor;
    })
}

// -------------END EVENT LISTENERS-------------