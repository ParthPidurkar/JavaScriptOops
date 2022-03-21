function fun1(val) {
 return val.toUpperCase();
}
function fun2(a, passfunction) {
 console.log(passfunction(a));
}
fun2("smallcase", fun1);

