const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function  Ryanair(tot) {
    this.postitotali = tot;
    this.getPostiTotali = function () {
        return this.postitotali;
    }
}


rl.question('What do you think of Node.js? ', function (answer){
  // TODO: Log the answer in a database
  console.log('Thank you for your valuable feedback:', answer);

  rl.close();
});

var airport = new Ryanair(7);




//console.log(airport.getPostiTotali());