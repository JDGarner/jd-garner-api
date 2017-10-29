const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const BOOKS = require("./books");
const WORK = require("./work");
const MOVIES = require("./movies");

async function insertDocuments() {
  try {
    const db = await MongoClient.connect("mongodb://localhost:27017/jdgarner");

    await db.collection("books").drop();
    await db.collection("books").insert(BOOKS);
    await db.collection("work").drop();
    await db.collection("work").insert(WORK);
    await db.collection("movies").drop();
    await db.collection("movies").insert(MOVIES);

    db.close();
  } catch (err) {
    console.log(err);
  }
}

insertDocuments();
