// add middlewares here related to actions
const Action = require("./actions-model");
const checkActionId = async (req, res, next) => {
    const id = req.params.id
    const actionId = await Action.get(id)
    if(!actionId){
        res.status(404).json({
            message: "Action not found"
        })
    } else {
        req.actionId = actionId
        next()
    }
}

const checkAction = async (req, res, next) => {
    const { description, notes } = req.body
    if(!description){
        res.status(400).json({
            message: "Missing required description field"
        })
    } else if(!notes){
        res.status(400).json({
            message: "Missing required notes field"
        })
    } else {
        next()
    }
}
// ACTION MIDDLEWARE ENDS HERE
module.exports = {
    checkActionId,
    checkAction
}
