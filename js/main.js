//JS will go here.
//TODO create class
function cardDamageValue(creatureName,strength,speed,weight,battleType){
     var obj = {};
 
 		obj.creatureName=creatureName;
    	obj.strength=strength;
    	obj.speed=speed;
    	obj.weight=weight;
     	obj.battleType=battleType;
 
     return obj;
}
 
//You could then say... let's play!
 
function showWinner (){

var charmanderCard = cardDamageValue(10, 5, 4, 'Fire');
var squirtleCard = cardDamageValue(9, 6, 10, 'Water');

if (charmanderCard.speed > squirtleCard.speed) {
    console.log(charmanderCard.creatureName + ' is faster');
} else {
	console.log(squirtleCard.creatureName + 'squirtle is faster');
}
}

