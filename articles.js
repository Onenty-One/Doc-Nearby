document.addEventListener('DOMContentLoaded', () => {
    const articlesGrid = document.getElementById('articles-grid');

    const articles = [
        {
            title: "Understanding Cardiovascular Health",
            excerpt: "Learn about the importance of heart health and how to maintain it through diet and exercise.",
            image: "https://example.com/heart-health.jpg",
            author: "Dr. John Doe",
            date: "2023-05-15",
            content: `
                Cardiovascular health is crucial for overall well-being. It involves maintaining a healthy heart and blood vessels. 
                Key factors include a balanced diet, regular exercise, and avoiding smoking. 
                Understanding your blood pressure and cholesterol levels is also important. 
                Regular check-ups can help detect issues early, and lifestyle changes can significantly reduce the risk of heart disease.
            `
        },
        {
            title: "Common Childhood Illnesses and How to Treat Them",
            excerpt: "A guide for parents on recognizing and managing common illnesses in children.",
            image: "https://example.com/childhood-illnesses.jpg",
            author: "Dr. Jane Smith",
            date: "2023-05-10",
            content: `
                Common childhood illnesses include colds, flu, and ear infections. 
                It's important for parents to recognize symptoms early and consult a pediatrician for appropriate treatment. 
                Maintaining good hygiene and ensuring vaccinations are up to date can help prevent many illnesses.
            `
        },
        {
            title: "Skin Care Tips for All Seasons",
            excerpt: "Dermatologist-approved tips for maintaining healthy skin throughout the year.",
            image: "https://example.com/skin-care.jpg",
            author: "Dr. Mike Johnson",
            date: "2023-05-05",
            content: `
                Healthy skin requires consistent care. Use sunscreen daily, moisturize regularly, and stay hydrated. 
                Adjust your skincare routine with the changing seasons to address specific needs, such as dryness in winter and oiliness in summer.
            `
        },
        {
            title: "The Importance of Mental Health",
            excerpt: "Understanding mental health and strategies for maintaining emotional well-being.",
            image: "https://example.com/mental-health.jpg",
            author: "Dr. Sarah Brown",
            date: "2023-04-30",
            content: `
                Mental health is just as important as physical health. It affects how we think, feel, and act. 
                Strategies for maintaining mental health include regular exercise, a balanced diet, and seeking professional help when needed.
            `
        },
        {
            title: "Nutrition Basics: Eating for Optimal Health",
            excerpt: "A comprehensive guide to understanding nutrition and making healthy food choices.",
            image: "https://example.com/nutrition.jpg",
            author: "Dr. Tom Wilson",
            date: "2023-04-25",
            content: `
                Nutrition is the foundation of good health. A balanced diet includes a variety of foods from all food groups. 
                Focus on whole foods, limit processed foods, and ensure adequate intake of vitamins and minerals.
            `
        },
        {
            title: "Exercise and Its Impact on Overall Health",
            excerpt: "Discover the many benefits of regular exercise and how to incorporate it into your daily routine.",
            image: "https://example.com/exercise.jpg",
            author: "Dr. Emily Davis",
            date: "2023-04-20",
            content: `
                Regular exercise is essential for maintaining physical and mental health. It helps control weight and reduces the risk of chronic diseases. 
                Aim for at least 150 minutes of moderate aerobic activity each week.
            `
        }
    ];

    function createArticleCard(article) {
        const card = document.createElement('div');
        card.classList.add('article-card');
        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="article-content">
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <p>By ${article.author} | ${article.date}</p>
                <button class="read-more" data-content="${article.content}">Read More</button>
 </div>
        `;
        
        // Add event listener for the Read More button
        card.querySelector('.read-more').addEventListener('click', () => {
            displayArticleDetail(article);
        });

        return card;
    }

    function displayArticleDetail(article) {
        const detailSection = document.getElementById('article-detail');
        detailSection.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}">
            <p>${article.content}</p>
            <button id="close-detail">Close</button>
        `;
        detailSection.style.display = 'block';

        // Add event listener to close the detail view
        document.getElementById('close-detail').addEventListener('click', () => {
            detailSection.style.display = 'none';
        });
    }

    function displayArticles() {
        articles.forEach(article => {
            const card = createArticleCard(article);
            articlesGrid.appendChild(card);
        });
    }

    displayArticles();
});