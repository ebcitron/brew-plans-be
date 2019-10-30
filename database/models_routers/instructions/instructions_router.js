const router = require("express").Router()
const Instructions = require("./instructions_model")

router.get("/all", async (req, res) => {
    try{
        const result = await Instructions.findAllInstructions()
        // console.log(result)
        res.status(200).json({message: result})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to get instructions"})
    }
})

router.post("/newInstructions", async (req, res)=> {
    const instructionsArray = req.body
    console.log("array", instructionsArray)
    try {
        const result = await Instructions.handleArrayInstructions("add", instructionsArray)
    console.log("result", result)
        if(result) {
            res.status(201).json({message: "Success adding instructions"})
        } else {
            res.status(404).json({message: "Bad request"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Error adding instructions"})
    }
})

module.exports=router;