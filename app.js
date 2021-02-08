const searchButton = document.getElementById("searchButton") ;
searchButton.addEventListener("click" , () => {
showMeal()
})
function showMeal() {
    const inputValue = document.getElementById("meal-name").value;
    if(inputValue === "") {
        alert("Please search with a name");
        return false;
    }
    document.getElementById("meal-name").value = "";
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then (res => res.json())
    .then (data => displayMeal(data.meals));

}
const displayMeal = meals => {
    // console.log(meals);
    const itemDiv = document.getElementById("show-meal");
    itemDiv.innerHTML = "";
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        //    console.log(meal.strMeal); 
        const mealDiv = document.createElement('div');
        mealDiv.className = 'food';
        const mealInfo = `
        <img onclick="displayMealDetail('${meal.strMeal}')" width = "300px" src = "${meal.strMealThumb}" >
        <h3 class="food-name">${meal.strMeal}</h3>
        `
        mealDiv.innerHTML = mealInfo;
        itemDiv.appendChild(mealDiv);
    }
}

const displayMealDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => getMealInfo(data.meals[0]));
}
const getMealInfo = meal => {
     const foodDetail = document.getElementById('show-detail');
     foodDetail.innerHTML = `
        <img width = "300px" src = "${meal.strMealThumb}" >
        <h3>${meal.strMeal}</h3>
        <p> <strong>Ingredients: </strong></p>
        <p>${meal.strIngredient1}</p>
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        <p>${meal.strIngredient6}</p>
        <p>${meal.strIngredient7}</p>
        <p>${meal.strIngredient8}</p>
        <p>${meal.strIngredient9}</p>
        <p>${meal.strIngredient10}</p>
        <p>${meal.strIngredient11}</p>
        <p>${meal.strIngredient12}</p>
        <p>${meal.strIngredient13}</p>
        <p>${meal.strIngredient14}</p>
        <p>${meal.strIngredient15}</p>
    `
}









