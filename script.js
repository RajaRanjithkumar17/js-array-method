var names = ["ramm","ranjith","mani"];

var user = names.pop();

//console.log(user);
//console.log(names); //remove last index of array eturn value



///map(function(element, index, array)

var numbers = [1, 4, 9];
var roots = numbers.map((num) => Math.sqrt(num));
//console.log(roots);


var sorting =[1,3,5,4,2,8]
var sorted = sorting.sort();
//sconsole.log(sorted);


var filt = [2,4,54,45,3,5,5]
var filtered = filt.filter(num=>num>10);
//console.log(filtered);

var sift = ["ramm","ranjith","mani"]
var sift_ = sift.shift();
//console.log(sift_);



//unshift(),slice(),every(),forEach(),find()


var unShift = ["kumar"]
unShift.unshift("R","ranjth");

//console.log(unShift);



//slice

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var lime = fruits.slice(1, 4);
var  apl = fruits.slice(0);
//console.log(lime,apl);


//evry

const everyMtd = (currentValue) => currentValue >2; //must statisfy all element based on condition

const num= [10, 30, 39, 29, 10, 13];

//console.log(num.every(everyMtd));

//find



const found = num.find(element => element > 38); //return first element where statisfy condition

//console.log(found);

//forEach

var products = [{
    id:0,
    price :" Rs.10000",
    productDes : "4 gb RAM , 64 Gb ROM",
    model : "realme 9"

},
{
    id:1,
    price : "Rs.90000",
    productDes : "6 gb RAM , 64 Gb ROM",
    model : "realme 8"
},
{
    id:2,
    price : "Rs.80000",
    productDes : "8 gb RAM , 128 Gb ROM",
    model : "realme 7"
}]
//products.forEach(element => console.log(element));



var number = 123;
var arr =[]
while(number>0) {

    var rem = number%10;
    if(rem==1){
        
        arr.push("one")
    }
    if(rem==2){
        arr.push("two")
    }
    if(rem==3){
        arr.push("three");
    }
    if(rem==4){
        arr.push("four");
    }
    if(rem==5){
        arr.push("five");
    }
    if(rem==6){
        arr.push("six");
    }
   
 

  
    number = Math.floor(number/10)

}
var res = arr.reverse()
console.log(res);
    
