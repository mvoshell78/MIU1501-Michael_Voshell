// background color
Titanium.UI.setBackgroundColor('#fff');
// local variables to help define label sizes accros platforms
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;
var usrName = "";
var pssWord = "";


// json array
var json = {
			"checkbook" :{
					Headtitle: " Checking",
					Foottitle: " Total",
					"checking":
				[
					{
						"date" : " 11/11/14",
						"amount" : "6.10",
						"merchant" : "Acme",
						"memo" : "Groceries "
					 },
					 {
					 	
						"date" : " 12/1/14",
						"amount" : "27.00",
						"merchant" : "Walmart",
						"memo" : " "
					 },
					 {
					 	
						"date" : " 1/3/15",
						"amount" : "37.50",
						"merchant" : "Texaco",
						"memo" : "Gas",
					 },
					 
				]
			}
	};
	

// creating a table to house checking data
var checkBook = Ti.UI.createTableView({
	top: 50,// room for add button
	
});	

//section for checking 	
var checking = Ti.UI.createTableViewSection({
	headerTitle: json.checkbook.Headtitle,
	
	
});
// loop to populate rows and total checking account amounts
var sum = 0;
for(i=0, j = json.checkbook.checking.length; i < j; i++){
	
	sum = sum + parseFloat(json.checkbook.checking[i].amount);
	
// row with json data
	var entry= Ti.UI.createTableViewRow({
	
		height : 100,
		date : json.checkbook.checking[i].date,
		amount : json.checkbook.checking[i].amount,
		merchant : json.checkbook.checking[i].merchant,
		memo : json.checkbook.checking[i].memo
	
});


// labels to add diffrent  items to the row
//merchant name
var MerchLabel = Ti.UI.createLabel({
	text : json.checkbook.checking[i].merchant, 
	font : {fontSize : 25},
	top: 10,
	left :10
});
//date
var dateLabel = Ti.UI.createLabel ({
	text : json.checkbook.checking[i].date, 
	font : {fontSize : 16},
	bottom : 10,
	left :10
});
//amount
var amountLabel = Ti.UI.createLabel ({
	text : json.checkbook.checking[i].amount, 
	font : {fontSize : 25},
	top : 10,
	right :10
	
});
//memo
var memoLabel = Ti.UI.createLabel ({
	text : json.checkbook.checking[i].memo, 
	font : {fontSize : 16},
	right : 10,
	bottom :10
	
});
// label at the bottom for the total
var totalLabel = Ti.UI.createLabel({
	text : "Total" + " $ " + sum
 });
 //view for total
 var totalView = Ti.UI.createView({
 	height: 40,
 	width: pageWidth,
 	backgroundColor: "green",
 	bottom: 10,
 	opacity: .5
 });
 // adds data to rows, rows to section...
var section = [checking];
totalView.add(totalLabel);
entry.add(MerchLabel,dateLabel,amountLabel,memoLabel);
checking.add(entry);
checkBook.setData(section);
checkBook.add(section);

};


// initial window for app
var mainWin = Ti.UI.createWindow({
	title: "Check Book",
	backgroundColor: ("#fff")
	});
// window for the register	
var win2 = Ti.UI.createWindow({
	
    
});

// aditional items window
var win3= Ti.UI.createWindow({
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
// views
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
	hintText: " Password"
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
// button to add aditonal items to register
var buttonView2 = Ti.UI.createView ({
	backgroundColor: "green",
	top :5,	
	height: 40,
	opacity: .5
});
var button2 = Titanium.UI.createButton( {
    title : "Click to add ",
    font : {fontSize : 0},
    width: 200,
    height: 44, 
    color: "black"
    
   
} );   
button2.addEventListener("click", function(e){
	navWindow.openWindow(win3);// opens window to add additional items 
	
});
buttonView2.add(button2);
buttonView.add(button);  
view1.add(userName, password, buttonView);
mainWin.add(view1);
win2.add(checkBook,totalView,buttonView2);
// creating a nav window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

navWindow.open();
