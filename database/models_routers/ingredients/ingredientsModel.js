const db = require("../../dbConfig.js");

module.exports = {
  findAllIngredients,
  findById,
  add,
  removeIngredient,
  updateIngredient,
  findByRecipe,
  checkIngredient,
  addQuantity,
  updateQuantity,
  updateRecipe_Ingredients,
  deleteRecipe_Ingredients
};

function findAllIngredients() {
  return db("ingredients");
}

function findById(ingredient_title) {
  return db("ingredients").where({ title: ingredient_title });
}

async function add(ingredient) {
  const [id] = await db("ingredients").insert({ title: ingredient });
  return id;
}

function removeIngredient(id) {
  return db("ingredients")
    .where({ id })
    .del();
}

function updateIngredient(id, changes) {
  return db("ingredients")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}
async function findByRecipe(recipe_id) {
  const ingredients = await db("recipe_ingredients as ri")
    .where({ recipe_id: recipe_id })
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("ri.quantity as quantity", "i.title as ingredient", "ri.id as id");
  return ingredients;
}

async function findByQuantity(quantity_id) {
  const quantity = await db("recipe_ingredients")
    .where({ id: quantity_id })
    .first();
  return quantity;
}

async function checkIngredient(ingredient_title) {
  console.log("checkIngredient title", ingredient_title);
  const result = await db("ingredients")
    .where({ title: ingredient_title })
    .select("id")
    .first();
  if (result) {
    console.log("checkIngredient id", result.id);
    return result.id;
  } else {
    return null;
  }
}

async function addQuantity(quantity, recipe_id, ingredient_title) {
  checkIngredient(ingredient_title)
    .then(ingredient_id => {
      if (!ingredient_id) {
        add(ingredient_title)
          .then(ingredient_id => {
            const id = addRecipe_Ingredients(
              quantity,
              recipe_id,
              ingredient_id
            );
            return id;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        const id = addRecipe_Ingredients(quantity, recipe_id, ingredient_id);
        return id;
      }
    })
    .catch(error => {
      console.log(error);
    });
}

async function addRecipe_Ingredients(quantity, recipe_id, ingredient_id) {
  const ingredient = { quantity, recipe_id, ingredient_id };
  console.log("addRecipeIngredients ingredient", ingredient);
  const [id] = await db("recipe_ingredients").insert(ingredient);
  console.log("addRecipe_ingredients id", id);
  return id;
}

async function updateRecipe_Ingredients(id, quantity) {
  const result = await db("recipe_ingredients")
    .where({ id: id })
    .update(quantity);
  console.log("result updateRecipe_Ingredients", result);
  return result;
}

async function deleteRecipe_Ingredients(recipe_id, ingredient_id) {
  await db("recipe_ingredients")
    .where({ ingredient_id })
    .then(otherRecipes => {
      if (otherRecipes.length === 0) {
        return removeIngredient(ingredient_id);
      } else {
        return db("recipe_ingredients")
          .where({ ingredient_id: ingredient_id, recipe_id: recipe_id })
          .del();
      }
    });
}

async function updateQuantity(
  quantity,
  recipe_id,
  ingredient_title,
  quantity_id
) {
  let ingredient_id = await checkIngredient(ingredient_title);
  console.log("1update quantity ingredient id", ingredient_id);
  if (!ingredient_id) {
    ingredient_id = await add(ingredient_title);
    // quantity table with new ingredient_id
    console.log("if statement quantity ingredient id", ingredient_id);
  }
  const result = await updateRecipe_Ingredients(quantity_id, {
    quantity,
    recipe_id,
    ingredient_id
  });
  console.log("2update result", result);
  return result;
}
