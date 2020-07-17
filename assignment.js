

// feetToMile 
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(1584000);
console.log("The distance between Dhaka to Khulna is :", result, "(Mile).");


// woodCalculator
function woodCalculator(chair, table, bed){
var woodForChair = chair * 1;
var woodForTable = table * 2;
var woodForBed = bed * 3;
var totalWood = woodForChair + woodForTable + woodForBed;
return totalWood;
}
var result = woodCalculator(10, 5, 4);
console.log("Total wood need: ", result, "(cubicFeet).");


//tinyFriend
function tinyFriend(names){
var tiny = names[0];
for (var i = 0; i < names.length; i++){
   var tinyName = names[i];
   if(tinyName > tiny){
       tiny = tinyName;
   } 
}
return tiny;
}
var tinyName = tinyFriend(["Jacki", "Juliany", "Lima", "Christopher", "Joshuai"]);
console.log("Tiny Friend Name is: ", tinyName);
