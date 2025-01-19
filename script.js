function firstWord(s) {
  // your code here
	 s = s.trim();
    
    // Find the index of the first space
    let spaceIndex = s.indexOf(' ');
    
    // If no space is found, return the entire string, otherwise return the substring up to the first space
    if (spaceIndex === -1) {
        return s; // No space found, return the entire string
    } else {
        return s.substring(0, spaceIndex); // Return the substring from the start to the first space
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
