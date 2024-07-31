document.addEventListener("DOMContentLoaded", () => {
    // Dropdown menu interaction
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            dropdown.querySelector('.dropdown-menu').classList.toggle('show');
        });
    });

    // Live news feed update
    const newsHeadlines = [
        "Marufa on a mission to improve death bowling skills",
        "Harry Brook wants 'to be Harry Brook, not anybody else'",
        "Dushmantha Chameera ruled out of India T20Is",
        "Punjab Kings unlikely to renew Bayliss contract; looking for an Indian coach",
        "Want to be as ruthless as we can as a batting unit - Pope",
        "Associates decry scrapping of East Asia Pacific T20 Qualifier",
        "Charith Asalanka to lead SL in T20I series against India"
    ];
    let newsIndex = 0;
    setInterval(() => {
        const latestNewsElement = document.querySelector('.latest-news');
        latestNewsElement.innerHTML = newsHeadlines.map((headline, index) => {
            return `<li>${headline}<br><sub>${index + 1}h ago</sub></li>`;
        }).join('') + "<p>More news...</p>";
        newsIndex = (newsIndex + 1) % newsHeadlines.length;
    }, 10000); // Update news every 10 seconds

    // Toggle match details
    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach(card => {
        card.addEventListener('click', () => {
            const details = card.querySelector('.match-details');
            details.classList.toggle('hidden');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const newsItems = document.querySelectorAll('.latest-news li');
        newsItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Filter matches by date
    const filterInput = document.querySelector('#filter-date');
    filterInput.addEventListener('input', () => {
        const filterDate = new Date(filterInput.value);
        const matchDetails = document.querySelectorAll('.match-details');
        matchDetails.forEach(details => {
            const matchDate = new Date(details.querySelector('span:nth-child(2)').textContent.split(' - ')[1]);
            if (matchDate.toDateString() === filterDate.toDateString()) {
                details.closest('.match-card').style.display = '';
            } else {
                details.closest('.match-card').style.display = 'none';
            }
        });
    });
});
