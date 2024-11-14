document.getElementById('menuToggle').addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (this.getAttribute('aria-expanded') === 'true') {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x'); // Ícone de fechar
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list'); // Ícone de lista
    }
});

// Adiciona funcionalidade ao botão de fechar
document.getElementById('closeMenu').addEventListener('click', function () {
    const collapseElement = document.getElementById('menuItems');
    const bootstrapCollapse = new bootstrap.Collapse(collapseElement);
    bootstrapCollapse.hide(); // Fecha o menu
    document.getElementById('menuToggle').setAttribute('aria-expanded', 'false'); // Atualiza o atributo
    const icon = document.getElementById('menuToggle').querySelector('i');
    icon.classList.remove('bi-x');
    icon.classList.add('bi-list'); // Reseta o ícone para lista
});