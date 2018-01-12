"use strict";

var userPoints = 0;


alert('Welcome to Richard\'s Guessing Game!');

var user = prompt('What is your Name?');
console.log('User\'s name: ' + user);
alert('Hi ' + user + '! I am so glad you want to play Richard\'s game.');

var whichAsian = prompt('Is Richard\'s nationality Chinese? type yes or no').toLowerCase();
console.log(user + ' answered Question 1 ' + whichAsian);

if(whichAsian === 'yes'){
    alert('You are incorrect! Richard is Korean!');
} else {   
    alert('You are correct! Richard is Korean!');
    userPoints++;
}

var richardsHometown = prompt(user + ', Is Richard born in Los Angeles?').toLowerCase();
console.log(user + ' answered ' + richardsHometown);
if(richardsHometown === 'yes') {
    alert('Great job ' +  user + ',  Richard is born in Los Angeles');
    userPoints++;
}
else {
    alert('Richard is from Los Angeles!');
}

var richardsHobby = prompt('Is Richard\'s favorite hobby playing basketball?').toLowerCase();
console.log(user + 'answered question 3 ' + richardsHobby);
if(richardsHobby === 'yes') {
    alert('Richard enjoys playing basketball');
    userPoints++;
}
else {
    alert('Nice try ' + user + '!');

}

var richardsFood = prompt('Is Richard\'s favorite food pizza?').toLowerCase();
console.log(user + 'answered question 4 ' + richardsFood);
if(richardsFood === 'yes') {
    alert('Nice job ' + user +', Richard\'s favorite food is most def, PIZZA!');
    userPoints++;
}
else {
    alert(user + ', nice try, better luck next time!');
}

var richardsColor = prompt('Is Richard\'s favorite color red?').toLowerCase();
console.log(user + ', answered question 5 ' + richardsColor);
if(richardsColor === 'yes') {
    alert('Richard\'s favorite color is red!')
    userPoints++;
   }

else {
    alert('Nice try' + user + 'hope you have better luck next time!')
}
    alert(user + ' got ' + userPoints + ' questions correct!  Nicely done ' + user);



//check if the user's answer is correct 
//what is correct? 
//find out what the answer is
//toLowerCase or toUpperCase
//use a confirm box
//
/*
if(answer === 'yes' || answer === 'y');{
    //if it's correct then give them a point
    userPoints++;
    // if answer is yes, javascript will read the lowercase and will get a point
} else {
    //if it's not correct, tell them to tryt again. 
    alert('Nope! I love all spicey food');

}


alert('You have ' + userPoints + ' points');
*/