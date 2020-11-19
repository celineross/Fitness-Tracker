const db = require("../models");
const mongoose = require("mongoose");

//displays all workouts
module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });

    //creates new workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });

    //update exisiting workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id, { $push: { exercises: req.body } },
            { new: true, runValidators: true }).then(workout => {
                res.json(workout);
            }).catch(err => {
                res.json(err);
            });
    });

    //find a workout in a certain range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });
}