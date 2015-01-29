
// local variables to help define label sizes accros platforms
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;



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
	headerTitle: json.checkbook.Headtitle	
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
	text : "Total" + " $ " + sum,
	color: "black"
 });
 
 //view for total
 var totalView = Ti.UI.createView({
 	height: 40,
 	width: pageWidth,
 	backgroundColor: "#A3A3A3",
 	bottom: 10
 });
 // adds data to rows, rows to section...
var section = [checking];
totalView.add(totalLabel);
entry.add(MerchLabel,dateLabel,amountLabel,memoLabel);
checking.add(entry);
checkBook.setData(section);
checkBook.add(section);
};



	
// window for the register	


// aditional items window
var win3= Ti.UI.createWindow({
	backgroundColor : "#D2B48C",
	title: "Add Entry",
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



// text fields for adding entries for the register
var addDate = Ti.UI.createTextField({
	borderRadius : 5,
	borderWidth : .5,
	top : 160,
	left: 190,
	width : 150,
	height : 30,
	backgroundColor: "white",
	opacity : .7,
	hintText: " Date"	
});
var addAmount = Ti.UI.createTextField({
	borderRadius : 5,
	borderWidth : .5,
	top : 160,
	left : 40,
	width : 100,
	height : 30,
	backgroundColor: "white",
	opacity : .7,
	hintText: " Amount"	
});
var addMerchant = Ti.UI.createTextField({
	borderRadius : 5,
	borderWidth : .5,
	left: 40,
	top : 110,
	width : 300,
	height : 30,
	backgroundColor: "white",
	opacity : .7,
	hintText: " Merchant Name"	
});
var addMemo = Ti.UI.createTextField({
	borderRadius : 5,
	borderWidth : .5,
	top : 210,
	left : 40,
	width : 300,
	height : 30,
	backgroundColor: "white",
	opacity : .7,
	hintText: " Memo"	
});



 
// button to add aditonal items to register
var buttonView2 = Ti.UI.createView ({
	backgroundColor: "green",
	top :5,	
	height: 40,
	opacity: .9
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
var buttonView3 = Ti.UI.createView ({
	backgroundColor: "green",
	borderRadius : 5,
	borderWidth : .5,
	botton: 50,	
	left :40,
	width :300,
	height: 40,
	opacity: .8
});

var button3 = Titanium.UI.createButton( {
    title : "Click to add ",
    font : {fontSize : 0},
    width: 200,
    height: 44, 
    color: "black"   
} ); 
button3.addEventListener("click", function(e){
	
	var alertWin = Ti.UI.createWindow({
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
	
	var alertView = Ti.UI.createView({
		backgroundColor : ("#fff"),
		height : 200,
		width : 300,
		borderRadius : 9,
		opacity : .7
		
	});
	var buttonView = Ti.UI.createView({
		backgroundColor: ("green"),
		height: 50,
		width : 300,
		bottom: 20,
		opacity : 7,
		borderRadius : 9
	});
	
	var alertLabel = Ti.UI.createLabel({
		left :10,
		top : 10,
		text : "The Following information will be added to your register;\n\n" + addMerchant.value + "\n" + addDate.value + "\n" + "$ " + addAmount.value +"\n" + addMemo.value + "\n\n" + "Is this correct?"
	});
	var yesButton = Ti.UI.createButton({
		title : "Yes",
		color : "black",
		right : 30,
		width: 50,
   		height: 50, 
   		
	});
	
	
	
	var noButton = Ti.UI.createButton({
		title : "No",
		color : "black",
		left : 30,
		width: 50,
    	height: 50, 
    	
	});
	yesButton.addEventListener('click',function(e){
		
		alert("Your info will be added\nNext month when I learn the code! ");
	});
	noButton.addEventListener("click",function(e){
		alert("Sorry, Please try again");
	});
	buttonView.add(yesButton, noButton);
	alertView.add(alertLabel);
	alertWin.add(buttonView,alertView);
	
	navWindow.openWindow(alertWin);
	
	
	});
	




buttonView3.add(button3);
win2.add(checkBook,totalView,buttonView2);
win3.add(addDate,addAmount,addMerchant,addMemo,buttonView3);
// creating a nav window



