
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function(event) {
        alert('Welcome to Viet Flavors! Explore our delicious menu.');
    });
});

async function searchMeal() {
    const mealName = document.getElementById('meal-search').value;
    if (mealName) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        const data = await response.json();
        displayMeals(data.meals);
    }
}

async function listMealsByLetter() {
    const mealLetter = document.getElementById('meal-letter').value;
    if (mealLetter) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealLetter}`);
        const data = await response.json();
        displayMeals(data.meals);
    }
}

function displayMeals(meals) {
    const mealResults = document.getElementById('meal-results');
    mealResults.innerHTML = '';

    if (meals) {
        meals.forEach(meal => {
            const mealItem = document.createElement('div');
            mealItem.classList.add('menu-item');

            const mealImg = document.createElement('img');
            mealImg.src = meal.strMealThumb;
            mealImg.alt = meal.strMeal;

            const mealTitle = document.createElement('h3');
            mealTitle.textContent = meal.strMeal;

            const mealDesc = document.createElement('p');
            mealDesc.textContent = meal.strInstructions.slice(0, 100) + '...';

            mealItem.appendChild(mealImg);
            mealItem.appendChild(mealTitle);
            mealItem.appendChild(mealDesc);
            mealResults.appendChild(mealItem);
        });
    } else {
        mealResults.innerHTML = '<p>No results found.</p>';
    }
}
