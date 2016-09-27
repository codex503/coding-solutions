
// Return the length of the longest word in the provided sentence.
// Your response should be a number.


function findLongestWord(str) {
  
  
  array = str.split(/\s+/);
  var start = array[0];
  
  for (i = 0; i < array.length; i++){
    
    if (start.length < array[i].length){
      start = array[i];
    }
    
  }
  
  return start.length;
}

findLongestWord("The longest string is at the start");

