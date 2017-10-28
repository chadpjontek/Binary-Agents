function binaryAgent(str) {
  // split the string of binarys into an array
  var strArr = str.split(" ");
  // iterate through strArr and convert each value into a decimal. Store result in decArr.
  var decArr = [];
  var char;
  var sum = 0;
  strArr.forEach(function(val) {
    for(var i = 0; i < val.length; i++){
      char = val.charAt(i);
      if(char == 1) {
        sum += Math.pow(2, val.length - i -1);
      }
    }
    decArr.push(sum);
    sum = 0;
  });
  // Convert decArr into a string from corresponding char codes
  str = String.fromCharCode.apply(null, decArr);
  return str;
}
// Examples
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // returns "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // returns "I love FreeCodeCamp!"