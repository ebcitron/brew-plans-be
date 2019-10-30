const db = require("../../dbConfig.js");

module.exports = {
  findAllInstructions,
  findInstructionsByRecipe,
  addInstruction,
  handleArrayInstructions
};

function findAllInstructions() {
  return db("instructions");
}

function findInstructionsByRecipe(recipe_id) {
  return db("instructions").where({ recipe_id: recipe_id });
}

async function addInstruction(instruction) {
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

async function handleArrayInstructions(operation, instructionsArray) {
  const results = [];
  for (let i = 0; i < instructionsArray.length; i++) {
    const instruction = instructionsArray[i];
    switch (operation) {
      case "add":
        console.log("LOOK AT THIS ONE", instruction)
        const addResult = await addInstruction(instruction);
        results.push(addResult);
        break;
      case "update":
        const updateResult = await updateInstruction(instruction);
        results.push(updateResult);
        break;
      case "delete":
        const deleteResult = await deleteInstruction(instruction);
        results.push(deleteResult);
        break;
    }
  }
  console.log("handle results", results)
  return results;
}
