document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('medicine-search-input');
    const searchButton = document.getElementById('medicine-search-button');
    const resultsContainer = document.getElementById('medicine-results');

    const medicines = [
        { name: 'Aspirin', price: 5.99, store: 'PharmaCare', inStock: true },
        { name: 'Ibuprofen', price: 7.99, store: 'MediMart', inStock: true },
        { name: 'Amoxicillin', price: 12.99, store: 'HealthHub', inStock: false },
        { name: 'Lisinopril', price: 15.99, store: 'PharmaCare', inStock: true },
        { name: 'Metformin', price: 8.99, store: 'MediMart', inStock: false },
    ];

    function searchMedicines(query) {
        const results = medicines.filter(medicine => 
            medicine.name.toLowerCase().includes(query.toLowerCase())
        );
        displayMedicineResults(results);
    }

    function displayMedicineResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No medicines found.</p>';
            return;
        }
        results.forEach(medicine => {
            const medicineCard = document.createElement('div');
            medicineCard.classList.add('medicine-card');
            medicineCard.innerHTML = `
                <h3>${medicine.name}</h3>
                <p>Price: $${medicine.price.toFixed(2)}</p>
                <p>Store: ${medicine.store}</p>
                <p class="${medicine.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${medicine.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
            `;
            resultsContainer.appendChild(medicineCard);
        });
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchMedicines(query);
        }
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchMedicines(query);
            }
        }
    });
    // Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light theme
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-theme', currentTheme === 'dark');
updateThemeToggleIcon(currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    updateThemeToggleIcon(isDarkTheme);
});

function updateThemeToggleIcon(isDarkTheme) {
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    sunIcon.style.display = isDarkTheme ? 'inline-block' : 'none';
    moonIcon.style.display = isDarkTheme ? 'none' : 'inline-block';
}
});