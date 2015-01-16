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
 							},
 							{
 								"questions" : "What is your favorite food?",
 								"answers" : "My favorite food is pizza, My other favorite is cheeseburgers. Either way they both have to come with fries... Don't judge me!"
 							},
 							{
 								"questions" : "Do you have a family (spouse, children)?",
 								"answers" : "Yes I do, My wife of 13 years is Diana, We met in Colorado. We have 3 Children. Michael who is 20, and about to get married, So were excited for that. Korin is 18, Shes about to graduate High School and plans to attend DSU in the fall. Azsaleigh who is the baby at 14, She plays Violin and is interested in attending FullSail when she graduates."
 							},
 							{
 								"questions" : "What kind of work do you do?",
 								"answers" : "For the last 18 years I have worked in logistics. I spent 7 years in the Army, where I learned it. That helped me get my job at Schwans where I've worked for the last 12 years."
 							},
 							{
 								"questions" : "What are your hobbies?",
 								"answers" : "I used to enjoy playing video games, before I was a student. I hope to someday return to my 1st love. I decided it was better to make them than play them."
 							},
 							{
 								"questions" : "Do you have any pets?",
 								"answers" : "Four dogs, Which is not as weird as it sounds. We used to breed Boxers so we had a male and a female, plus a Shiutzu who was my wifes dog. Anyway about 2 years ago the female got out and went missing. After 8 months we decided she was gone for ever. In the meen time, some one we had sold a dog to brought the dog back, because they could no longer care for the dog. So we decided to keep him ourselves. Two months later the female came home and now we have four dogs. "
 							},
					
				]	
}
};
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


