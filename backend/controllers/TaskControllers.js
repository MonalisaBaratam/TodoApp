const TaskModel=require("../models/TaskModel")

module.exports.getTasks=async (req,res)=>{
    console.log("Came to get tasks");
    const tasks=await TaskModel.find()
    console.log("executed find all");
    res.send(tasks)
};

module.exports.saveTask= (req,res)=>{
    const {task} =req.body

    TaskModel.create({task})
    .then((data)=>{
        console.log("Saved Successfully");
        res.status(201).send(data)
    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    })
};

module.exports.updateTask= (req,res)=>{
    const id=req.params.id
    const {task} =req.body

    TaskModel.findByIdAndUpdate(id,{task})
    .then(()=>res.send("Updated Successfully"))
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    })
};

module.exports.deleteTask=async (req,res)=>{
    const id=req.params.id

    await TaskModel.findByIdAndDelete(id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    })
};