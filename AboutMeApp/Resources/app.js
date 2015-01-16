// background color
Titanium.UI.setBackgroundColor('#fff');

// local variables to help define label sizes accros platforms
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;

// initial window for app
var mainWin = Ti.UI.createWindow({
	title: "What are your questions?",
	backgroundColor: ("#fff")
	});

// creating a nav window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

// loading the json.js file 
var loadJson = require("json");

// calling nav window
navWindow.open();
