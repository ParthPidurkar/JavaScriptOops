/*if (true) {
 function sayMoo() {
 console.log("true");
 return 'trueMoo';
 }
}
else {
 function sayMoo() {
 return 'falseMoo';
 }
}
sayMoo();*/



var sayMoo;
if (true) {
 sayMoo = function() {
	 console.log("true");
	 return 'trueMoo';
 };
}
else {
 sayMoo = function() {
 return 'falseMoo';
 };
}
sayMoo();