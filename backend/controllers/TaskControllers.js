const TaskModel = require("../models/TaskModel");
module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
  //res.send("Hiii..");
};

module.exports.saveTasks = (req, res) => {
  const { task } = req.body;
  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.updateTasks = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  TaskModel.findByIdAndUpdate(id,{task})
  .then(()=>res.send("Updated Succesfully."))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.deleteTasks = (req, res) => {
    const { id } = req.params;
    
    TaskModel.findByIdAndDelete(id)
    .then(()=>res.send("Deleted Succesfully."))
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong" });
      });
  };
