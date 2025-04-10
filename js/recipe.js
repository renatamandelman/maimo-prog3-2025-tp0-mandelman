const main = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  console.log(id);
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await response.json();

  const imgRecipe = document.querySelector(".hero");
  const information = document.querySelector(".information");
  const extraInfo = document.querySelector(".extraInfo");
  imgRecipe.style.backgroundImage = `url('${recipe.image}')`;
  imgRecipe.innerHTML = `
    <a class="cornerIcon" href="/index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg></a>
    <h1>${recipe.name}</h1>
 
    `;
  extraInfo.innerHTML = `
  <div class="infoCard">
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>    
  <p><strong>Time</strong><br>${
    recipe.prepTimeMinutes + recipe.cookTimeMinutes
  } min</p>
    </div>
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
      <p><strong>Portion</strong><br>${recipe.servings} persons</p>
    </div>
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
      <p><strong>Dificulty</strong><br>${recipe.difficulty}</p>
    </div>
  </div>`;
  information.innerHTML = `
       <div class="ingredients">
                <h2>Ingredients</h2>
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
