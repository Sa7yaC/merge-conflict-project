import React, { useState } from "react";
import "../styles/Hero.css";
import 'primeicons/primeicons.css';

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";
  if (hour < 17) return "Good Afternoon 🌤️";
  if (hour < 21) return "Good Evening 🌇";
  return "Good Night 🌙";
};

function Hero(){
    const [selectedMood, setSelectedMood] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
        "How was your day overall?",
        "How was your energy today?",
        "How stressed did you feel today?"
    ];

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    const handleSubmit = () => {
        if (selectedMood) {
            const newAnswers = [...answers, { question: currentQuestion, mood: selectedMood }];
            setAnswers(newAnswers);
            console.log("Submitted answers:", newAnswers);
            setSelectedMood(null);
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                console.log("All questions completed");
            }
        }
    };

    return (
        <>
        <div className="greetings">
            <h2>{getGreeting()}, <span className="name">Satya</span></h2>
        </div>
        {currentQuestion < questions.length ? (
            <div className="question">
                <h3>{questions[currentQuestion]}</h3>
                <div className="ratings">
                    <button className={`rating1 ${selectedMood === 'sad' ? 'selected' : ''}`} onClick={() => handleMoodSelect('sad')}>😔</button>
                    <button className={`rating2 ${selectedMood === 'confused' ? 'selected' : ''}`} onClick={() => handleMoodSelect('confused')}>😕</button>
                    <button className={`rating3 ${selectedMood === 'neutral' ? 'selected' : ''}`} onClick={() => handleMoodSelect('neutral')}>😐</button>
                    <button className={`rating4 ${selectedMood === 'happy' ? 'selected' : ''}`} onClick={() => handleMoodSelect('happy')}>🙂</button>
                    <button className={`rating5 ${selectedMood === 'very-happy' ? 'selected' : ''}`} onClick={() => handleMoodSelect('very-happy')}>😄</button>
                    <button className="submitBtn" onClick={handleSubmit} disabled={!selectedMood}><i className="pi pi-arrow-right"></i></button>
                </div>
            </div>
        ) : (
            <div className="completed">
                <h3>Thank you for sharing your feelings!</h3>
            </div>
        )}
        </>
    );
}

export default Hero;