

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.




function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str.split('');
  for (i = 0; i < str.length; i++){
    if (str.slice(-2) == target.slice(-2)){
        return true;
        }
    
    if (str.slice(-1) == target){
      
      return true;
    } else {
      
     str = str.split(" ");
      if (str.slice(-1) == target){
        return true;
      }
    } return false;
  } 
  return str;
}

end("connor", "n");