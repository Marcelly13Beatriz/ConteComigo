document.getElementById('menuToggle').addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (this.getAttribute('aria-expanded') === 'true') {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x'); // Ícone de fechar
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list'); // Ícone de lista
    }}