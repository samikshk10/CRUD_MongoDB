const { ObjectId } = require('mongodb');
const { getDB } = require('../config/dbConnect');


async function getStudent(req,res) {
  const db = getDB();
  const result= await db.collection('student').find().toArray();
  if(result.length==0)
  {
    return res.status(200).json({
      message:"student record empty"
    })
  }
  return res.status(200).json(result);
}

async function createStudent(req,res)
{
  try{

    const {name,address, age}= req.body;
    const db = getDB();
     const result= db.collection('student').insertOne({name,address,age});
     return res.status(200).json({
        message:"student inserted successfully"
     })
  }
  catch(error)
  {
    console.log(error);
  }
}


async function deleteStudent(req,res)
{
  try{

    const{id}= req.params;
    console.log("this is id"+id);

    const db = getDB();
     const result= await db.collection('student').deleteOne({_id:new ObjectId(id)});

     if (result.deletedCount === 1) {
      return res.status(400).json({
        message:"student deleted successfully"
      })
    
    } else {
      return res.status(400).json({
        message:"student not found"
      })
    }
   
  }
  catch(error)
  {
    console.log(error);
  }
}


async function editStudent(req,res)
{
  try{

    const{id}= req.params;
    const{name,address,age}= req.body;
    console.log("this is id"+id);

    const db = getDB();
     const result= await db.collection('student').updateOne({_id:new ObjectId(id)},{$set:{name,address,age}});

     if (result.deletedCount === 1) {
      return res.status(400).json({
        message:"student deleted successfully"
      })
    
    } else {
      return res.status(400).json({
        message:"student not found"
      })
    }
   
  }
  catch(error)
  {
    console.log(error);
  }
}

async function updateStudent(req,res)
{
  try{

    const{name,address,age,_id}= req.body;

    const db = getDB();
     const result= await db.collection('student').updateOne({_id:new ObjectId(_id)},{$set:{name,address,age}});

     if (result.modifiedCount === 1) {
      return res.status(400).json({
        message:"student updated successfully"
      })
    
    } 
    else {
      return res.status(400).json({
        message:"student not found"
      })
    }
   
  }
  catch(error)
  {
    console.log(error);
  }
}

module.exports = {
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent
};