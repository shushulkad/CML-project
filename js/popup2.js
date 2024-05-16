const popUp = document.getElementById("pop_up"); 

const openPopUps = document.querySelectorAll(".open_pop_up");

openPopUps.forEach(function(openPopUp) {
    openPopUp.addEventListener("click", function (e) {
        e.preventDefault();
        popUp.classList.add("active");
    });
});

const closePopUp = document.getElementById("pop_up_close");

closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
});
