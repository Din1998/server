const express = require('express');
const FeatureBlog = require('../dbModel/model');
const featureRouter = express.Router();


//Get feature blogs
featureRouter.get('/',(req,res) => {
  FeatureBlog.find((err,docs) => {
    if(err) console.log(err)
    res.json(docs)
  })
})

//Get by id
featureRouter.get('/:id',(req,res) => {
  
  FeatureBlog.findById(req.params.id)
  .then(doc => {
    if (!doc) {return res.status(404).end()}
    return res.status(200).json(doc);
  })
  .catch(err => next(err))
})

//Post feature blogs
featureRouter.post('/post',(req,res) => {
 const featureBlog = new FeatureBlog(req.body);
 featureBlog.save ((err,doc) => {
  if(err) console.log(err)
  res.json(doc)
 })
})

//Update feature blogs
featureRouter.put('/:id',(req,res) => {
  FeatureBlog.findByIdAndUpdate({
      _id: req.params.id
  },req.body,{
      new : true
  },(err,doc) => {
      if(err) console.log(err)
      res.json(doc)
  })
})

//Detele feature blogs
featureRouter.delete('/:id',(req,res) => {
  FeatureBlog.findByIdAndDelete(req.params.id,(err,doc) =>{
      if(err) console.log(err)
      res.json(doc)
  })
})

module.exports = featureRouter;

