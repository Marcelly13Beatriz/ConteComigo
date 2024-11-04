document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("menuItems");
    const toggleButton = document.querySelector(".toggle-button");

    // Verifica se o clique foi fora do sidebar e do botão de toggle
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && sidebar.classList.contains("show")) {
        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(sidebar);
        collapseInstance.hide();
    }
});