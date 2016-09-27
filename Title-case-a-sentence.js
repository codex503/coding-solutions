// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {
 str = str.toLowerCase(); //splits the entire line to lowercase//
 str = str.split(' '); //turns string into an array//
  
  
  
  for (i = 0; i < str.length; i++){ //i = 0, as long as i is less than the length of string repeat loop//
    
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);// for each index of the array, replace it with uppercase//
    
  }
  
   str = str.join( ' ');
  return str;
} 


titleCase("I'm a little tea pot");

