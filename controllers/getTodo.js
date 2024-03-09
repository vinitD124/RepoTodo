const Todo = require("../models/Todo")

exports.getTodo = async (req,res) =>{
    try {

        // featch all todos item for dbs
        const todos = await Todo.find({})

        res.status(200).json({  
            success:true,
            data:todos,
            message:"Entire todo data is here"

        })



        
    } catch (err) {
            console.log(err)
           
            res.status(500).json({
                success:false,
                error:err.message,
                message:'Server error '
            })

    }
}


exports.getTodoById = async(req,res) =>{
    try {
        
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})
        
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data found worth given id",

            })
        }
        else{
             res.status(200).json({
                success:true,
                data:todo,
                message:`Todo ${id} data succesfully fetched`
             })
        }

    } catch (err) {

        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server error '
        })

    }
}
