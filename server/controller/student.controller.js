const student = require('../models/student.model');

const getStudents = async (req, res) => {
  try {
    const result = await student.find();
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const postStudent = async (req, res) => {
  try {
    const result = await student.create(req.body);
    res.status(201);
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await student.findOne({_id: id});
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

// const deleteTest = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await student.deleteOne({_id: id});
//     res.status(204);
//     res.send('ok');
//   } catch (e) {
//     res.status(500);
//     res.send(e);
//   }
// };

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await student.updateOne({_id: id}, req.body);
    const result = await student.findOne({_id: id});
    res.send(result);
    res.status(200);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

module.exports = { postStudent, getStudents, getStudent, updateStudent };
