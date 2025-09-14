import React from "react";

const myStyle = {
    marginTop: '80px',
    textAlign: 'left',
    margin: '20px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
};

function About() {
    return (
        <div style={myStyle}>
            <h1>About QC Simulation</h1>
            <p>
                We are a passionate team of six Computer Engineering students from Vidyavardhini’s College of Engineering, united by a common vision — to bridge the educational divide through innovation and technology.

                Our project, developed under the Smart India Hackathon (SIH), focuses on creating a gamified education platform designed especially for students in rural areas of Odisha. Education should not only inform, but also inspire. By blending learning with fun, games, and rewards, we aim to make education more engaging, accessible, and effective for young learners.

                But our vision goes beyond Odisha. We aspire to expand this platform across all of India, empowering students from every corner of the country with equal access to quality, interactive, and enjoyable learning experiences.
            </p>
            <h1>Our Mission</h1>
            <p>
                To transform learning into an interactive adventure where students earn rewards, unlock achievements, and grow with curiosity.

                To make education accessible for rural communities, breaking barriers of location, language, and limited resources.

                To create a national platform that adapts to the needs of students from diverse regions of India.
            </p>
            <h1>Why Gamified Learning?</h1>
            <p>
                Studies show that when learning is fun and interactive, students stay motivated longer and retain knowledge better. Our platform integrates:
                🎮 Games & Quizzes – turning concepts into challenges.
                🏆 Coins & Rewards – motivating students with tangible benefits.
                🌍 Simulations & Activities – connecting learning to real-life applications.

                We believe that every child, no matter where they live, deserves the chance to learn with joy and confidence.
            </p>
        </div>
    );
}

export default About;
