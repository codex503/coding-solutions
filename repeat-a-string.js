// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.



function repeat(str, num) {
  // repeat after me
  
  var myArray = [];
  
  for (i = 0; i < (num); i++){
    str.repeat(1);
    myArray.push(str);
    
  }
  str = myArray.join('');
  return str;
}

repeat("*", 8);