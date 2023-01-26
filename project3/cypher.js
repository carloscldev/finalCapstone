// JAVASCRIPT CYPHER
// This program encodes a message by shifting each letter by 15 places in a closed cycle (A-Z) and (a-z).
// All other values remain the same (e.g. spaces, punctuation, numbers).

function encode(message) {
  // Initialize an empty string for the encoded message
  let encodedMessage = "";

  // Iterate through each character in the message
  for (let i = 0; i < message.length; i++) {
    // Get the character at the current index
    let char = message[i];

    // Check if the character is a letter
    if (/[a-z]/i.test(char)) {
      // Convert the letter to a number (A-Z maps to 65-90, a-z maps to 97-122)
      let charCode = char.charCodeAt(0);

      // Shift the letter by 15
      charCode += 15;

      // if the letter is not in the range A-Z or a-z, adjust it
      if ((charCode > 90 && charCode < 97) || charCode > 122) {
        charCode -= 26;
      }

      // Convert the number back to a letter
      char = String.fromCharCode(charCode);
    }

    // Add the encoded character to the encoded message
    encodedMessage += char;
  }

  // Return the encoded message
  return encodedMessage;
}

// Prompt the user to enter a message to be encoded
let message = prompt("Enter a message to encode:");

// Encode the message and print the result to the console
console.log("The encoded message is: " + encode(message));

/* Resources consulted
Caesar cipher in cryptography (2022) GeeksforGeeks. Available at: https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/ (Accessed: December 12, 2022). 
Kamath, K. (2021) Caesar's Cipher (freecode camp solution), DEV Community 👩‍💻👨‍💻. DEV Community 👩‍💻👨‍💻. Available at: https://dev.to/kirankamath96/caesars-cipher-freecode-camp-solution-3a8a (Accessed: December 12, 2022). 
*/
