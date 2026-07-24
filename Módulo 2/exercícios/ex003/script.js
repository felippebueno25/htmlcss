// Mudar a cor de fundo do container para uma cor mais clara ao passar o mouse
const container = document.querySelector('.container');
container.addEventListener('mouseover', () => {
    container.style.backgroundColor = '#555';
});

// Reverter a cor de fundo do container quando o mouse sair
container.addEventListener('mouseout', () => {
    container.style.backgroundColor = '#313131';
});

// Mudar a cor do texto para uma cor mais clara ao passar o mouse
const texto = document.querySelector('.texto');
texto.addEventListener('mouseover', () => {
    texto.style.color = '#555';
});

// Reverter a cor do texto quando o mouse sair
texto.addEventListener('mouseout', () => {
    texto.style.color = '#313131';
});
