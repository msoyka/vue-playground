const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Pages
router.get("/", async (req, res) => {
  const pages = await loadPagesCollection();
  res.send(await pages.find({}).toArray());
});

router.post("/", async (req, res) => {
  const pagesCollection = await loadPagesCollection();
  const newPage = {
    title: req.body.title,
    createdAt: new Date()
  };
  const createdPage = await pagesCollection.insertOne(newPage);
  const createdPageData = createdPage.ops[0];
  res.json(createdPageData);
});

router.delete("/:id", async (req, res) => {
  const pages = await loadPagesCollection();
  await pages.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(201).send();
});

async function loadPagesCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://admin123:admin123@ds117431.mlab.com:17431/vue_express",
    {
      useNewUrlParser: true
    }
  );
  return client.db("vue_express").collection("pages");
}

module.exports = router;
