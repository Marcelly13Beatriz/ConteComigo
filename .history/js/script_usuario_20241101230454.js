const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.toggle(); // Alterna o menu
    const icon = menuToggle.querySelector('i');
    
    // Verifica se o menu está aberto ou fechado
    if (menuItems.classList.contains('show')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x'); // Ícone de fechar
        menuToggle.style.display = 'none'; // Esconde o botão de abrir
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list'); // Ícone de lista
        menuToggle.style.display = 'block'; // Mostra o botão de abrir
    }
});

// Adiciona funcionalidade ao botão de fechar
closeMenu.addEventListener('click', function () {
    const bootstrapCollapse = new bootstrap.Collapse(menuItems);
    bootstrapCollapse.hide(); // Fecha o menu
    menuToggle.style.display = 'block'; // Mostra o botão de abrir
    menuToggle.querySelector('i').classList.remove('bi-x'); // Reseta o ícone para lista
    menuToggle.querySelector('i').classList.add('bi-list');
});