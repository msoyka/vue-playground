const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Endpoints
router.get("/", async (req, res) => {
  const endpoints = await loadEndpointsCollection();
  res.send(await endpoints.find({}).toArray());
});

router.post("/", async (req, res) => {
  const endpoints = await loadEndpointsCollection();
  await endpoints.insertOne({
    type: req.body.type,
    endpoint: req.body.endpoint,
    description: req.body.description,
    response: req.body.response,
    data: req.body.data,
    createdAt: new Date()
  });
  res.status(201).send();
});

router.delete("/:id", async (req, res) => {
  const endpoints = await loadEndpointsCollection();
  await endpoints.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(201).send();
});

async function loadEndpointsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://admin123:admin123@ds117431.mlab.com:17431/vue_express",
    {
      useNewUrlParser: true
    }
  );
  return client.db("vue_express").collection("endpoints");
}

module.exports = router;
