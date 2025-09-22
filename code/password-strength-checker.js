
import React, { useState } from 'react';
import './styles.css'

// ✅ Export this so it can be tested 
export const checkPasswordStrength = (password) => {

  const passwordChecks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),//checks for special character
  ];
  //checks for true or false and length
  const passChecks = passwordChecks.filter(Boolean).length; 

  if (passChecks === 1) return 'Level 1';
  if (passChecks >= 2 && passChecks <= 3) return 'Level 2';
  if (passChecks >= 4 && passChecks <= 5) return 'Level 3';
  return 'Weak Password';

};



const PasswordStrength = () => {

  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const clickHandler = () => {
    setStrength(checkPasswordStrength(password));
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <div className = "">
        <input className=""
          type = "password"
          placeholder="Enter Password"
          onChange = {(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className = " flex justify-end" >
        <button className= "p-2 ml-auto block"
          onClick={clickHandler}>Check Strength</button>
        {strength && <p>Strength : <strong>{strength}</strong></p>}
      </div>
    </div>
  );
};

export default PasswordStrength;






//? NOTE :
//? onClick VS onChange :
//           =>onClick : Use onclick when you want to trigger an action immediately after a user clicks an element.
// Such as Clicking a button to submit a form, Toggling a checkbox or radio button, Clicking a div, image, or link to trigger a modal or animation.

//            =>onChange : Use onchange when you want to respond to a change in value, typically after the element loses focus.
//Such as  Selecting a new option from a dropdown, Typing into a text field and then clicking away, Changing a date, file, or color input.


//* EXPLAINANTION :

// 1. Check if the password is at least 8 characters long, Check if the password contains at least one uppercase letter.Check if the password
//  contains at least one lowercase letter, Check if the password contains at least one number, Check if the password contains at least one special character.

// Breakdown of /A-Z/.test(pwd)
// - /A-Z/: This is a regular expression pattern that matches any uppercase letter from A to Z.
// - .test(pwd): This is a method that tests whether the pwd string contains at least one character that matches the pattern.
//What it does
// This expression checks if the variable pwd contains at least one uppercase letter. If it does, .test() returns true; otherwise, it returns false.
//  test() is a built-in method in JavaScript, specifically available on RegExp (regular expression) objects.It checks whether a string matches a given regular expression pattern.


//2. check the strength of the password, if,
// "" = weak
// abcde = level1
// "abcd234" = level2
// "abcd123@" = level3
// so for that we need to filter the input password to check how many checks are true. `pwdChecks.filter(boolean).length`

//3. if 