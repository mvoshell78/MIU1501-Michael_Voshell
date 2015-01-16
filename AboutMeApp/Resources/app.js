// background color
Titanium.UI.setBackgroundColor('#fff');
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


//function to add answers to second screen
var getAnswer = function(dataSource){
	console.log(dataSource.answer);
	// creatng second window
var winTwo = Ti.UI.createWindow({
	title: "These are your answers!",
	background: ("#fff")
});
// creating a view to hold label
var txtView = Ti.UI.createView({
	backgroundColor: ("#fff"),
	Top: 30,
	width: pageWidth - 30,
	height: pageHeight - 30

});

// creating a text label for winTwo
var txtLabel = Ti.UI.createLabel({
	top: 10,
	text:dataSource.answer,
	font: {fontSize : 22, fontFamily: "hevetical"}
});

//adding label to view
	txtView.add(txtLabel);
	//adding view to window
	winTwo.add(txtView);
	//calling window through navwindow
	navWindow.openWindow(winTwo);
};

//var loadjson = require("json");
// json data for the questions and answers
var qAndA = {
			"MichVoshell" :{
					Headtitle: " Q & A",
					"mainQuestions":
				[
							{
								"questions": "What is your name?",
								"answers": "My name is Michael Gene Voshell, I go by Mich, Which is pronunced Mike. Mostly to be diffrent, normal is boring!"
							},
							{
								"questions": "What is your chat user name? ",
								"answers": "I don't really use chat much I signed up for an AOL for school though. My AIM is michael.voshell@fullsail.edu" 
							},
							{
								"questions": "In which time zone do you reside? ",
								"answers": "Eastern, but I have lived in the Moutain, KST, and Arabia Time Zones"
							},
							{
								"questions" : "Why are you in the Mobile Development Program?",
								"answers" : "Ever since I got my first computer I knew this is what I wanted to do, I just took the long way here. This will be my second career. "
							},
							{
								"questions": "How comfortable are you with Javascript?",
								"answers" : "Pretty comfortable, a little rusty, like you said though its like riding a bike."
 							},
 							{
 								"questions" : "How comfortable are you with Titanium?",
 								"answers": "I found Titanium to be a very good program, I love the ability to code for more than one platform at a time. when I first started with javascript I wasn't sure but Titanium seems to just make it fit."
 							}
					
				]	
}
};

//creating table 
var questionTable = Ti.UI.createTableView({
	top:20
});

// creating table section
var questionSection = Ti.UI.createTableViewSection({
	headerTitle : qAndA.MichVoshell.Headtitle
	
});

// loop to populate table
for (i = 0, j = qAndA.MichVoshell.mainQuestions.length; i < j; i++){
	console.log(qAndA.MichVoshell.mainQuestions[i].questions);
	
	// rows for the sections in the table 
	var rows = Ti.UI.createTableViewRow({
		title: qAndA.MichVoshell.mainQuestions[i].questions,
		answer: qAndA.MichVoshell.mainQuestions[i].answers,
		hasChild: true
	});
	// adding the data to the table
	var allSection = [questionSection];
	questionSection.add(rows);
	questionTable.setData(allSection);
	questionTable.add(questionSection);

};

// event listener to make the table do
mainWin.addEventListener("click",function(event){
	
	getAnswer(event.source);

});


// adding table to main window 
mainWin.add(questionTable);

// calling nav window
navWindow.open();