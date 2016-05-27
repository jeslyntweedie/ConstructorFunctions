//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.
var bands = [{
	name: "Poison",
	genre: "Buttrock",
	numberOfPerformers: 5,
	numberOfGroupies: 500
}, {
	name: "John Mellancamp",
	genre: "Classic Rock",
	numberOfPerformers: 4,
	numberofGroupies: 100
}, {
	name: "Codejamz",
	genre: "Experimental Alternative",
	numberOfPerformers: 13,
	numberofGroupies: 1
}];

//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.
var Band = function(name, genre, numberOfPerformers, numberofGroupies){
	this.name= name;
	this.genre= genre;
	this.numberOfPerformers= numberOfPerformers;
	this.numberOfGroupies= .numberOfGroupies
};

//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.
var poision = new Band("Poison", "Buttrock", 5, 500);
var johnMellancamp = new Band("John Mellancamp", "Classic Rock", 4, 100);
var codeJamz = new Band("Codejamz", "Experimental Alternative", 13, 1);

//Now create a new array called newBands and push each of the objects that you made into that array.
var newBands =[poision, johnMellancamp, codeJamz]
//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype method for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.
 Band.prototype.bandInfo = function() {
 	alert(this.name + " " + this.genre);
 }