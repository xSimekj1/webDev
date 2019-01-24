var stuff = require('./libs');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(stuff.pi,6));

/*
function callFunction(fun) {
fun();
}

//function expression
var sayBye = function () {
console.log("bye!");
}

callFunction(sayBye);


console.log(__dirname);
console.log(__filename);

var time = 0;

var timer = setInterval(timeTrack, 2000);

function timeTrack() {
  time += 2;
  console.log(time + " seconds passed");
  if (time > 5) {
    clearInterval(timer);
  }
}
*/
