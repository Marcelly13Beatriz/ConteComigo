const menuToggle = document.getElementById('menuToggle'); // Botão de abrir o menu
const menuItems = document.getElementById('menuItems'); // Itens do menu
const closeMenu = document.getElementById('closeMenu'); // Botão de fechar

// Adiciona o evento de clique no botão de abrir o menu
menuToggle.addEventListener('click', function () {
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
