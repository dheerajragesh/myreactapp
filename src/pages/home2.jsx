import React from 'react';
import Greeting from '../components/Greeting'; 

const Home2 = () => {
  // 1. Get the current hour (0 to 23)
  const hour = new Date().getHours();
  let currentTimeOfDay;

  // 2. Logic to determine the string
  if (hour < 12) {
    currentTimeOfDay = "Morning";
  } else if (hour < 18) {
    currentTimeOfDay = "Afternoon";
  } else {
    currentTimeOfDay = "Evening";
  }

  return (
    <div className="page-container">
      {/* 3. Pass the dynamic variable instead of a hardcoded string */}
      <Greeting name="Dheeraj" timeOfDay={currentTimeOfDay} />
    </div>
  );
};

export default Home2;