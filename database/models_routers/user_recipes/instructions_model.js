const db = require("../../dbConfig.js");

module.exports = {
  findAllInstructions,
  findInstructionsByRecipe,
  addInstruction
};

function findAllInstructions() {
  return db("instructions");
}

function findInstructionsByRecipe(recipe_id) {
  return db("instructions").where({ recipe_id: recipe_id });
}

async function addInstruction(order, text, recipe_id) {
  const instruction = { order: order, text: text, recipe_id: recipe_id };
  const [id] = await db("instructions").insert(instruction);
  return id;
}

async function updateInstruction(id, changes) {
  const result = await db("instructions")
    .where({ id })
    .update(changes);
  return result;
}

async function deleteInstruction(id) {
  return db("instructions")
    .where({ id })
    .del();
}

async function handleAddArrayInstructions(instructionsArray){

}
