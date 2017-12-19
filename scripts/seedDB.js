// const mongoose = require("mongoose");
// const db = require("../models");
// mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/brewski",
//   {
//     useMongoClient: true
//   }
// );

// const brewSeed = [
//   {
//     name: "test1",
//     date: new Date(Date.now())
//   }, {
//     name: "test2",
//     date: new Date(Date.now())
//   }
// ];

// db.Brewski
//   .remove({})
//   .then(() => db.Brewski.collection.insertMany(brewSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });