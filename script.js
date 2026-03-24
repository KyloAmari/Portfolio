window.onload = function () {
    const xp = document.querySelector(".xp-fill");
    xp.style.width = "0%";

    setTimeout(() => {
        xp.style.transition = "width 1.5s ease-out";
        xp.style.width = "70%";
    }, 300);
};