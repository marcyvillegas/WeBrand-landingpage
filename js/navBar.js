// Sticky navigation bar
window.addEventListener("scroll", function () {
    let navBar = document.getElementById("navBar");
    let logoImg = document.getElementById("logoImage");

    if (window.pageYOffset > 0) {
        navBar.classList.add("sticky");
        navBar.style.paddingTop = "1px";
        logoImg.style.width = "220px";

    } else {
        navBar.classList.remove("sticky");
        navBar.style.fontSize = "17px";
        navBar.style.paddingTop = "15px";
        logoImg.style.width = "250px";
    }
});

