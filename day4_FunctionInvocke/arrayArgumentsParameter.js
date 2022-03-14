var sum = function () {
 var i, total = 0;
 for (i = 0; i < arguments.length; i += 1) {
     var args = Array.prototype.slice.call(arguments);
    }
 for (i = 0; i < args.length; i += 1) {
	 console.log(args[i]);
 }
};
sum(1,2,3,4,5,6,7,8,9,10); 