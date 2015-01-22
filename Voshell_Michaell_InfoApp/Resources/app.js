// background color
Titanium.UI.setBackgroundColor('#fff');


var json = {
			"recipies" :{
					Headtitle: " Recipies",
					"myRecipies":
				[
					{
					"name" : "Green Chili",
					"time" : "Prep Time: 10 Minutes\nCook Time: 2 hours\n ",
					"ing" : "Ingredients\n",
					"ingredients" : " 2 pounds diced pork or chicken \n 1 large can whole green chillies \n 1 pounds small potatoes \n 2 tbl spoons chicken stock \n 1 can rotell tomatoes \n 1 tsp cumin \n 1 pinch of salt or to taste\n 2-3 empty chilli cans of water\n",
					"oIng" : "Optional Ingredients\n ",
					"optionalIngredients" : " Sourcream\n Shredded cheese\n Tortilas\n",
					"dir" : "Directions\n",
					"directions" : "1. In a large pot, cook pork till lightly white don't over cook.\n\n2. Once the meat is white Add salt, cumin, bullion, chillies(whole), Rotels and water.,\n \n3. Bring to a boil, \n\n4. Add potatoes, \n\n5. .Let simmer for 2-3 hours or till potatoes are falling apart and thickening the stew\n",
					"desc" : "Green Chili is a classic south western dish. Full of flavor, Mild spice. Serve as a stew, over beans or wrapped in a tortilla.\n",
					"color": "#213B00",
					"image": "greenchili.jpg",
					"nutrition" : "greenChilliNutrition.jpg",
					"rew" : "Reviews \n",
					"review" : "4.5 out of 5 \nOur family loves making this dish!! \n3 out of 5 \nA little to spicy for the kids \n5 out of 5 \nThe best Green Chili recipie we've tried \n\n\n\n\n\n  "
					},
					{
					"name" : "The Pot",
					"time" : "Prep Time: 20 Minutes \nCook Time: 30 minutes\n ",
					"ing" : "Ingredients\n",
					"ingredients" : "Old bay 1tbsp per qt of water \n1 lemon quartered \n1 bag red potatoes \npacakage sausage sliced \n6 ears of corn, halved ‣ 2 sticks of butter \nGarlic to taste \n ",
					"oIng" : "Optional Ingredients\n ",
					"optionalIngredients" : "Shrimp \nCrabMeat(not imitation)\n ",
					"dir" : "Directions\n",
					"directions" : "1.Boil water and old bay \n2. Turn down the heat \n3. Add potatoes and sausage \n4. Add optonal ingredients \n5. Cook appx 10 min \n6. And corn cobs \n7. Cook 7-8 min \n8. Drain water add butter and garlic\n",
					"desc" : "“The Pot” is a dish I learned to make from a friend of mine. it has a Louisiana meets Delaware feel to it. Gumbo meets Crab soup. This dish is delicious with or with out the seafood, your Choice!\n",
					"color": "#679C00",
					"image": "thepot.jpg",
					"nutrition" : "thePotNutrition.jpg",
					"rew" : "Reviews \n",
					"review" : "2.5 out of 5 \nWe did not enjoy this recipie, Will Not make it again \n\n5 out of 5 \nThis dish is awesome, we had a dinner party last night I served this to our guests and the loved it. \n\n4 out of 5 \nGreat alternitive to gumbo, very easy to make. \n\n\n\n\n\n  "
					},
					{
					"name" : "Jalapeno Corn Bread",
					"time" : "Prep Time: 10 Minutes \nCook Time: 40 minutes\n ",
					"ing" : "Ingredients\n",
					"ingredients" : "2 Cups Flour, all purpose \n2 Cups Yellow Corn Meal \n8 tbl Sugar \n2 tbl Baking Powder \n1 tsp Salt \n4 Eggs \n2 Cups Buttermilk \n1/2 Cup Vegetable Oil \n1 Canned Cream Corn \n1/2 Cup - fine diced Yellow Onion ‣ 1/2 Cup - fine diced Red Pepper ‣ 2 Jalapeno Pepper minced\n ",
					"oIng" : "Optional Ingredients\n ",
					"optionalIngredients" : "Butter \nHoney\n ",
					"dir" : "Directions\n",
					"directions" : "1. Combine Creamed Corn, onion, pepper and Jalapeno in a small sauce pan\n2. Cook on a low heat for 10 minutes. or until onions are clear\n3. Combine remaining ingredients and mix completely.\n4. Stir in creamed corn mixture.\n5. Put mixture in an 11x14 baking pan\n6. Bake for 30 minutes.\n",
					"desc" : "Jalapeño Corn bread is a family favorite, wether eating it alone with butter and honey or along side of a main dish like Chili Con Carne. This corn bread is sure to please.\n",
					"color": "#731609",
					"image": "jalapenoCornBread.jpg",
					"nutrition" : "jalapenoNutrition.jpg",
					"rew" : "Reviews \n",
					"review" : "4 out of 5 \nThis recipie is easy to make and delicious \n\n3 out of 5 \nGood recipie, easy  \n\n4 out of 5 \nI love corn bread. \n\n\n\n\n\n  "
					},
					{
					"name" : "Tortilla Soup",
					"time" : "Prep Time: 10 Minutes \nCook Time: 2 Hours\n ",
					"ing" : "Ingredients\n",
					"ingredients" : "Garlic 2-3 spoons\n1 White onion diced\nGreen chillies whole 1 large can\nChicken bullion\nRotel tomatoes 1 can\nCumin 1tsp\nSalt 1 tsp\nChicken shredded 1-2 whole chickens\n ",
					"oIng" : "Optional Ingredients\n ",
					"optionalIngredients" : "Sourcream\nShredded cheese\nAvocado\nTortilla Chips\n ",
					"dir" : "Directions\n",
					"directions" : "1. In a large pot boil bullion, onion, garlic, green chilli, rotels, cumin, salt,\n2. Boil 1-2 hours or until chillies fall apart and become stringy.\n3. Add chicken after the first hour.\n",
					"desc" : "Tortilla soup is like Mexican meets Chicken Noodle,Very Spicy in flavor. When it comes to serving this soup there are a lot of options. crumbling chips is the most popular, and where the soup gets its name.\n",
					"color": "#DB4900",
					"image": "tortillaSoup.jpg",
					"nutrition" : "tortillaNutrition.jpg",
					"rew" : "Reviews \n",
					"review" : "5 out of 5 \nIt is the best \n\n4 out of 5 \nReminds me of chicken noodle soup\n\n5 out of 5 \nGreat with avacados \n\n\n\n\n\n  "
					},
					{
					"name" : "Chili Con Carne",
					"time" : "Prep Time: 10 Minutes \nCook Time: 2 Hours\n ",
					"ing" : "Ingredients\n",
					"ingredients" : "2 lbs Ground beef\n2 packages smoked sausage ‣ 3 tbs chilli pepper\n1 pinch salt or to taste\n1 tsp cumin\n1 tsp cumin\n1 green pepper\n1 white onion\n2-3 Tbs garlic or to taste\n2-3 large cans tomatoes or\n1-2 large cans kidney beans\n1-2 cans black beans\n ",
					"oIng" : "Optional Ingredients\n ",
					"optionalIngredients" : "Sour cream\nPinto beans\nCrackers\nShredded cheese\n ",
					"dir" : "Directions\n",
					"directions" : "1. Cook ground meat with all spices, and fresh vegetables until meat is brown.\n2. Add green chillies and chopped meat cook 2-3 min\n3. Add beans and tomatoes bring to a boil reduce heat and simmer at least 1 hour but up to 4\n",
					"desc" : "This Classic dish is a crowd pleaser, With almost as many ways to make it as there are number of people who like it. Here is our favorite way to make it. Enjoy it with sour cream cracker and shredded cheese.\n",
					"color": "#FF9600",
					"image": "chiliConCarne.jpg",
					"nutrition" : "chiliNutrition.jpg",
					"rew" : "Reviews \n",
					"review" : "4 out of 5 \nEasy and delicious\n\n2 out of 5 \nToo Spicy\n\n4 out of 5 \nWe really enjoyed this recipie  \n\n\n\n\n\n  "
					},
				]	
			}
	};
	
	
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
	var i = source;
	console.log(source);
	recipieWin = Ti.UI.createWindow({
	backgroundColor: ("#fff"),
	title : json.recipies.myRecipies[i].name
});
var recView = Ti.UI.createScrollView({
	title : source,
	backgroundColor : json.recipies.myRecipies[i].color,
	layout: "vertical",
	width: pageWidth,
	height: pageHeight + 50,// needed to make the page scroll past the bottom of the screen
	contentWidth: pageWidth,//needed to maintain horizontal view 
	showVerticalScrollIndicator: true,// needed to show scroll indicator
	top: 0
	
});
var recImage = Ti.UI.createImageView({
	image : "images/" + json.recipies.myRecipies[i].image,
	height : rowHeight,
	width : rowHeight,
	left : rightAlign,
	top : 30
});
var cookLabel = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].time,
	font: {fontSize: 20, fontFamily: "Avenir Next" },
	color: "white",
	top: 10,
	left : rightAlign
});
var descLabel = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].desc,
	font: {fontSize: 16, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
var ingLabel = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].ing,
	font: {fontSize: 20, fontFamily: "Avenir Next", fontStyle : "underline" },
	color: "white",
	left : rightAlign
	
});
var ing2Label = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].ingredients,
	font: {fontSize: 16, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
var oIngLabel = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].oIng,
	font: {fontSize: 20, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
var oIng2Label = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].optionalIngredients,
	font: {fontSize: 16, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
var dirLabel = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].dir,
	font: {fontSize: 20, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
var dir2Label = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].directions,
	font: {fontSize: 16, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
var nutrImage = Ti.UI.createImageView({
	image : "images/" + json.recipies.myRecipies[i].nutrition,
	height : pageWidth - 20 ,
	width : pageWidth - 20 ,
	});
var reviewLabel = Ti.UI.createLabel({
	text : json.recipies.myRecipies[i].rew,
	font: {fontSize: 20, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});

var review2Label = Ti.UI.createLabel ({
	text : json.recipies.myRecipies[i].review,
	font: {fontSize: 16, fontFamily: "Avenir Next" },
	color: "white",
	left : rightAlign
});
recView.add(recImage, cookLabel,descLabel, ingLabel, ing2Label, oIngLabel, oIng2Label, dirLabel, dir2Label,nutrImage,reviewLabel, review2Label);
recipieWin.add(recView);
navWindow.openWindow(recipieWin);
};	


	
// views for recipie options

//	Green Chili
var greenChili = Ti.UI.createView({
	title: "0",
	height: rowHeight,
	width: pageWidth,
	top : 0,
	backgroundColor: "#213B00"
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
	title: "1",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height,
	backgroundColor: "#679C00"
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
	title: "2",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height + thePot.height,
	backgroundColor: "#731609"
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
	title: "3",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height + thePot.height +jalapenoCornBread.height,
	backgroundColor: "#DB4900"
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
	title: "4",
	height: rowHeight,
	width: pageWidth,
	top : greenChili.height + thePot.height +jalapenoCornBread.height + tortillaSoup.height,
	backgroundColor: "#FF9600"
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