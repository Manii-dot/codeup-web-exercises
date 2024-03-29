const meals = document.getElementById('meals');

getRandomMeal();

async function getRandomMeal(){
const resp = await fetch("http://www.themealdb.com/api/json/v1/1/randomselection.php").data;
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

console.log(randomMeal);
addMeal(randomMeal, true);
}

async function getMealById(id){
const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

async function getMealsBySearch(term){
const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

function addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
           <div class = "meal-header">  
           ${random ?`
             <span class="random">Random Recipe</span>` : ""}            
                    <img 
                    src="${mealData.strMealThumb}" 
                    alt="${mealData.strMeal}"/>
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="fav-btn" onclick="">
                        <i class="fas fa-heart"></i>
                    </button>
                    </div>
                `;

    meals.appendChild(meal);
}

// SPECIAL NOTE---> have to fix a portion of this code to make the recipe display at the botton of the application