const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res)=>{

    try {
        
        
    const {id} = req.params
    

    const delTodo = await Todo.findByIdAndDelete({
        _id:id
    })

    res.status(200).json({
        success:true,
        data:delTodo,
        message:"deleted sucessfully"
    })   

    } catch (err) {
        
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }


}