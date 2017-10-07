BaseEmoji= require('../dist/baseemoji');

// Encode the String
console.log('INPUT: '+process.argv[2]);
console.log(' - DECODING...');
var decodedString = BaseEmoji.decode(process.argv[2]);
var encodedString = BaseEmoji.encode(decodedString);
console.log(' - TESTING...');
  if(encodedString==process.argv[2]){
    console.log(' - TEST OK');
    console.log('DECODED MESSAGE: '+decodedString);
  }else{
    console.log(' ! TEST FAIL');
  }
