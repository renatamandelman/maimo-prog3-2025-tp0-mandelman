const main = async () => {
  const API_URL = `https://dummyjson.com/recipes?limit=20&skip=0`;
  const response = await fetch(API_URL);
  const recipesData = await response.json();
  console.log(recipesData);

  const recipesGrid = document.querySelector(".recetas_grid");

  recipesData.recipes.forEach((recipe) => {
    recipesGrid.innerHTML += `
    <div class="receta">
    <img src="${recipe.image}" alt="${recipe.name}"/>
        <h3>${recipe.name}</h3>
        <div>
        <div>
        <h5>${recipe.cuisine}</h5> 
        </div>
        <a href="/recipe.html?id=${recipe.id}"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M11 8a1 1 0 0 0 1 1h.008a1 1 0 1 0 0-2H12a1 1 0 0 0-1 1m1 9a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1" clip-rule="evenodd"/></svg> </a>
    </div>
        </div>
    `;
  });
};
main();
