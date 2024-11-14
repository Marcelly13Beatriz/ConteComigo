function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const plusIcon = document.getElementById('plusIcon');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Mostra a imagem
            plusIcon.style.display = 'none'; // Esconde o ícone
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = "";
        imagePreview.style.display = 'none'; // Esconde a imagem se não houver arquivo
        plusIcon.style.display = 'block'; // Mostra o ícone novamente
    }
}