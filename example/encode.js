BaseEmoji= require('../dist/baseemoji');

// Encode the String
console.log('INPUT: '+process.argv[2]);
console.log(' - ENCODING...');
var encodedString = BaseEmoji.encode(process.argv[2]);
var decodedString = BaseEmoji.decode(encodedString);
console.log(' - TESTING...');
  if(decodedString==process.argv[2]){
    console.log(' - TEST OK');
    console.log('ENCODED MESSAGE: '+encodedString);
  }else{
    console.log(' ! TEST FAIL');
  }
