const db = require("../models");
const Owner = db.owners;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const multer = require('multer')
const fs = require("fs");

// const storage = multer.diskStorage({
//   destination: function(req, file,cb){
//     cb(null, './uploads/');

//   },
//   filename: function(req,file,cb){
//     cb(null,new Data().toISOString() +file.originalname);

//   }
// })
// const fileFilter = (req,file,cb)=>{
//   if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/png'){
//       cb(null,true)
//   }else{
//     cb(null,false)
//   }
// }
// const uploads = multer({
//   storage: storage, 
//   limits:{
//   fileSize:1024 * 1024 * 5
// },
//   fileFilter:fileFilter
// });

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const today = new Date()
  const owner = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    pitch_name: req.body.pitch_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    address: req.body.address,
    ImageOwner:fs.readFileSync( __basedir+
        "../uploads/"+req.file.filename
    ),
    created: today
  };  
  Owner.findAll({where:
    {email:req.body.email}})
  .then(data => {
    if(data.length!=0){
      return res.json({
        message:"Email Already exists"
      })
    }else{
      bcrypt.hash(req.body.password, 10, (err,hash)=>{
        owner.password=hash
        fs.writeFileSync( __basedir+
         "../uploads/"+owner.ImageOwner
        )
        Owner.create(owner)
        .then(data => {
          res.send(data)
        })
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  });

};

// // Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Owner.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
//
// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };