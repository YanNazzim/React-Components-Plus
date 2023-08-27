import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2 className="home">Home Page</h2>
      <h2 className="time">Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Home;
