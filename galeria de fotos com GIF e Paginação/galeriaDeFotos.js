const gifsPerPage = 3;
let currentPage = 1;

const gifs = [
    "bom-dia-dia-abençoado.gif",
    "43257325a5c5faa775625611b45ba495.gif",
    "os-melhores-gifs-de-bom-dia-para-whatsapp-e-facebook-1.gif",
    "gif-bom-dia-chuva-de-carinho.gif",
    "bfa5fb35e6b27893194dca5b77421c88.gif",
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);