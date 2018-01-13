'use strict';

var userPoints = 0;

alert('Welcome to Richard\'s Guessing Game!');

var user = prompt('What is your Name?');
console.log('User\'s name: ' + user);
alert('Hi ' + user + '! I am so glad you want to play Richard\'s game.');

var richardsNationality = prompt('Is Richard\'s nationality Chinese? type yes/no or y/n').toLowerCase();
console.log(user + ' answered Question 1 ' + richardsNationality);

if(richardsNationality === 'yes' || richardsNationality === 'y'){
  alert('You are incorrect! Richard is Korean!');
}
else {
  alert('You are correct! Richard is Korean!');
  userPoints++;
}

var richardsHometown = prompt(user + ', Is Richard born in Los Angeles? Please type yes/no or y/n.').toLowerCase();
console.log(user + ' answered ' + richardsHometown);

if(richardsHometown === 'yes' || richardsHometown === 'y') {
  alert('Great job ' + user + ',  Richard is born in Los Angeles');
  userPoints++;
}
else {
  alert('Richard is from Los Angeles!');
}

var richardsHobby = prompt('Is Richard\'s favorite hobby playing basketball? Please type yes/no or y/n.').toLowerCase();
console.log(user + ' answered question 3 ' + richardsHobby);

if(richardsHobby === 'yes' || richardsHobby === 'y') {
  alert('Richard enjoys playing basketball');
  userPoints++;
}
else {
  alert('Nice try ' + user + '!');
}

var richardsFood = prompt('Is Richard\'s favorite food pizza? Please type yes/no or y/n').toLowerCase();
console.log(user + ' answered question 4 ' + richardsFood);

if(richardsFood === 'yes' || richardsHobby === 'y') {
  alert('Nice job ' + user +', Richard\'s favorite food is most def, PIZZA!');
  userPoints++;
}
else {
  alert(user + ', nice try, better luck next time!');
}

var richardsColor = prompt('Is Richard\'s favorite color red? Please type yes/no or y/n').toLowerCase();
console.log(user + ', answered question 5 ' + richardsColor);

if(richardsColor === 'yes' || richardsColor === 'y') {
  alert('Richard\'s favorite color is red!');
  userPoints++;
} 
else {
  alert('Nice try ' + user + ' hope you have better luck next time!');
}

if(userPoints <= 2){
  alert(user + ', you got ' + userPoints + ' questions correct. Try harder next time');
}
else{
  alert(user + ', you got ' + userPoints + ' questions correct. Nicely done!');
}
