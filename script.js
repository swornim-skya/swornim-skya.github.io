const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .items");
const dots = document.querySelectorAll(".dots li");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {
    next.click();
}, 3000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".circular-progress").forEach(progress => {
        let value = progress.getAttribute("data-progress");
        let degrees = (value / 100) * 360;
        progress.style.setProperty('--progress-degrees', `${degrees}deg`);
    });
});