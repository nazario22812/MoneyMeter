document.querySelectorAll(".trr").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".trr").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
