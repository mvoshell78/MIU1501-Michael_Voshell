// background color
Titanium.UI.setBackgroundColor('#fff');

// local variables to help define label sizes accros platforms
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;
var rowHeight = pageHeight/5;

// initial window for app
var mainWin = Ti.UI.createWindow({
	title: "Mich's Recipies",
	backgroundColor: ("#fff")
	});
	
// views for recipie options

//	Green Chili
var greenChili = Ti.UI.createView({
	title: "Green Chili",
	height: rowHeight,
	width: pageWidth,
	top : 0,
	backgroundColor: "#A32929"
});
var greenChiliLabel = Ti.UI.createLabel({
	text : "Greeen Chili",
	title : "Green Chili",
	font: {fontSize: 30, fontFamily: "Avenir Next" },
	top : rowHeight / 3,
	color: "white",
	right: pageWidth/10
	});
var greenChiliPhoto = Ti.UI.createImageView({
	image: "images/greenchili.jpg",
	title: "Green Chili",
	left :0,
	height : rowHeight,
	width : pageWidth/3
});


// creating a nav window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

// loading the json.js file 
var loadJson = require("json");
greenChili.add(greenChiliLabel,greenChiliPhoto);
mainWin.add(greenChili);
mainWin.addEventListener("click",function(event){
	console.log(event.source.title);
});
// calling nav window
navWindow.open();
