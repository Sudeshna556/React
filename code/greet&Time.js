// how to get the current time in javascript

function displayCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros for single-digit numbers
    // Note: uses a ternary operator to format a single-digit hour value with a leading zero.Expression follows : condition ? value_if_true : value_if_false. 

    // Conditional Logic: The expression hours < 10 checks if the value of hours is less than 10.
    // If True (hours < 10): '0' + hours: This part is executed. It concatenates the string '0' with the numerical value of hours.
    // when you use the + operator with a string and a number, the number is implicitly converted to a string, resulting in a string like '05' for hours = 5.
    // If False (hours >= 10): ':hours' - This part is executed. Since hours is already a two-digit number (or more), no leading zero is needed, and the original numerical value of 
    // hours is assigned back to the hours variable.

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  console.log(currentTime);

  // If you want to display it on a web page, you can do this:
  // document.getElementById('timeDisplay').innerText = currentTime;
}

// Call the function once to display the initial time
displayCurrentTime();

// To update the time every second, use setInterval
setInterval(displayCurrentTime, 1000);
// --------------------------------------------------------------------------------------------------------------------------


// Q: Now the actual question

import React, { useState, useEffect } from "react";
import "./styles.css";



function greet(hour) {
  if (hour >= 5 && hour < 12) {
    return "good Morning! ☀️";
  }else if(hour >= 12 && hour < 17){
    return "good Afternoon! ⛅";
  } else if (hour >= 17 && hour < 21) {
    return "good Evening! 🌆";
  } else {
    return "good Night! 🌙 ✨"
  }
}

export default function Greeting() {

  function displayCurrentTime() {
    const date = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //add zeros for single digit numbers
    // condition ? value_if_true : value_if_false
    // if hours >=10 then show ': hours' show
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


  }

  
  
  

  return (
    <div 
      className="modal-content"       
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#333",
      }}
    >
     
      <h2>{greet}</h2>
      <p>{displayCurrentTime}</p>

    </div>
  );
}

/**
 * this code gives me error :  Functions are not valid as a React child occurs because you are trying to render functions directly in your JSX (<h2>{greet}</h2> and <p>{displayCurrentTime}</p>) instead of calling them. 
 * your component needs state and an effect hook to update the time in real-time.
 */

// ----------------------------------------------------------------------------------------------

// setInterval() is a JavaScript method used to repeatedly execute a specified function or code snippet at fixed time intervals. 
// It is a part of the Window object in web browsers and is also available in environments like Node.js.

import React, { useState, useEffect } from "react";
import "./styles.css";



function greet(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good Morning! ☀️";
  }else if(hour >= 12 && hour < 17){
    return "Good Afternoon! ⛅";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening! 🌆";
  } else {
    return "Good Night! 🌙 ✨"
  }
}

export default function Greeting() {
  //1. Use a state variable to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // 2. Use the useEffect hook to set up a timer

  useEffect(() => {
    // This creates an interval that updates the time every second
    //It schedules a function (setCurrentTime) to be called every 1,000 milliseconds, which in turn updates the component's state and tells React to re-render with the new time.
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // This is the cleanup function that runs when the component unmounts
    // It prevents memory leaks by stopping the timer
    return () => {
      clearInterval(timer);
    }
  }, []);// The empty dependency array ensures this effect runs only once

  const greeting = greet(currentTime.getHours());
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div 
      className="modal-content"       
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#333",
      }}
    >
     
      <h2 data-testid = 'greeting'>{greeting}</h2>
      <p data-testid = 'time' className = 'updated-time'>{formattedTime}</p>

    </div>
  );
}
// p{
//     font-size: 2.5rem;
//     margin-bottom: 20px;
// }

// h1 {
//     font-size : 2.5rem;
//     margin-bottom: 20px;
// }

// body{
//     margin:0;
//     font-family : "Segoe UI", sans-serif;
//     background-color: #111;
//     color: #f5f5f5;
//     display:flex;
//     align-items: center;
//     justify-content: center;
//     height:100vh;
// }
