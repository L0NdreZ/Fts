document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleCategories');
    const categories = document.getElementById('categories');
    const searchInput = document.getElementById('searchInput');
    const movies = document.querySelectorAll('.movie');

    // Função para mostrar/ocultar as categorias
    toggleButton.addEventListener('click', function () {
        categories.classList.toggle('hidden');
    });

    // Função para filtrar filmes com base na pesquisa
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        movies.forEach(function (movie) {
            const title = movie.querySelector('h2').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });

    // Função para redirecionar para as páginas de categoria quando uma categoria é clicada
    const categoryLinks = categories.querySelectorAll('a');

    categoryLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impedir o comportamento padrão do link
            const categoryPage = link.getAttribute('href');
            window.location.href = categoryPage;
        });
    });
});
