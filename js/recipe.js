const main = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  console.log(id);
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await response.json();

  const imgRecipe = document.querySelector(".hero");
  const information = document.querySelector(".information");
  imgRecipe.style.backgroundImage = `url('${recipe.image}')`;
  imgRecipe.innerHTML = `
    <a class="cornerIcon" href="/index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg></a>
    <h1>${recipe.name}</h1>
 
    `;
  information.innerHTML = `
       <div class="ingredients">
                <h2>Ingredientes</h2>
                <ul>
                ${recipe.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
                    </ul>
            </div>
            <div class="instructions">
                <h2>Instructions</h2>
                <ul>
                ${recipe.instructions
                  .map((instruction) => `<li>${instruction}</li>`)
                  .join("")}
                    </ul>
            </div>
    
    `;
};

main();

main();
