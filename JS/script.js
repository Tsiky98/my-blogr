const btn_hamburger = document.querySelector (".hamburger");
const img_hamburger = btn_hamburger.querySelector ("img");
const list_nav = document.querySelector (".list-nav");
const all_linkNav = list_nav.querySelectorAll (".item-nav a");
const all_imgArrowDown = list_nav.querySelectorAll (".arrow-down img");

btn_hamburger.addEventListener ("click",function (e) {
    list_nav.classList.toggle("active");

    if (img_hamburger.src.includes("icon-hamburger.svg")) {
        img_hamburger.src = "./images/icon-close.svg";

    } else {
        img_hamburger.src = "./images/icon-hamburger.svg";
    }

    all_imgArrowDown.forEach (el => {
        if (el.src.includes("icon-arrow-light.svg")) {
            el.src = "./images/icon-arrow-dark.svg";
        } else {
            el.src = "./images/icon-arrow-light.svg";
        }
    })
})


all_linkNav.forEach(el => {
    el.addEventListener ("click",() => {
        list_nav.classList.remove("active")
        img_hamburger.src = "./images/icon-hamburger.svg"
    })
});