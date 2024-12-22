document.addEventListener('DOMContentLoaded', () => {
    const doctorCards = document.querySelector('.doctor-cards');
    const filterButtons = document.querySelectorAll('.filter-button');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const articlesContainer = document.querySelector('.articles-container');
    const articleFilterButtons = document.querySelectorAll('.article-filters .filter-button');

    const doctors = [
        { name: 'Dr. Ash', rating: 4.8, specialty: 'Cardiologist', image: 'https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' },
        { name: 'Dr. Sophie', rating: 4.9, specialty: 'Pediatrician', image: 'https://t3.ftcdn.net/jpg/00/79/71/30/240_F_79713072_dWCAZt6wPNFG5PqooCxAGsl4Mza7UfVy.jpg' },
        { name: 'Dr. Anna Rouxie', rating: 4.7, specialty: 'Dermatologist', image: 'https://t3.ftcdn.net/jpg/01/30/45/54/240_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg' },
        { name: 'Dr. John Doe', rating: 4.6, specialty: 'Cardiologist', image: 'https://t4.ftcdn.net/jpg/02/65/13/75/240_F_265137512_Oh1Bwar4BE4N6nnsvgkIse8SMkYHSn1h.jpg' },
        { name: 'Dr. Ashifa', rating: 4.8, specialty: 'Pediatrician', image: 'https://t4.ftcdn.net/jpg/03/20/74/45/240_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg' },
        { name: 'Dr. Emily Davis', rating: 4.9, specialty: 'Dermatologist', image: 'https://t3.ftcdn.net/jpg/01/50/17/76/240_F_150177678_tTiXG1WOwVinmD6IvpFfySqDKyNETyvD.jpg' },
    ];

    const articles = [
        { title: 'Understanding Heart Health', category: 'disease', image: 'https://t4.ftcdn.net/jpg/08/78/74/19/240_F_878741913_bx8pTI7YD7b4HW7RCb11FcLKePydFmfE.jpg', excerpt: 'Learn about common heart conditions and how to prevent them.' },
        { title: '10 Tips for a Healthy Lifestyle', category: 'health', image: 'https://t3.ftcdn.net/jpg/01/21/79/06/240_F_121790612_FN9IodcNfQfO6jcOP6YgKc1YbIOo7JXC.jpg', excerpt: 'Simple changes you can make for a healthier you.' },
        { title: 'The Importance of Mental Wellness', category: 'wellness', image: 'https://t4.ftcdn.net/jpg/06/17/67/69/240_F_617676960_Y8EpEkHymhPU7oYu8abbXv7qMrqj8JbG.jpg', excerpt: 'Discover strategies for maintaining good mental health.' },
        { title: 'Childhood Vaccinations: What You Need to Know', category: 'disease', image: 'https://t3.ftcdn.net/jpg/08/37/78/24/240_F_837782493_Qwnt9kKXbhzMcVoFHvqwrbzbjgZoSKlt.jpg', excerpt: 'A comprehensive guide to childhood immunizations.' },
        { title: 'Nutrition Basics: Eating for Optimal Health', category: 'health', image: 'https://t4.ftcdn.net/jpg/01/81/43/79/240_F_181437913_utpqSHRnsMNGB7jdCAR4UbFcAL8h2lCm.jpg', excerpt: 'Learn about the building blocks of a balanced diet.' },
        { title: 'Stress Management Techniques', category: 'wellness', image: 'https://t4.ftcdn.net/jpg/01/23/06/73/240_F_123067328_l7WaDlrjNP7Ke6zM3RRwpqalDh0o335f.jpg', excerpt: 'Effective ways to cope with and reduce stress in your daily life.' },
    ];

    function createDoctorCard(doctor) {
        const card = document.createElement('div');
        card.classList.add('doctor-card');
        card.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h3>${doctor.name}</h3>
            <div class="rating">Rating: ${doctor.rating} ⭐</div>
            <div class="specialty">${doctor.specialty}</div>
            <a href="#" class="book-now">BOOK NOW</a>
        `;
        return card;
    }

    function createArticleCard(article) {
        const card = document.createElement('div');
        card.classList.add('article-card');
        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a href="#" class="read-more">Read More</a>
        `;
        return card;
    }

    function displayDoctors(doctorsToDisplay) {
        doctorCards.innerHTML = '';
        doctorsToDisplay.forEach(doctor => {
            const card = createDoctorCard(doctor);
            doctorCards.appendChild(card);
        });
        animateCards(doctorCards);
    }

    function displayArticles(articlesToDisplay) {
        articlesContainer.innerHTML = '';
        articlesToDisplay.forEach(article => {
            const card = createArticleCard(article);
            articlesContainer.appendChild(card);
        });
        animateCards(articlesContainer);
    }

    function animateCards(container) {
        const cards = container.querySelectorAll('.doctor-card, .article-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }

    function filterDoctors(specialty) {
        if (specialty === 'all') {
            displayDoctors(doctors);
        } else {
            const filteredDoctors = doctors.filter(doctor => doctor.specialty.toLowerCase() === specialty.toLowerCase());
            displayDoctors(filteredDoctors);
        }
    }

    function filterArticles(category) {
        if (category === 'all') {
            displayArticles(articles);
        } else {
            const filteredArticles = articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
            displayArticles(filteredArticles);
        }
    }

    function searchDoctors(query) {
        const searchResults = doctors.filter(doctor => 
            doctor.name.toLowerCase().includes(query.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(query.toLowerCase())
        );
        displayDoctors(searchResults);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const specialty = button.getAttribute('data-specialty');
            filterDoctors(specialty);
        });
    });

    articleFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterArticles(category);
        });
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchDoctors(query);
        }
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchDoctors(query);
            }
        }
    });

    // Initial display of all doctors and articles
    displayDoctors(doctors);
    displayArticles(articles);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for doctor cards and article cards
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        const cards = document.querySelectorAll('.doctor-card:not(.visible), .article-card:not(.visible)');
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);

    // Trigger initial scroll animation
    handleScrollAnimation();
    // Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light theme



});