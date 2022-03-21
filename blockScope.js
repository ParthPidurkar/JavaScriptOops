var foo = true;
if (foo) {
 var bar = 42; //variable bar is local in this block { }
 console.log( bar );
}
console.log( bar );


