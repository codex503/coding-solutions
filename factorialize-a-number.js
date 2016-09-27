// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!


function factorialize(num) {
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
 }
 if (num === 0) {
   return 1;
 }
 return num;
}
  
factorialize(5);

