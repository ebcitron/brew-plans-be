const db = require("../../dbConfig.js");

module.exports = {
  findAllInstructions,
  findByRecipe,
  addInstruction,
  handleArrayInstructions
};

function findAllInstructions() {
  return db("instructions");
}

function findByRecipe(recipe_id) {
  return db("instructions").where({ recipe_id: recipe_id }).select("id", "order", "text", "duration");
}

async function addInstruction(recipeResult, order, text) {
  const instruction = {recipe_id: recipeResult, order, text}
  console.log("in ADD", instruction )
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

async function handleArrayInstructions(operation, recipeResult, instructionsArray) {
  const results = [];
  for (let i = 0; i < instructionsArray.length; i++) {
    let instruction = instructionsArray[i];
    // console.log("handleArray instructions", instruction)
    switch (operation) {
      case "add":
        const addResult = await addInstruction(recipeResult, instruction.order, instruction.text);
        // console.log("addResult", addResult)
        results.push(addResult);
        break;
      case "update":
        let id = instruction.id
        delete instruction.id
        const updateResult = await updateInstruction(id, instruction);
        results.push(updateResult);
        break;
      case "delete":
        const deleteResult = await deleteInstruction(instruction);
        results.push(deleteResult);
        break;
    }
  }
  // console.log("handle instructions results", results)
  return results;
}
