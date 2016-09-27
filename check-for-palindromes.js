// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  // Good luck!
  
  str = str.replace(/ /g,'').replace(/,/g, '').replace(/\./g, '').replace('-','').replace(/\//,'').replace(/_/g,'').replace(/\:/g,'').replace(/\(/g,'').replace(/\)/g,'').replace(/-/g,'').toLowerCase();
  reverse = str.split("").reverse().join("");
  

	if (str === reverse){
  		return true;
	} else {
  		return false;
	}
}




palindrome("eye");

