document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("menuItems");
    const toggleButton = document.querySelector(".toggle-button");
    const isClickInsideSidebar = sidebar.contains(event.target) || toggleButton.contains(event.target);

    if (!isClickInsideSidebar && sidebar.classList.contains("show")) {
        const collapseInstance = bootstrap.Collapse.getInstance(sidebar);
        collapseInstance.hide();
    }
});