var names = ["ramm","ranjith","mani"];

var user = names.pop();

console.log(user);
console.log(names); //remove last index of array eturn value



///map(function(element, index, array)

var numbers = [1, 4, 9];
var roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);


var sorting =[1,3,5,4,2,8]
var sorted = sorting.sort();
console.log(sorted);


var filt = [2,4,54,45,3,5,5]
var filtered = filt.filter(num=>num>10);
console.log(filtered);

var sift = ["ramm","ranjith","mani"]
var sift_ = sift.shift();
console.log(sift_);

