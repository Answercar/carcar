/*
* @Author: czy
* @Date:   2017-02-20 13:54:53
* @Last Modified by:   czy
* @Last Modified time: 2017-02-21 15:23:22
*/

'use strict';
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src','images/1.jpg');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUsername(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'carcar is cool'+myName;
}
if (!localStorage.getItem ('name')) {
	setUsername();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'carcar is cool'+storedName;
}
myButton.onclick = function(){
	setUsername();
}