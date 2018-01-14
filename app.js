'use strict';

var userPoints = 0;

alert('Welcome to Richard\'s Guessing Game!');

var user = prompt('What is your Name?');
console.log('User\'s name: ' + user);
alert('Hi ' + user + '! I am so glad you want to play Richard\'s game.');

var richardsNationality = prompt('Is Richard\'s nationality Korean? type yes/no or y/n').toLowerCase();
console.log(user + ' answered Question 1 ' + richardsNationality);

if(richardsNationality === 'yes' || richardsNationality === 'y'){
  alert('You are correct! Richard is Korean!');
  userPoints++;
}
else {
  alert('You are incorrect! Richard is Korean!');
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

for(var i=1; i <= 5; i++) {
  var richardsBone = prompt('How many bones did Richard break?');
  console.log(richardsBone);
  if(richardsBone === '5') {
    alert('nicely done! That is correct');
    userPoints++;
    console.log('Broke the loop');
    break;
  }
  else if(richardsBone > '5'){
    alert('Too High! You have ' + (4 - i) + ' guesses remaining');
  }
  else{
    alert('Too Low! You have ' + (4 - i) + ' guesses remaining');
  } 
}

var countries = ['tokyo' , 'singapore' , 'india' , 'thailand' , 'korea' , 'canada'];
i = 1;
var countryIncorrect = true;
while(i<=6){
  var selectedCountry = prompt('What country did Richard enjoy the most when on vacation. Heres a list of options: ' + countries.toString()).toLowerCase();
  for(var j = 0; j < countries.length; j++){
    if(selectedCountry === 'korea'){
      alert('You are correct!');
      userPoints++;
      countryIncorrect = false;
      break;
    }
  }
  if(!countryIncorrect){
    break;
  }
  alert('You are incorrect. You have ' + (6-i) + ' guesses remaining');
  if(countries.indexOf(selectedCountry) !== -1)
    countries.splice(countries.indexOf(selectedCountry), 1);
  i++;
}

if(userPoints <= 3){
  alert(user + ', you got ' + userPoints + ' questions correct. Try harder next time');
}
else{
  alert(user + ', you got ' + userPoints + ' questions correct. Nicely done!');
}
