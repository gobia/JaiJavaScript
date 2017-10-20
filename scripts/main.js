var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world1!' ;
var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if ( mySrc === "images/firefox-icon.png") { 
	myImage.setAttribute('src','images/pic1.png') ;
	}
	else{
	myImage.setAttribute('src','images/firefox-icon.png') ;	
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

function  setWelcomemsg(){
	var welcomeMsg=prompt('Enter your Welcome messgage');
	localStorage.setItem('message',welcomeMsg);
	myHeading.textContent = myHeading.textContent + welcomeMsg ; 
}

if(!localStorage.getItem('name') || !localStorage.getItem('message') ) {
  setUserName();
  setWelcomemsg();
} else {
  var storedName = localStorage.getItem('name');
  var storedMsg = localStorage.getItem('message');
  myHeading.textContent = 'Mozilla is cool, ' + storedName + " "+ storedMsg ;
}

myButton.onclick = function() {
  setUserName();
}