const menuToggle = document.getElementById('menuToggle'); // Botão de abrir o menu
const menuItems = document.getElementById('menuItems'); // Itens do menu
const closeMenu = document.getElementById('closeMenu'); // Botão de fechar

// Função para abrir o menu
menuToggle.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.show(); // Abre o menu

    menuToggle.style.display = 'none'; // Esconde o botão de abrir
    closeMenu.style.display = 'block'; // Mostra o botão de fechar
});

// Função para fechar o menu
closeMenu.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.hide(); // Fecha o menu

    menuToggle.style.display = 'block'; // Mostra o botão de abrir
    closeMenu.style.display = 'none'; // Esconde o botão de fechar
});
