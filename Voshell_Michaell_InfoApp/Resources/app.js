// background color
Titanium.UI.setBackgroundColor('#fff');

// local variables to help define label sizes accros platforms
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;
//  var to make views dynamic
var rowHeight = (pageHeight - 62) /5;
var rightAlign = pageWidth/25;
var fontSize = 27;

// initial window for app
var mainWin = Ti.UI.createWindow({
	title: "Mich's Recipies",
	backgroundColor: ("#fff")
	});

// funtion to open window after something has been clicked

var recOpen = function(source){
	
	recipieWin = Ti.UI.createWindow({
	backgroundColor: ("#fff"),
	title : source
});
console.log(source);
navWindow.openWindow(recipieWin);
};	


	
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
	font: {fontSize: fontSize, fontFamily: "Avenir Next" },
	top : rowHeight / 3,
	color: "white",
	right: rightAlign
	});
var greenChiliPhoto = Ti.UI.createImageView({
	image: "images/greenchili.jpg",
	title: "Green Chili",
	left :0,
	height : rowHeight,
	width : pageWidth/3
});

//	thePot
var thePot = Ti.UI.createView({
	title: "The Pot",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height,
	backgroundColor: "#297A53"
});
var thePotLabel = Ti.UI.createLabel({
	text : "The Pot",
	title : "The Pot",
	font: {fontSize: fontSize, fontFamily: "Avenir Next" },
	top : rowHeight / 3,
	color: "white",
	right: rightAlign
	});
var thePotPhoto = Ti.UI.createImageView({
	image: "images/thepot.jpg",
	title: "The Pot",
	left :0,
	height : rowHeight,
	width : pageWidth/3
});

//	jalapeno corn bread
var jalapenoCornBread = Ti.UI.createView({
	title: "Jalapeno Corn Bread",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height + thePot.height,
	backgroundColor: "#A16B36"
});
var jalapenoCornBreadLabel = Ti.UI.createLabel({
	text : "Jal. Corn Bread",
	title : "Jalapeno Corn Bread",
	font: {fontSize: fontSize, fontFamily: "Avenir Next" },
	top : rowHeight / 3,
	color: "white",
	right: rightAlign
	});
var jalapenoCornBreadPhoto = Ti.UI.createImageView({
	image: "images/jalapenoCornBread.jpg",
	title: "Jalapeno Corn Bread",
	left :0,
	height : rowHeight,
	width : pageWidth/3
});

//	Tortilla Soup
var tortillaSoup = Ti.UI.createView({
	title: "Tortilla Soup",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height + thePot.height +jalapenoCornBread.height,
	backgroundColor: "#CFCB6E"
});
var tortillaSoupLabel = Ti.UI.createLabel({
	text : "Tortilla Soup",
	title : "Tortilla Soup",
	font: {fontSize: fontSize, fontFamily: "Avenir Next" },
	top : rowHeight / 3,
	color: "white",
	right: rightAlign
	});
var tortillaSoupPhoto = Ti.UI.createImageView({
	image: "images/tortillaSoup.jpg",
	title: "Tortilla Soup",
	left :0,
	height : rowHeight,
	width : pageWidth/3
});

//	Chili Con Carne
var chiliConCarne = Ti.UI.createView({
	title: "Chili Con Carne",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height + thePot.height +jalapenoCornBread.height + tortillaSoup.height,
	backgroundColor: "#3796A4"
});
var chiliConCarneLabel = Ti.UI.createLabel({
	text : "Chili Con Carne",
	title : "Chili Con Carne",
	font: {fontSize: fontSize, fontFamily: "Avenir Next" },
	top : rowHeight / 3,
	color: "white",
	right: rightAlign
	});
var chiliConCarnePhoto = Ti.UI.createImageView({
	image: "images/chiliConCarne.jpg",
	title: "Chili Con Carne",
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

//adding labels and photos to views
greenChili.add(greenChiliLabel,greenChiliPhoto);
thePot.add(thePotLabel, thePotPhoto);
jalapenoCornBread.add(jalapenoCornBreadLabel, jalapenoCornBreadPhoto);
tortillaSoup.add(tortillaSoupLabel, tortillaSoupPhoto);
chiliConCarne.add(chiliConCarneLabel, chiliConCarnePhoto);

// adding views to windows
mainWin.add(greenChili, thePot, jalapenoCornBread, tortillaSoup, chiliConCarne );



// calling nav window
navWindow.open();

// event listener
mainWin.addEventListener("click",function(event){
	
	recOpen(event.source.title);
	
});
