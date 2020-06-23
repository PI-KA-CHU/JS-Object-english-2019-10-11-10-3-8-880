//task-1
var user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

//task-2
var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var num = 0;
for(let key in fruit){
	num += fruit[key];
}
console.log(num);