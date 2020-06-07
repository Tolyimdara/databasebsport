module.exports = app => {
    const owners = require("../controllers/owner.controller.js");
    var router = require("express").Router();
    const uploads = require("../middleware/upload");
    // Create a new Tutorial
    router.post("/",uploads.single("ImageOwner"), owners.create);
    // Retrieve all Tutorials
    router.get("/", owners.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", owners.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", owners.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", owners.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", owners.delete);
  
    // // Create a new Tutorial
    // router.delete("/", owners.deleteAll);
  
    app.use('/api/owners', router);
  };