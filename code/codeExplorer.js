/** 
 * NOTE: 
 * The trim() method in JavaScript is a built-in string method that removes whitespace from both ends of a string and returns a new string.
 * const hex = colorNameToHex(inputColor.trim().toLowerCase());
    - inputColor.trim(): Removes leading/trailing whitespace (e.g., "  lavender " → "lavender").
    - .toLowerCase(): Ensures case-insensitive matching (e.g., "Lavender" → "lavender").
    - colorNameToHex(...): Converts the cleaned color name to its hex code (e.g., "lavender" → "#E6E6FA").imported from the @uiw/react-color-name 
package—a handy utility that converts CSS color names (like "lavender" or "maroon") into their corresponding hex codes (like "#E6E6FA" or "#800000").


if (hex) {
  setChangeColor({ name: inputColor, hex });
  setError(""); //clear the error on successful search
}else {
  setError("unable to recognnize");
  setChangeColor(null);
}
- If a valid hex code is returned:
- setChangeColor(...) updates the state with an object containing:
- name: the original input (preserving casing)
- hex: the converted hex code

 Dry Run Example
Let’s say the user types "Lavender ":
- inputColor.trim().toLowerCase() → "lavender"
- colorNameToHex("lavender") → "#E6E6FA"
- setChangeColor({ name: "Lavender ", hex: "#E6E6FA" })



 */



