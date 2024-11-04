const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');
const closeMenu = document.getElementById('closeMenu');

// Adiciona o evento de clique no botão de abrir o menu
menuToggle.addEventListener('click', function () {
    // Cria uma instância do Bootstrap Collapse
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.toggle(); // Alterna o menu

    // Verifica se o menu está aberto
    if (menuItems.classList.contains('show')) {
        menuToggle.style.display = 'none'; // Esconde o botão de abrir
        closeMenu.style.display = 'block'; // Mostra o botão de fechar
    } else {
        menuToggle.style.display = 'block'; // Mostra o botão de abrir
        closeMenu.style.display = 'none'; // Esconde o botão de fechar
    }
});

// Adiciona o evento de clique no botão de fechar
closeMenu.addEventListener('click', function () {
    // Fecha o menu usando Bootstrap Collapse
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.hide(); // Fecha o menu
    menuToggle.style.display = 'block'; // Mostra o botão de abrir
    closeMenu.style.display = 'none'; // Esconde o botão de fechar
});
