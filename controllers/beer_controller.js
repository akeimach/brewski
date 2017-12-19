const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to get a user's beers
router.get("/api/beers/:id", function(req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    },
    include: [db., db.Weather]
  }).then(function(data) {
    res.json(data);
  })
})

// // GET route to get all migrains for a specific user
router.get("/api/migraines", function(req, res) {
  db.Migraine.findAll({
    // display all migraines for id
    where: {
      UserId: req.user.id
    },
    include: [db.Treatment, db.Weather],
    order: [
      ["date", "DESC"]
    ]
  }).then(function(dbMigraine) {
    res.json(dbMigraine);
  });
});


// POST route to create new migraines when user clicks submit
router.post("/api/migraines", function(req, res) {
  db.Migraine.create({
    UserId: req.user.id,
    intensity: req.body.intensity,
    location: req.body.location,
    date: req.body.date,
    trigger: req.body.trigger
  }).then(function(dbMigraine) {
    db.Weather.create({
      MigraineId: dbMigraine.id,
      temp: req.body.currentWeather.temp,
      humidity: req.body.currentWeather.humidity,
      precip: req.body.currentWeather.precip
    });  

    // to ADD chronic treatment
    db.Treatment.create({
      treatment_name: req.body.chronicTreatment.treatment_name,
      acute: false,
      dose: req.body.chronicTreatment.dose,
      dose_unit: req.body.chronicTreatment.dose_unit   
    }).then(function(dbChronicTreatment) {
      // to ADD keys to MigraineTreatment for chronic
      db.MigraineTreatment.create({
        TreatmentId: dbChronicTreatment.id,
        MigraineId: dbMigraine.id
      });
    });
    // to ADD acute treatment
    db.Treatment.create({
      treatment_name: req.body.acuteTreatment.treatment_name,
      acute: true,
      dose: req.body.acuteTreatment.dose,
      dose_unit: req.body.acuteTreatment.dose_unit  
    }).then(function(dbAcuteTreatment) {
      // to ADD keys to MigraineTreatment for acute
      db.MigraineTreatment.create({
        TreatmentId: dbAcuteTreatment.id,
        MigraineId: dbMigraine.id
      });
    });

    res.json(dbMigraine);
  });
});   

// PUT route to update previous migraines
router.put("/api/migraines/:id", function(req, res) {
  db.Migraine.update(req.body,
    {    
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.Treatment
        }
      ] 
  }).then(function(dbMigraine) {
    res.json(dbMigraine);
  });  
});  
  

// // to delete previous migraines
router.delete("/api/migraines/:id", function(req, res) {
  db.Migraine.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbMigraine) {
    res.json(dbMigraine);
  })
});

module.exports = router;