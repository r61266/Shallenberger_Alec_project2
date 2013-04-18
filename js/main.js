// JavaScript Document
// Alec Shallenberger
// April 17, 2013
// Term 1304
// VfW Project2

window.addEventListener("DOMContentLoaded", function(){
	
	
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function makeSpec(){
		var formTag = document.getElementsByTagName("form");	
			selectLi = $('select');
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "holiday");
		for (var i=0, j=specHoliday.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = specHoliday[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect); 	
	}
	
	var specHoliday = ["--Choose a Holiday--", "Christmas", "Thanksgiving", "Easter", "Hanukkah", "New Years", "St. Patricks", "Fourth of July"];
	makeSpec();
	
	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});