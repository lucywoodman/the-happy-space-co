/* 
    Code snippet from: https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535
*/    
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = `<i class="ph-list"></i>`;
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = `<i class="ph-x"></i>`;
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);