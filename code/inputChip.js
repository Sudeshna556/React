import React, { useState } from "react";
import './styles.css'
function ChipsInput() {



  const [inputText, setInputText] = useState(""); //1.to store the input value
  const [chips, setChips] = useState([]); //2. to store the array of chips
  // const [idToRemove, setIdToRemove] = useState(0);

  //4. add a handler fun to handle  the key press when user press enter
  const handleKeyPress = (event) => {
    //check if e.key === enter value and ensure 
    if (event.key === "Enter" && inputText.trim() !== "") {
      // 6. create a new chip (Define the Chip Structur)
      const newChip = {
        //pass id and label instead of storing the strings directly
        //Why use an object? Because it gives you flexibility later—for example, removing chips by ID, adding metadata, styling, etc.
        id: Date.now(),
        label: inputText.trim()
      }
      //React state should be updated immutably.you use the spread operator to add the new chip,This creates a new array with all previous chips plus the new one.
      setChips([...chips, newChip]);
      setInputText("") //After adding the chip, reset the input field

    }
  }
  //To delete a chip from your array of chips, Sudeshna, you’ll want to filter it out using its unique id. Since each chip is stored as an object like { id, label }, this gives you precise control over which one to remove—even if multiple chips have the same label.


  const handleDeleteChip = (idToRemove) => {
    setChips(chips.filter(chip => chip.id !== idToRemove))

  }


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>

      <input
        type="text"
        value={inputText}
        placeholder="Type a chip and press Enter or Tab"
        //3.onChange handler handle user input to update the input value with every enter key press
        onChange={(e) => setInputText(e.target.value)}
        //5. onKeyDown handler to detect when the user press enter 
        onKeyDown={(e) => handleKeyPress(e)}
        style={{ padding: "8px", width: "200px" }}
      />

      <div>
        {chips.map((chip) => (
          <div
            key={chip.id}
            style={{
              background: "gray",
              margin: "10px",
              padding: "5px",
              
              borderRadius: "12px",
              display: "inline-block"
            }}
          >
            <span> {chip.label} </span>
            <button

              onClick={() => handleDeleteChip(chip.id)}
              aria-label={`Remove ${chip.label}`}

              style={{ background: "transparent", marginLeft: "8px", color: "red" }}
            > X</button>
          </div>
        ))}

      </div>
    </div>
  );
}


export default ChipsInput;

//NOTE : 
// - if onkeypress is used it will not work, its an depricated (no longer supported)
// - if onkeydown is used it will work


1.

// 2. check if the enter key is not pressed or not : 
// - when enter is pressed then add chips (so we are creating a fun and passing event Object as Parameter,
// this event parameter will help us to access the input value and control behavior like trimming )
// - add chips : 
// HOW TO ADD CHIPs
// This gives you three responsibilities:
// - State management (store chips)
// - Event handling (detect Enter)
// - Rendering (display chips)

        //  when enter is pressed : - Enter key → trigger chip creation, 
        //     Chip → store and render
        //   - create a new chip object with a unique id and and a label (input)
        //   - add it to the chips array : use spread operator
        //   - clear the input field

// 🔑 id: Date.now()
// - Purpose: Generates a unique identifier based on the current timestamp in milliseconds.
// - Why it works: Since Date.now() returns a number like 1694416498123, it's extremely unlikely two chips will have the same ID unless created in the exact same millisecond.
// - Use case: This ID is perfect for React’s key prop and for precise chip removal later.
// If you ever need even stronger uniqueness (e.g., across sessions), you could use crypto.randomUUID() or a nanoid—but for most UI cases, Date.now() is lightweight and reliable.

// 🏷️ label: inputText.trim()
// - Purpose: Stores the visible text of the chip.
// - Why .trim() matters: It removes accidental leading/trailing spaces so " React " becomes "React", preventing messy duplicates or layout issues.
// - Use case: This is what gets rendered inside the chip and used for display, search, or filtering.


//To delete a chip from your array of chips, Sudeshna, you’ll want to filter it out using its unique id. Since each chip is stored 
// as an object like { id, label }, this gives you precise control over which one to remove—even if multiple chips have the same label.
    // ✅ Step-by-Step Logic
    // - Create a handler function that takes the chip’s id as input.
    // - Use .filter() to return a new array excluding the chip with that id.
    // - Update the state with the new array.
 setChips(chips.filter(chip => chip.id !== idToRemove));
// - chips.filter(...): Creates a new array by keeping only the chips whose id does not match idToRemove.
// - setChips(...): Updates the state with this new array—React re-renders the component with the updated chip list.
// - Immutability preserved: You're not mutating the original array, just creating a new one.






// - event.key === "Enter" detects the key press.
// - event.preventDefault() stops default behavior like form submission.
// - trimmed ensures no empty or whitespace-only chips.
// - !chips.includes(trimmed) avoids duplicates.
// - setChips([...chips, trimmed]) adds the new chip.
// - setInputText("") resets the input field.
// Want to extend this with comma/tab support or max chip count? I can help you modularize that logic next.
