const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getGoals, postInpirationalPerson, getCelebrating} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortunes", getFortunes);

app.get("/api/goals/:goalIdea", getGoals);

app.get("/api/inspirationalPerson/:inspirationalPerson", postInpirationalPerson)

app.get("/api/getCelebration", getCelebrating)

app.listen(4000, () => console.log("Server running on 4000"));
