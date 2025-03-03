function navigationMenu(){
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active')
}
document.querySelectorAll(".openModal").forEach(openBtn => {
    openBtn.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal"); 
        document.getElementById(modalId).style.display = "flex";
    });
});
document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
        this.closest(".modal").style.display = "none"; 
    });
});
document.querySelectorAll(".confirmBtn").forEach(confirmBtn => {
    confirmBtn.addEventListener("click", function () {
        alert("¡Gracias por aceptar!");
        this.closest(".modal").style.display = "none";
    });
});
window.addEventListener("click", function (event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let query = document.getElementById("search-input").value.toLowerCase().trim();
    let categories = {
        "decoracion": "decoracion",
        "hogar": "hogar",
        "infantil": "infantil",
        "tecnologia": "tecnologia",
        "mujer": "mujer",
        "hombre": "hombre",
        "productos licenciados" : "p_licenciados"
    };
    if (categories[query]) {
        window.location.hash = categories[query]; 
    } else {
        alert("Categoría no encontrada");
    }
});