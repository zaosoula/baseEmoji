BaseEmoji= require('../dist/baseemoji');

var string = "Hello, world ! ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// Encode the String
var encodedString = BaseEmoji.encode(string);
var decodedString = BaseEmoji.decode(encodedString);
console.log('TESTING...');

if(encodedString=="😋🤣😛😐🤠🤣😓😐😇😊😒😦😏😫😮😣😇😁😅😟😙😝🙂😆😚😅😛🤣😚😳😕🙂😋😣😑😌😜😝😥😗😝😂😂😋😝😱😚😛😛😖😒🤓🤑😛😠😕🤓😫😍😣😎🤑😎😩🤡🤣😖😡🤡😨😮😑🤠😫😪😧😏🤗🙂😵😒😊😛😨😒😰😕😥😞☹️😃😮😌☹️😌😳😍😜🤓😰😘😆😣😶😉😵😳🤔"){
  console.log(' - CORRECT ENCODING');
  if(decodedString==string){
    console.log(' - CORRECT DECODING');
    console.log('TEST OK');
  }else{
    console.log(' ! INCORRECT DECODING');
    console.log('TEST FAIL');
  }
}else{
  console.log(' ! INCORRECT ENCODING');
  console.log('TEST FAIL');
}
