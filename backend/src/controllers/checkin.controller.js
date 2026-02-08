import express from "express";
import cors from "cors";
import { asyncHandler } from "../utils/asyncHandler.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

let moodRatings = [];
let energyRatings = [];
let stressRatings = [];

const dailyCheckIn = asyncHandler(async(req,res)=>{
    if(req.body.currentQuestion==0){
        if(req.body.selectedMood=="sad"){moodRatings.push(1);}
        if(req.body.selectedMood=="confused"){moodRatings.push(2);}
        if(req.body.selectedMood=="neutral"){moodRatings.push(3);}
        if(req.body.selectedMood=="happy"){moodRatings.push(4);}
        if(req.body.selectedMood=="very-happy"){moodRatings.push(5);}
        console.log(moodRatings[0]);
    }
    if(req.body.currentQuestion==1){
        if(req.body.selectedMood=="sad"){energyRatings.push(1);}
        if(req.body.selectedMood=="confused"){energyRatings.push(2);}
        if(req.body.selectedMood=="neutral"){energyRatings.push(3);}
        if(req.body.selectedMood=="happy"){energyRatings.push(4);}
        if(req.body.selectedMood=="very-happy"){energyRatings.push(5);}
        console.log(energyRatings[0]);
    }
    if(req.body.currentQuestion==2){
        if(req.body.selectedMood=="sad"){stressRatings.push(1);}
        if(req.body.selectedMood=="confused"){stressRatings.push(2);}
        if(req.body.selectedMood=="neutral"){stressRatings.push(3);}
        if(req.body.selectedMood=="happy"){stressRatings.push(4);}
        if(req.body.selectedMood=="very-happy"){stressRatings.push(5);}
        console.log(stressRatings[0]);
    }
    res.json({
        success: true,
        message: "Check-in recorded successfully",
        mood: req.body.selectedMood
    });
})

export default dailyCheckIn;