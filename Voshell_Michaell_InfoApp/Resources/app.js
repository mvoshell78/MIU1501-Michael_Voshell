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

// creating a nav window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var loadJson = require("json");
// calling nav window
navWindow.open();

