foo();
function foo() {
 console.log(a); // undefined
 var a = 1;
}


/*foo1();
foo1 = function()
{
	 console.log(b);
      var b = 1;
}
*/


foo2();
foo2 = () =>
{
	 console.log(b);
      var b = 1;
}



/*let myFunction = (a, b) =>
 {
	a * b
}
myFunction(10,20);*/