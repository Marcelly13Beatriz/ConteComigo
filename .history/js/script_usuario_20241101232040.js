const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.toggle(); // Alterna o menu

    // Verifica se o menu está aberto
    if (menuItems.classList.contains('show')) {
        menuToggle.style.display = 'none'; // Esconde o botão de abrir
    } else {
        menuToggle.style.display = 'block'; // Mostra o botão de abrir
    }
});

