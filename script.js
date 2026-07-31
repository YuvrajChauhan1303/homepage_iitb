
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
});

document.addEventListener("scroll", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
})