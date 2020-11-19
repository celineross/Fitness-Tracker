const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define new schema and properties
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                default: 0
            },
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ]
},
{
    toJSON: { virtuals: true }
});
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return exercise.duration + total;
    }, 0);
})

// custom method to update total time

//assign model to a variable and export it
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;