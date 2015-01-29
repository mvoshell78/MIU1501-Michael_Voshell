// background color
Titanium.UI.setBackgroundColor('#fff');

// local variables to help define label sizes accros platforms
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;
var usrName = "";
var pssWord = "";


// initial window for app
var mainWin = Ti.UI.createWindow({
	title: "Login",
	backgroundColor: ("#fff")
	});
var win2 = Ti.UI.createWindow({
	title: "Check Book"    
});	
// views for initial window 
var view1 = Ti.UI.createView({
	width : pageWidth,
	height : pageHeight,
	backgroundColor : "#D2B48C",
	backgroundGradient: {
        type: 'radial',
        startPoint: { x: (pageWidth/2), y: (pageWidth) },
        endPoint: { x:(pageWidth/2), y: (pageWidth/2) },
        colors: [ '#D2B48C', '#e3d0b6'],
        startRadius: '90%',
        endRadius: 0,
        backfillStart: true
    }	
});


// text field for username
var userName = Ti.UI.createTextField({
	borderRadius : 5,
	borderWidth : .5,
	top : pageHeight / 3,
	width : 300,
	height : 30,
	backgroundColor: "white",
	opacity : .7,
	hintText: " Username"	
});

//text field for password
var password = Ti.UI.createTextField({
	borderRadius : 5,
	borderWidth : .5,
	top : (pageHeight / 3) + 50,
	width : 300,
	height : 30,
	backgroundColor: "white",
	opacity : .7,
	hintText: " Password",
	passwordMask : true
});

// button view for login
var buttonView = Ti.UI.createView ({
	backgroundColor: "green",
	bottom : 100,
	width: 300,	
	borderRadius:5,
    borderWidth : .5,
	height: 50
});

//button for login
var button = Titanium.UI.createButton( {
    title : "Log In",
    font : {fontSize : 20},
    width: 200,
    height: 44,
    color : "black"   
} );

 //event listener for login button
 button.addEventListener('click', function (e){
    // conditional to verify username and password
    if ((userName.value === usrName) & (password.value === pssWord)){
   	navWindow.openWindow(win2);
    }else{
    	alert("Invalid Username or Password");// alerts if either is wrong
    }
 });
view1.add(userName, password, buttonView);
mainWin.add(view1);

var loadJson = require("json");

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

navWindow.open();