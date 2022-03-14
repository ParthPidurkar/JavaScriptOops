var person = {
 name: 'Albert Einstein',
 age: 66,
 greet: function () {
 console.log(this.name);
 }
};
person.greet();