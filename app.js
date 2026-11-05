const filmes = [];
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');
const feed = document.getElementById('filmes');

botao.addEventListener('click', () => {
    formulario.hidden = false;
    formulario.scrollIntoView({ behavior: 'smooth' });
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const filme = {
        titulo: formulario.elements.titulo.value,
        capa: formulario.elements.capa.value
    };
    
    filmes.push(filme);

    const card = document.createElement('div');
    card.classList.add('movie-card');

    const cardCover = document.createElement('div');
    cardCover.classList.add('card-cover');
    
    const capa = document.createElement('img');
    capa.src = filme.capa;
    capa.alt = filme.titulo;
    cardCover.append(capa);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');

    const titulo = document.createElement('h3');
    titulo.classList.add('card-title');
    titulo.textContent = filme.titulo;

    const rating = document.createElement('div');
    rating.classList.add('card-rating');
    rating.textContent = '⭐ 0.0';

    cardDetails.append(titulo, rating);
    card.append(cardCover, cardDetails);
    feed.append(card);

    formulario.reset();
    formulario.hidden = true;
});
