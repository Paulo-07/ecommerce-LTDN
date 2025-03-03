const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        contents.forEach(content => content.style.display = "none");
        document.getElementById(button.dataset.target).style.display = "block";
    });
});
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let query = document.getElementById("search-input").value.toLowerCase().trim();
    let categories = {
        "decoracion": "../index.html#decoracion",
        "hogar": "../index.html#hogar",
        "infantil": "../index.html#infantil",
        "tecnologia": "../index.html#tecnologia",
        "mujer": "../index.html#mujer",
        "hombre": "../index.html#hombre",
        "productos licenciados" : "../index.html#p_licenciados"
    };
    if (categories[query]) {
        window.location.href = categories[query]; 
    } else {
        alert("Categoría no encontrada");
    }
});