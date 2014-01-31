//JS will go here.
//TODO create class
function cardDamageValue(strength,speed,weight,type){
     var obj = {};
 
       obj.strength=strength;
       obj.speed=speed;
       obj.weight=weight;
       obj.type=type;
 
      return obj;
}
 
//You could then say... let's play!
 
function showWinner (){

var cardDamageValue1 = cardDamageValue(10, 5, 4, 'Lizard');
var cardDamageValue2 = cardDamageValue(5, 4, 10, 'Whale');

if (cardDamageValue1.speed > cardDamageValue2.speed) {
          console.log('Player 1 wins');
}
}