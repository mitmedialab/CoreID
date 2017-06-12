var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'fred',
  pass: 'fred'
});
var address = "mjH9KTBnNyzdLifkr6xch5FkXnGdbf27mq"
var message = "this is one more message"
var signature1 = ""

client.signMessage(address, message, function(err, signature){
  if(err){
    return console.error(err);
  }

  signature1 = signature;
  client.verifyMessage(address, signature1, message, function(err, boolVal){
    if (err){
      return console.error(err);
    }
    console.log(address)
    console.log(message)
    console.log(signature1)
    console.log(boolVal)

  });
  console.log("signature "+signature)
})
