//# NOTE:   why we set useState hook as false in some cases and true in some cases?
//          1.  const [value, setValue] = useState(false) : false is explicit and you’re declaring that the feature is off, hidden, or inactive by default.

//          2. we’re modeling a boolean flag—something that toggles between true and false. we’re using the useState hook to manage this boolean state.

//          3. we’re using the useState hook to manage this boolean state.

//          4. why cant use true or null ? because null or undefined can introduce ambiguity, especially in conditional rendering.- true might cause premature rendering or logic  execution before the user triggers anything.

import React, { useState } from "react";
import "./styles.css";

function ReadMoreToggle() {

  const [isExpanded, setIsExpanded] = useState(false) // bydefault button hidden
  
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

  const toggleText = () => {
   
     setIsExpanded((prev) => !prev);
    
  }

  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>
      <p className="readmore-text" data-testid="readmore-text">
        {isExpanded ? text : text.slice(0, 100) + "..."} 
      </p>
      <button
        className="readmore-button"
        data-testid="readmore-button"
        // value={}
        onClick = {toggleText}
      >
        {isExpanded?  "Read Less":"Read More"}
      </button> 
    </div>
  );
}

export default ReadMoreToggle;






//? EXPLAINATION:
//*  Why setIsExpanded(prev => !prev) Works So Well , (prev is for preview)
// - Navigates the current value: !prev flips true to false and vice versa. like true to false and vice versa.
// - setIsExpanded(prev => !prev); //initial value of isExpanded is false,so if, `prev = false` then obviously `!prev = true ` 
// - in the next click when  prev = true then it gonna be flipped to !prev = false.
// - This pattern is perfect for toggles, modals, dropdowns, and even feature flags

//* {isExpanded ? text : text.slice(0, 100) + "..."} 
// - if isExpanded is true then it will render the full text.
// - If , it shows the first 100 characters followed by .
// - This is perfect for "Read More / Read Less" UX patterns—especially when you're trying to keep your UI clean and scannable.


