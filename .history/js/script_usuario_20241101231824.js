const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.toggle(); // Alterna o menu

    // Se o menu está aberto, muda o ícone e esconde o botão de abrir
    if (menuItems.classList.contains('show')) {
        menuToggle.style.display = 'none'; // Esconde o botão de abrir
    } else {
        menuToggle.style.display = 'block'; // Mostra o botão de abrir
    }
});

// Adiciona funcionalidade ao botão de fechar
closeMenu.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.hide(); // Fecha o menu
    menuToggle.style.display = 'block'; // Mostra o botão de abrir
});