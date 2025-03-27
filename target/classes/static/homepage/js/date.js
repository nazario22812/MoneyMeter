document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();
    document.getElementById("currentDate").textContent = formattedDate;
});
