/***********************************************************************************
	Project 1: Physical and Mental Character Creator
	by Natalie Morris

 This program prompts the user with a series of personality quiz questions, asking
 them to reflect on who they are, what they value, and how they feel. With each
 answer, a new part of their character, a manifestation of their personality, is 
 created! 

 The character is made up of png files that are drawn on the screen through
 various functions after each question is answered. The answers can be clicked like
 buttons that use an object class to allow them to be clicked and functional. The 
 questions function as moodstates, which can be navigated through backwards and
 forwards as the user chooses.

***********************************************************************************/
// Button variables
var enterButton;
var continueButton;
var backButton;
var questionButton;

// Function variables
var drawFunction;
var drawNext;
var drawPrev;

// Question variables

	// Question 1
	var option1One;
	var option1Two;
	var option1Three;
	var option1Four;
	var option1Five;

	// Question 2
	var option2One;
	var option2Two;
	var option2Three;
	var option2Four;
	var option2Five;

	// Question 3
	var option3One;
	var option3Two;
	var option3Three;
	var option3Four;
	var option3Five;

	// Question 4
	var option4One;
	var option4Two;
	var option4Three;
	var option4Four;
	var option4Five;

	// Question 5
	var option5One;
	var option5Two;
	var option5Three;
	var option5Four;
	var option5Five;

	// Question 6
	var option6One;
	var option6Two;
	var option6Three;
	var option6Four;
	var option6Five;

	// Question 7
	var option7One;
	var option7Two;
	var option7Three;
	var option7Four;
	var option7Five;

	// Question 8
	var option8One;
	var option8Two;
	var option8Three;
	var option8Four;
	var option8Five;

	// Question 9
	var option9One;
	var option9Two;
	var option9Three;
	var option9Four;
	var option9Five;

	// Question 10
	var option10One;
	var option10Two;
	var option10Three;
	var option10Four;
	var option10Five;

	// Question 11
	var option11One;
	var option11Two;
	var option11Three;
	var option11Four;
	var option11Five;

// Question booleans

	// Question 1
	var option1OneSelected;
	var option1TwoSelected;
	var option1ThreeSelected;
	var option1FourSelected;
	var option1FiveSelected;

	// Question 2
	var option2OneSelected;
	var option2TwoSelected;
	var option2ThreeSelected;
	var option2FourSelected;
	var option2FiveSelected;

	// Question 3
	var option3OneSelected;
	var option3TwoSelected;
	var option3ThreeSelected;
	var option3FourSelected;
	var option3FiveSelected;

	// Question 4
	var option4OneSelected;
	var option4TwoSelected;
	var option4ThreeSelected;
	var option4FourSelected;
	var option4FiveSelected;

	// Question 5
	var option5OneSelected;
	var option5TwoSelected;
	var option5ThreeSelected;
	var option5FourSelected;
	var option5FiveSelected;

	// Question 6
	var option6OneSelected;
	var option6TwoSelected;
	var option6ThreeSelected;
	var option6FourSelected;
	var option6FiveSelected;

	// Question 7
	var option7OneSelected;
	var option7TwoSelected;
	var option7ThreeSelected;
	var option7FourSelected;
	var option7FiveSelected;

	// Question 8
	var option8OneSelected;
	var option8TwoSelected;
	var option8ThreeSelected;
	var option8FourSelected;
	var option8FiveSelected;

	// Question 9
	var option9OneSelected;
	var option9TwoSelected;
	var option9ThreeSelected;
	var option9FourSelected;
	var option9FiveSelected;

	// Question 10
	var option10OneSelected;
	var option10TwoSelected;
	var option10ThreeSelected;
	var option10FourSelected;
	var option10FiveSelected;

	// Question 11
	var option11OneSelected;
	var option11TwoSelected;
	var option11ThreeSelected;
	var option11FourSelected;
	var option11FiveSelected;

// Choice variables

	// Color
	var colorIsBlue;
	var colorIsBrown;
	var colorIsPink;
	var colorIsGreen;

	// Character selections
	var colorSelection;
	var hairSelection;
	var browSelection;
	var accSelection;
	var mouthSelection;
	var itemSelection;
	var eyeSelection;
	var bodySelection;
	var faceSelection;
	var clothesSelection;
	var backgroundSelection;

// Image variables

	// Hair variables
	var hairActions;
	var hairAppearance;
	var hairFeelings;
	var hairWords;

	// Brow variables
	var browAlive;
	var browCircle;
	var browFrown;
	var browSweet;

	// Accessories variables
	var accAlt;
	var accCool;
	var accCute;
	var accFresh;

	// Mouth variables
	var mouthCheese;
	var mouthFirm;
	var mouthSlant;
	var mouthSmile;

	// Item variables
	var itemBooks;
	var itemChat;
	var itemCreative;
	var itemFood;
	var itemShop;
	var itemGames;

	// Eye variables
	var eyeBright;
	var eyeHeart;
	var eyeRelaxed;
	var eyeStar;

	// Body variables
	var bodyBase;
	var blank;

		// Blue
		var bodyWatchBlue;
		var bodyWaveBlue;
		var bodyWorkBlue;
		// Brown
		var bodyWatchBrown;
		var bodyWaveBrown;
		var bodyWorkBrown;
		// Pink
		var bodyWatchPink;
		var bodyWavePink;
		var bodyWorkPink;
		// Green
		var bodyWatchGreen;
		var bodyWaveGreen;
		var bodyWorkGreen;

	// Face variables

		// Blue
		var faceBlob;
		var faceCircle;
		var faceHeart;
		var faceSun;
		// Brown
		var faceBlobBrown;
		var faceCircleBrown;
		var faceHeartBrown;
		var faceSunBrown;
		// Pink
		var faceBlobPink;
		var faceCirclePink;
		var faceHeartPink;
		var faceSunPink;
		// Green
		var faceBlobGreen;
		var faceCircleGreen;
		var faceHeartGreen;
		var faceSunGreen;
		// Face booleans
		var faceIsBlob;
		var faceIsCircle;
		var faceIsSun;
		var faceIsHeart;

	// Clothes variables
	var clothesBase;
	var clothesBusy;
	var clothesClean;
	var clothesComfort;
	var clothesSoothing;

	// Background variables

		// City
		var cityGlow;
		var cityNight;
		// Garden
		var gardenMoss;
		var gardenSheep;
		var gardenFlowers;
		// Simple
		var simpleBeige;
		var simpleBlue;
		var simpleGreen;
		var simpleCouch;
		// Off the grid
		var gridMount;

	// Interface variables
	var windowBig;
	var windowSmall;
	var windowFolder;
	var windowContinue;
	var windowBack;
	var windowQuestions;
	var questionBox;
	var questionCheck;

// Load all images
function preload() {
	
	// Hair assets
	hairActions = loadImage('assets/hair/actions.png');
	hairAppearance = loadImage('assets/hair/appearance.png');
	hairFeelings = loadImage('assets/hair/feelings.png');
	hairWords = loadImage('assets/hair/words.png');

	// Brow assets
	browAlive = loadImage('assets/brow/alive.png');
	browCircle = loadImage('assets/brow/circle.png');
	browFrown = loadImage('assets/brow/frown.png');
	browSweet = loadImage('assets/brow/sweet.png');

	// Accessories assets
	accAlt = loadImage('assets/accessories/alt.png');
	accCool = loadImage('assets/accessories/cool.png');
	accCute = loadImage('assets/accessories/cute.png');
	accFresh = loadImage('assets/accessories/fresh.png');

	// Mouth assets
	mouthCheese = loadImage('assets/mouth/cheese.png');
	mouthFirm = loadImage('assets/mouth/firm.png');
	mouthSlant = loadImage('assets/mouth/slant.png');
	mouthSmile = loadImage('assets/mouth/smile.png');

	// Item assets
	itemBooks = loadImage('assets/items/books.png');
	itemChat = loadImage('assets/items/chat.png');
	itemCreative = loadImage('assets/items/creative.png');
	itemFood = loadImage('assets/items/food.png');
	itemShop = loadImage('assets/items/shop.png');
	itemGames = loadImage('assets/items/videogame.png');

	// Eye assets
	eyeBright = loadImage('assets/eyes/bright.png');
	eyeHeart = loadImage('assets/eyes/heart.png');
	eyeRelaxed = loadImage('assets/eyes/relaxed.png');
	eyeStar = loadImage('assets/eyes/star.png');

	// Body assets
	bodyBase = loadImage('assets/body/shoulders.png');
	blank = loadImage('assets/body/blank.png');
	bodyWatchBlue = loadImage('assets/body/watch/blue.png');
	bodyWaveBlue = loadImage('assets/body/wave/blue.png');
	bodyWorkBlue = loadImage('assets/body/work/blue.png');
	bodyWatchBrown = loadImage('assets/body/watch/brown.png');
	bodyWaveBrown = loadImage('assets/body/wave/brown.png');
	bodyWorkBrown = loadImage('assets/body/work/brown.png');
	bodyWatchPink = loadImage('assets/body/watch/pink.png');
	bodyWavePink = loadImage('assets/body/wave/pink.png');
	bodyWorkPink = loadImage('assets/body/work/pink.png');
	bodyWatchGreen = loadImage('assets/body/watch/green.png');
	bodyWaveGreen = loadImage('assets/body/wave/green.png');
	bodyWorkGreen = loadImage('assets/body/work/green.png');

	// Face assets
	faceBlob = loadImage('assets/face/blob/blue.png');
	faceCircle = loadImage('assets/face/circle/blue.png');
	faceHeart = loadImage('assets/face/heart/blue.png');
	faceSun = loadImage('assets/face/sun/blue.png');
	faceBlobBrown = loadImage('assets/face/blob/brown.png');
	faceCircleBrown = loadImage('assets/face/circle/brown.png');
	faceHeartBrown = loadImage('assets/face/heart/brown.png');
	faceSunBrown = loadImage('assets/face/sun/brown.png');
	faceBlobPink = loadImage('assets/face/blob/pink.png');
	faceCirclePink = loadImage('assets/face/circle/pink.png');
	faceHeartPink = loadImage('assets/face/heart/pink.png');
	faceSunPink = loadImage('assets/face/sun/pink.png');
	faceBlobGreen = loadImage('assets/face/blob/green.png');
	faceCircleGreen = loadImage('assets/face/circle/green.png');
	faceHeartGreen = loadImage('assets/face/heart/green.png');
	faceSunGreen = loadImage('assets/face/sun/green.png');

	// Clothes assets
	clothesBase = loadImage('assets/clothes/clothesbase.png');
	clothesBusy = loadImage('assets/clothes/busy.png');
	clothesClean = loadImage('assets/clothes/clean.png');
	clothesComfort = loadImage('assets/clothes/comfortable.png');
	clothesSoothing = loadImage('assets/clothes/soothing.png');

	// Background assets
	cityGlow = loadImage('assets/background/city/glowcity.png');
	cityNight = loadImage('assets/background/city/nightcity.png');
	gardenMoss = loadImage('assets/background/garden/moss.png');
	gardenSheep = loadImage('assets/background/garden/sheep.png');
	gardenFlowers = loadImage('assets/background/garden/sheep.png');
	simpleBeige = loadImage('assets/background/simple/beige.png');
	simpleBlue = loadImage('assets/background/simple/blue.png');
	simpleGreen = loadImage('assets/background/simple/darkgreen.png');
	simpleCouch = loadImage('assets/background/simple/couch.png');
	gridMount = loadImage('assets/background/grid/mountains.png');

	// Interface assets
	windowBig = loadImage('assets/interface/bigwindow.png');
	windowSmall = loadImage('assets/interface/smallwindow.png');
	windowFolder = loadImage('assets/interface/folder.png');
	windowOpenFolder = loadImage('assets/interface/openfolder.png');
	windowContinue = loadImage('assets/interface/continue.png');
	windowBack = loadImage('assets/interface/back.png');
	windowQuestions = loadImage('assets/interface/questionwindow.png');
	questionBox = loadImage('assets/interface/question.png');
	questionCheck = loadImage('assets/interface/questionchecked.png');

	// Font
	neueHaasGrotesk = loadFont('assets/NeueHaasGroteskTX.ttf');
}

// Build canvas and centers images and text
function setup() {
	createCanvas(1500, 800);
	imageMode(CENTER);
	textAlign(CENTER);
	textFont(neueHaasGrotesk);
	textSize(13);
	textLeading(20);

	// Set startup page to splash page
	drawFunction = drawSplash;

	// Default character drawn
	hairSelection = hairActions;
	browSelection = browAlive;
	accSelection = accCool;
	mouthSelection = mouthCheese;
	itemSelection = itemChat;
	eyeSelection = eyeBright;
	bodySelection = bodyWatchBlue;
	faceSelection = faceBlob;
	clothesSelection = clothesComfort;
	backgroundSelection = simpleCouch;
	faceIsBlob = true;

	// Default booleans for question 1 set to false
	option1OneSelected = false;
	option1TwoSelected = false;
	option1ThreeSelected = false;
	option1FourSelected = false;
	option1FiveSelected = false;

	// Default booleans for question 2 set to false
	option2OneSelected = false;
	option2TwoSelected = false;
	option2ThreeSelected = false;
	option2FourSelected = false;
	option2FiveSelected = false;

	// Default booleans for question 3 set to false
	option3OneSelected = false;
	option3TwoSelected = false;
	option3ThreeSelected = false;
	option3FourSelected = false;
	option3FiveSelected = false;

	// Default booleans for question 4 set to false
	option4OneSelected = false;
	option4TwoSelected = false;
	option4ThreeSelected = false;
	option4FourSelected = false;
	option4FiveSelected = false;

	// Default booleans for question 5 set to false
	option5OneSelected = false;
	option5TwoSelected = false;
	option5ThreeSelected = false;
	option5FourSelected = false;
	option5FiveSelected = false;

	// Default booleans for question 6 set to false
	option6OneSelected = false;
	option6TwoSelected = false;
	option6ThreeSelected = false;
	option6FourSelected = false;
	option6FiveSelected = false;

	// Default booleans for question 7 set to false
	option7OneSelected = false;
	option7TwoSelected = false;
	option7ThreeSelected = false;
	option7FourSelected = false;
	option7FiveSelected = false;

	// Default booleans for question 8 set to false
	option8OneSelected = false;
	option8TwoSelected = false;
	option8ThreeSelected = false;
	option8FourSelected = false;
	option8FiveSelected = false;

	// Default booleans for question 9 set to false
	option9OneSelected = false;
	option9TwoSelected = false;
	option9ThreeSelected = false;
	option9FourSelected = false;
	option9FiveSelected = false;

	// Default booleans for question 10 set to false
	option10OneSelected = false;
	option10TwoSelected = false;
	option10ThreeSelected = false;
	option10FourSelected = false;
	option10FiveSelected = false;

	// Default booleans for question 11 set to false
	option11OneSelected = false;
	option11TwoSelected = false;
	option11ThreeSelected = false;
	option11FourSelected = false;
	option11FiveSelected = false;

	// Create buttons
	makeEnterButton();
	makeContinueButton();
	makeBackButton();
	makeQuestion1Button();
	makeQuestion2Button();
	makeQuestion3Button();
	makeQuestion4Button();
	makeQuestion5Button();
	makeQuestion6Button();
	makeQuestion7Button();
	makeQuestion8Button();
	makeQuestion9Button();
	makeQuestion10Button();
 }


// Calls functions to draw png files
function draw() {
	background(255);

	// Draws function
	drawFunction();
}

// Allow folder on splash page to open on hover and enter the page
function makeEnterButton() {
	// Create clickable enter button object
	enterButton = new Clickable();

	// Make the enter button the closed folder
	enterButton.image = windowFolder;
	enterButton.width = windowFolder.width;
	enterButton.height = windowFolder.height;

	// Move the button to middle of the screen
	enterButton.locate(windowWidth / 2 - windowFolder.width / 2, windowHeight / 2 
		- windowFolder.height / 2);

	// Allow enter button folder to open and close on hover and enter site
	enterButton.onHover = enterButtonHover;
	enterButton.onPress = enterButtonPressed;
	enterButton.onOutside = enterButtonOnOutside;
}

// Folder opens on hover
enterButtonHover = function() {
	enterButton.image = windowOpenFolder;
}

// Enters site
enterButtonPressed = function() {
	drawFunction = drawWindow;
}

// Folder closes when not hovering on top of folder
enterButtonOnOutside = function() {
	enterButton.image = windowFolder;
}

// Allow continue box to navigate to the next page
function makeContinueButton() {
	// Create clickable continue button
	continueButton = new Clickable();

	// Make the continue button the continue box
	continueButton.image = windowContinue;
	continueButton.width = windowContinue.width;
	continueButton.height = windowContinue.height;

	// Default placement moves the button to middle of the screen
	continueButton.locate(width / 2 - windowContinue.width / 2, height / 2 
		- windowContinue.height / 2);

	continueButton.onPress = continueButtonPressed;
}

// When the continue button is pressed, it goes to the next page
continueButtonPressed = function() {
	drawFunction = drawNext;
}

// Allow back box to navigate to the previous page
function makeBackButton() {
	// Create clickable back button
	backButton = new Clickable();

	// Make the back button the back box
	backButton.image = windowBack;
	backButton.width = windowBack.width;
	backButton.height = windowBack.height;

	// Default placement moves the button to middle of the screen
	backButton.locate(width / 2 - windowContinue.width / 2, height / 2 
		- windowContinue.height / 2);

	backButton.onPress = backButtonPressed;
}

// Back button goes to previous page
backButtonPressed = function() {
	drawFunction = drawPrev;
}

// Draws splash page with enter button folder
drawSplash = function() {
	enterButton.draw();
}

// Draws instructions window
drawWindow = function() {
	// Draw small window png
	image(windowSmall, windowWidth / 2, windowHeight / 2);

	// Write instructions
	text('Welcome to the Physical and Mental Character Creator! \n \n You will now be prompted with a series of questions. \n \n Click on the answer that suits you best, and the program \n will generate you a character based on your personality!', 
		windowWidth / 2, windowHeight / 2 - height / 10);

	// Configure the next page when continue button is pressed
	drawNext = drawColor;

	// Move the continue button to the middle below instructions
	continueButton.locate(windowWidth / 2 - windowContinue.width / 2, 
		windowHeight / 2 - windowContinue.height / 2 + windowContinue.width);

	// Draw the continue button
	continueButton.draw();
}

// Draw the page with the color selection
drawColor = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the middle below instructions
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("How do you describe yourself?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option1One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option1One.draw();

	text("I'm bright!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option1Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option1Two.draw();

	text("I'm cool-toned.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option1Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option1Three.draw();

	text("I'm warm!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option1Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option1Four.draw();

	text("I'm a mix.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 turns the skin pink
	if (option1OneSelected) {
		if (faceIsBlob) {
			faceSelection = faceBlobPink;
		}
		if (faceIsHeart) {
			faceSelection = faceHeartPink;
		}
		if (faceIsCircle) {
			faceSelection = faceCirclePink;
		}
		if (faceIsSun) {
			faceSelection = faceSunPink;
		}
		bodySelection = bodyWatchPink;
		colorIsPink = true;
	}

	// Option 2 turns the skin blue
	if (option1TwoSelected) {
		if (faceIsBlob) {
			faceSelection = faceBlob;
		}
		if (faceIsHeart) {
			faceSelection = faceHeart;
		}
		if (faceIsCircle) {
			faceSelection = faceCircle;
		}
		if (faceIsSun) {
			faceSelection = faceSun;
		}
		bodySelection = bodyWatchBlue;
		colorIsBlue = true;
	}

	// Option 3 turns the skin brown
	if (option1ThreeSelected) {
		if (faceIsBlob) {
			faceSelection = faceBlobBrown;
		}
		if (faceIsHeart) {
			faceSelection = faceHeartBrown;
		}
		if (faceIsCircle) {
			faceSelection = faceCircleBrown;
		}
		if (faceIsSun) {
			faceSelection = faceSunBrown;
		}
		bodySelection = bodyWatchBrown;
		colorSelection = colorIsBrown;
		colorIsBrown = true;
	}

	// Option 4 turns the skin green
	if (option1FourSelected) {
		if (faceIsBlob) {
			faceSelection = faceBlobGreen;
		}
		else if (faceIsHeart) {
			faceSelection = faceHeartGreen;
		}
		else if (faceIsCircle) {
			faceSelection = faceCircleGreen;
		}
		else if (faceIsSun) {
			faceSelection = faceSunGreen;
		}
		bodySelection = bodyWatchGreen;
		colorSelection = colorIsGreen;
		colorIsGreen = true;
	}

	// Color moves to the face
	drawNext = drawFace;
}

drawFace = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What do you think about?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option2One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option2One.draw();

	text("The past.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option2Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option2Two.draw();

	text("The present.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option2Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option2Three.draw();

	text("The future.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option2Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option2Four.draw();

	text("All of the above!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 turns the face into a heart
	if (option2OneSelected) {
		if (colorIsBlue) {
			faceSelection = faceHeart;
			faceIsHeart = true;
		}

		else if (colorIsPink) {
			faceSelection = faceHeartPink;
			faceIsHeart = true;
		}

		else if (colorIsBrown) {
			faceSelection = faceHeartBrown;
			faceIsHeart = true;
		}

		else if (colorIsGreen) {
			faceSelection = faceHeartGreen;
			faceIsHeart = true;
		}
	}

	// Option 2 turns the face into a circle
	if (option2TwoSelected) {
		if (colorIsBlue) {
			faceSelection = faceCircle;
			faceIsCircle = true;
		}

		else if (colorIsPink) {
			faceSelection = faceCirclePink;
			faceIsCircle = true;
		}

		else if (colorIsBrown) {
			faceSelection = faceCircleBrown;
			faceIsCircle = true;
		}

		else if (colorIsGreen) {
			faceSelection = faceCircleGreen;
			faceIsCircle = true;
		}
	}

	// Option 3 turns the face into a sun
	if (option2ThreeSelected) {
		if (colorIsBlue) {
			faceSelection = faceSun;
			faceIsSun = true;
		}

		else if (colorIsPink) {
			faceSelection = faceSunPink;
			faceIsSun = true;
		}

		else if (colorIsBrown) {
			faceSelection = faceSunBrown;
			faceIsSun = true;
		}

		else if (colorIsGreen) {
			faceSelection = faceSunGreen;
			faceIsSun = true;
		}
	}

	// Option 4 turns the face into a blob
	if (option2FourSelected) {
		if (colorIsBlue) {
			faceSelection = faceBlob;
			faceIsBlob = true;
		}

		else if (colorIsPink) {
			faceSelection = faceBlobPink;
			faceIsBlob = true;
		}

		else if (colorIsBrown) {
			faceSelection = faceBlobBrown;
			faceIsBlob = true;
		}

		else if (colorIsGreen) {
			faceSelection = faceBlobGreen;
			faceIsBlob = true;
		}
	}

	// Face moves to the eyes
	drawNext = drawEyes;

	// Color comes before the face
	drawPrev = drawColor;
}

drawEyes = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What makes you most happy?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option3One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option3One.draw();

	text("Creating or working hard!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option3Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option3Two.draw();

	text("Relaxing!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option3Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option3Three.draw();

	text("Learning new things, seeing new sights.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option3Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option3Four.draw();

	text("Being around the people I love.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 turns the eyes into stars
	if (option3OneSelected) {
		eyeSelection = eyeStar;
	}

	// Option 2 turns the eyes into droopy eyes
	if (option3TwoSelected) {
		eyeSelection = eyeRelaxed;
	}

	// Option 3 turns the eyes into big eyes
	if (option3ThreeSelected) {
		eyeSelection = eyeBright;
	}

	// Option 4 turns the eyes into hearts
	if (option3FourSelected) {
		eyeSelection = eyeHeart;
	}

	// Eyes moves to the brows
	drawNext = drawBrows;

	// Face comes before the eyes
	drawPrev = drawFace;
}

drawBrows = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What makes you most nostalgic?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option4One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option4One.draw();

	text("Listening to old music.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option4Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option4Two.draw();

	text("Smelling the perfume a family member used to wear.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option4Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option4Three.draw();

	text("Reminiscing on what I've accomplished.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option4Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option4Four.draw();

	text("Looking at old home videos with friends or family.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 turns the brows into circles
	if (option4OneSelected) {
		browSelection = browCircle;
	}

	// Option 2 turns the brows into sad brows
	if (option4TwoSelected) {
		browSelection = browSweet;
	}

	// Option 3 turns the brows into frowning brows
	if (option4ThreeSelected) {
		browSelection = browFrown;
	}

	// Option 4 turns the brows into alive brows
	if (option4FourSelected) {
		browSelection = browAlive;
	}

	// Brows moves to the mouth
	drawNext = drawMouth;

	// Eyes comes before the brows
	drawPrev = drawEyes;
}

drawMouth = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("To you, what is the meaning of life?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option5One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option5One.draw();

	text("I absolutely do not have one.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option5Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option5Two.draw();

	text("To be happy? Successful? Satisfied?", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option5Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option5Three.draw();

	text("Make meaningful relationships!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option5Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option5Four.draw();

	text("Achieve my goals and make a change.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 turns the mouth into a slant
	if (option5OneSelected) {
		mouthSelection = mouthSlant;
	}

	// Option 2 turns the mouth into a smile
	if (option5TwoSelected) {
		mouthSelection = mouthSmile;
	}

	// Option 3 turns the brows into cheesey smile
	if (option5ThreeSelected) {
		mouthSelection = mouthCheese;
	}

	// Option 4 turns the brows into a firm mouth
	if (option5FourSelected) {
		mouthSelection = mouthFirm;
	}

	// Mouth moves to accessories
	drawNext = drawAcc;

	// Brows come before the mouth
	drawPrev = drawAcc;
}

drawAcc = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What adjectives do you feel drawn to?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option6One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option6One.draw();

	text("Cute and charming.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option6Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option6Two.draw();

	text("Fresh and simple.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option6Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option6Three.draw();

	text("Cool and fun.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option6Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option6Four.draw();

	text("Unique and alternative.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 creates blushy cheeks
	if (option6OneSelected) {
		accSelection = accCute;
	}

	// Option 2 creates a plant
	if (option6TwoSelected) {
		accSelection = accFresh;
	}

	// Option 3 creates sunglasses
	if (option6ThreeSelected) {
		accSelection = accCool;
	}

	// Option 4 creates piercings
	if (option6FourSelected) {
		accSelection = accAlt;
	}

	// Accessories move to the body
	drawNext = drawBody;

	// Mouth come before the accessories
	drawPrev = drawMouth;
}

drawBody = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What do you wish you were doing right now?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option7One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option7One.draw();

	text("Getting something done and being productive!", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option7Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option7Two.draw();

	text("Watching a really good show or a movie in a comfy bed.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option7Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option7Three.draw();

	text("Going to meet up with friends at my favorite place.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option7Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option7Four.draw();

	text("Nothing! I just want some free time.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 makes productive hands
	if (option7OneSelected) {
		if (colorIsBlue) {
			bodySelection = bodyWorkBlue;
		}

		else if (colorIsPink) {
			bodySelection = bodyWorkPink;
		}

		else if (colorIsBrown) {
			bodySelection = bodyWorkBrown;
		}

		else if (colorIsGreen) {
			bodySelection = bodyWorkGreen;
		}
	}

	// Option 2 makes hands for watching something
	if (option7TwoSelected) {
		if (colorIsBlue) {
			bodySelection = bodyWatch;
		}

		else if (colorIsPink) {
			bodySelection = bodyWatchPink;
		}

		else if (colorIsBrown) {
			bodySelection = bodyWatchBrown;
		}

		else if (colorIsGreen) {
			bodySelection = bodyWatchGreen;
		}
	}

	// Option 3 makes hands for waving to friends
	if (option7ThreeSelected) {
		if (colorIsBlue) {
			bodySelection = bodyWaveBlue;
		}

		else if (colorIsPink) {
			bodySelection = bodyWavePink;
		}

		else if (colorIsBrown) {
			bodySelection = bodyWaveBrown;
		}

		else if (colorIsGreen) {
			bodySelection = bodyWaveGreen;
		}
	}

	// Option 4 leaves hands at the sides
	if (option7FourSelected) {
		if (!faceIsSun) {
			bodySelection = bodyBase;
		}
		else {
			bodySelection = blank;
		}
	}

	// Clothes come after the body
	drawNext = drawClothes;

	// Accessories comes before the body
	drawPrev = drawAcc;
}

drawClothes = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	textAlign(LEFT);

	// Draw question
	text("What do you want to surround yourself with?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option8One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option8One.draw();

	text("Things that are stimulating, busy, and exciting.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option8Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option8Two.draw();

	text("Things that are comfortable, homey, and familiar.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option8Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option8Three.draw();

	text("Things that are quiet, calm, and soothing.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option8Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option8Four.draw();

	text("Things that are clean and structured.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 makes the shirt into a busy pattern
	if (option8OneSelected) {
		clothesSelection = clothesBusy;
	}

	// Option 2 makes the shirt into a comfy sweater
	if (option8TwoSelected) {
		clothesSelection = clothesComfort;
	}

	// Option 3 makes the shirt a solid color
	if (option8ThreeSelected) {
		clothesSelection = clothesSoothing;
	}

	// Option 4 makes the shirt striped
	if (option8FourSelected) {
		clothesSelection = clothesClean;
	}

	// Items come after clothes
	drawNext = drawItems;

	// Body comes before clothes
	drawPrev = drawBody;
}

drawItems = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What do you like to do in your free time?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option9One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option9One.draw();

	text("I like to draw, paint, craft, or create.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option9Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option9Two.draw();

	text("I like to play video games or surf the web.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option9Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option9Three.draw();

	text("I like to chat with people.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option9Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option9Four.draw();

	text("I like to read or learn new things.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 surrounds the user with crafty items
	if (option9OneSelected) {
		itemSelection = itemCreative;
	}

	// Option 2 surrounds the user with technology
	if (option9TwoSelected) {
		itemSelection = itemGames;
	}

	// Option 3 surrounds the user with chat bubbles
	if (option9ThreeSelected) {
		itemSelection = itemChat;
	}

	// Option 4 surrounds the user with books
	if (option9FourSelected) {
		itemSelection = itemBooks;
	}

	// Background comes after items
	drawNext = drawBackground;

	// Clothes come before items
	drawPrev = drawItems;
}

drawBackground = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	// Text is aligned left for questions and answer options
	textAlign(LEFT);

	// Draw question
	text("What escapist lifestyle sounds the most appealing?", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Draw option 1
	option10One.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.6);
	option10One.draw();

	text("Living on a farm with some animals or tending to a garden.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 145);

	// Draw option 2
	option10Two.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.85);
	option10Two.draw();

	text("Going off the grid and traveling wherever I want.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 122);

	// Draw option 3
	option10Three.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.2);
	option10Three.draw();

	text("Moving to a brand new city where no one knows me.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 100);

	// Draw option 4
	option10Four.locate(width / 2 + windowQuestions.width / 2 - 20, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 2.7);
	option10Four.draw();

	text("Just living a simple, stress-free life in a familiar place.", width / 2 + windowQuestions.width / 2 + 10, 
		height / 2 - windowQuestions.height / 2 - 78);

	// Option 1 puts the user in a garden
	if (option10OneSelected) {
		backgroundSelection = gardenFlowers;
	}

	// Option 2 puts the user off the grid
	if (option10TwoSelected) {
		backgroundSelection = gridMount;
	}

	// Option 3 puts the user in a city
	if (option10ThreeSelected) {
		backgroundSelection = cityNight;
	}

	// Option 4 puts the user in a green color
	if (option10FourSelected) {
		backgroundSelection = simpleGreen;
	}

	// All done! Move to finished page
	drawNext = drawDone;

	// Items come before background
	drawPrev = drawItems;
}

// When character is done, prompt user to close the window and take a picture
drawDone = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();

	// Draws window with questions inside
	image(windowQuestions, width / 2 + width / 3.2, height / 2 - height / 3.2);

	// Move the continue button to the bottom right corner of the questions window
	continueButton.locate(width / 2 + windowQuestions.width / 2 + 300, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the continue button
	continueButton.draw();

	// Move the back button to the left of the continue button
	backButton.locate(width / 2 + windowQuestions.width / 2 + 170, 
		height / 2 - windowQuestions.height / 2 - 65);

	// Draw the back button
	backButton.draw();

	textAlign(LEFT);

	// Draw question
	text("You're all done! Press the continue button to close this window.\nFeel free to take a screenshot!", width / 2 + windowQuestions.width / 2 - 10, 
		height / 2 - windowQuestions.height / 2 - windowQuestions.height / 1.45);

	// Move to picture page with no window
	drawNext = drawPicture;

	// Background comes before finished page
	drawPrev = drawBackground;
}

// Small window is not displayed so character is in full view
drawPicture = function() {
	// Draw big window png
	image(windowBig, width / 2, height / 2);

	// Updates character
	drawCharacter();
}

// Draws character according to selection
function drawCharacter() {
	// Draw background
	image(backgroundSelection, width / 2, height / 2);

	// Draw clothes
	image(clothesSelection, width / 2, height / 2);

	// Shoulders are always present
	image(bodyBase, width / 2, height / 2);

	// Draw face
	image(faceSelection, width / 2, height / 2);

	// Draw hair
	image(hairSelection, width / 2, height / 2);

	// Draw eyes
	image(eyeSelection,  width / 2, height / 2);

	// Draw brows
	image(browSelection, width / 2, height / 2);

	// Draw accessories
	image(accSelection, width / 2, height / 2);

	// Draw items
	image(itemSelection, width / 2, height / 2);

	// Draw body
	image(bodySelection, width / 2, height / 2);

	// Draw mouth
	image(mouthSelection, width / 2, height / 2);
}

// Question 1 button code
function makeQuestion1Button() {
	// Create option #1
	option1One = new Clickable();

	// Make the question button the question box
	option1One.image = questionBox;
	option1One.width = questionBox.width;
	option1One.height = questionBox.height;
	option1One.onPress = option1OnePressed;

	// Create option #2
	option1Two = new Clickable();

	// Make the question button the question box
	option1Two.image = questionBox;
	option1Two.width = questionBox.width;
	option1Two.height = questionBox.height;
	option1Two.onPress = option1TwoPressed;

	// Create option #3
	option1Three = new Clickable();

	// Make the question button the question box
	option1Three.image = questionBox;
	option1Three.width = questionBox.width;
	option1Three.height = questionBox.height;
	option1Three.onPress = option1ThreePressed;

	// Create option #4
	option1Four = new Clickable();

	// Make the question button the question box
	option1Four.image = questionBox;
	option1Four.width = questionBox.width;
	option1Four.height = questionBox.height;
	option1Four.onPress = option1FourPressed;

	// Create option #5
	option1Five = new Clickable();

	// Make the question button the question box
	option1Five.image = questionBox;
	option1Five.width = questionBox.width;
	option1Five.height = questionBox.height;
	option1Five.onPress = option1FivePressed;
}

option1OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option1TwoSelected) && (!option1ThreeSelected) && (!option1FourSelected) 
		&& (!option1FiveSelected) ) {
		option1One.image = questionCheck;
		option1OneSelected = true;
	}
}

option1TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option1OneSelected) && (!option1ThreeSelected) && (!option1FourSelected) 
		&& (!option1FiveSelected) ) {
		option1Two.image = questionCheck;
		option1TwoSelected = true;
	}	
}

option1ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option1TwoSelected) && (!option1OneSelected) && (!option1FourSelected) 
		&& (!option1FiveSelected) ) {
		option1Three.image = questionCheck;
		option1ThreeSelected = true;
	}
}

option1FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option1TwoSelected) && (!option1OneSelected) && (!option1ThreeSelected) 
		&& (!option1FiveSelected) ) {
		option1Four.image = questionCheck;
		option1FourSelected = true;
	}
}

option1FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option1TwoSelected) && (!option1OneSelected) && (!option1ThreeSelected) 
		&& (!option1FourSelected) ) {
		option1Five.image = questionCheck;
		option1FiveSelected = true;
	}
}

// Question 2 button code
function makeQuestion2Button() {
	// Create option #1
	option2One = new Clickable();

	// Make the question button the question box
	option2One.image = questionBox;
	option2One.width = questionBox.width;
	option2One.height = questionBox.height;
	option2One.onPress = option2OnePressed;

	// Create option #2
	option2Two = new Clickable();

	// Make the question button the question box
	option2Two.image = questionBox;
	option2Two.width = questionBox.width;
	option2Two.height = questionBox.height;
	option2Two.onPress = option2TwoPressed;

	// Create option #3
	option2Three = new Clickable();

	// Make the question button the question box
	option2Three.image = questionBox;
	option2Three.width = questionBox.width;
	option2Three.height = questionBox.height;
	option2Three.onPress = option2ThreePressed;

	// Create option #4
	option2Four = new Clickable();

	// Make the question button the question box
	option2Four.image = questionBox;
	option2Four.width = questionBox.width;
	option2Four.height = questionBox.height;
	option2Four.onPress = option2FourPressed;

	// Create option #5
	option2Five = new Clickable();

	// Make the question button the question box
	option2Five.image = questionBox;
	option2Five.width = questionBox.width;
	option2Five.height = questionBox.height;
	option2Five.onPress = option2FivePressed;
}

option2OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option2TwoSelected) && (!option2ThreeSelected) && (!option2FourSelected) 
		&& (!option2FiveSelected) ) {
		option2One.image = questionCheck;
		option2OneSelected = true;
	}
}

option2TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option2OneSelected) && (!option2ThreeSelected) && (!option2FourSelected) 
		&& (!option2FiveSelected) ) {
		option2Two.image = questionCheck;
		option2TwoSelected = true;
	}	
}

option2ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option2TwoSelected) && (!option2OneSelected) && (!option2FourSelected) 
		&& (!option2FiveSelected) ) {
		option2Three.image = questionCheck;
		option2ThreeSelected = true;
	}
}

option2FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option2TwoSelected) && (!option2OneSelected) && (!option2ThreeSelected) 
		&& (!option2FiveSelected) ) {
		option2Four.image = questionCheck;
		option2FourSelected = true;
	}
}

option2FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option2TwoSelected) && (!option2OneSelected) && (!option2ThreeSelected) 
		&& (!option2FourSelected) ) {
		option2Five.image = questionCheck;
		option2FiveSelected = true;
	}
}

// Question 3 button code
function makeQuestion3Button() {
	// Create option #1
	option3One = new Clickable();

	// Make the question button the question box
	option3One.image = questionBox;
	option3One.width = questionBox.width;
	option3One.height = questionBox.height;
	option3One.onPress = option3OnePressed;

	// Create option #2
	option3Two = new Clickable();

	// Make the question button the question box
	option3Two.image = questionBox;
	option3Two.width = questionBox.width;
	option3Two.height = questionBox.height;
	option3Two.onPress = option3TwoPressed;

	// Create option #3
	option3Three = new Clickable();

	// Make the question button the question box
	option3Three.image = questionBox;
	option3Three.width = questionBox.width;
	option3Three.height = questionBox.height;
	option3Three.onPress = option3ThreePressed;

	// Create option #4
	option3Four = new Clickable();

	// Make the question button the question box
	option3Four.image = questionBox;
	option3Four.width = questionBox.width;
	option3Four.height = questionBox.height;
	option3Four.onPress = option3FourPressed;

	// Create option #5
	option3Five = new Clickable();

	// Make the question button the question box
	option3Five.image = questionBox;
	option3Five.width = questionBox.width;
	option3Five.height = questionBox.height;
	option3Five.onPress = option3FivePressed;
}

option3OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option3TwoSelected) && (!option3ThreeSelected) && (!option3FourSelected) 
		&& (!option3FiveSelected) ) {
		option3One.image = questionCheck;
		option3OneSelected = true;
	}
}

option3TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option3OneSelected) && (!option3ThreeSelected) && (!option3FourSelected) 
		&& (!option3FiveSelected) ) {
		option3Two.image = questionCheck;
		option3TwoSelected = true;
	}	
}

option3ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option3TwoSelected) && (!option3OneSelected) && (!option3FourSelected) 
		&& (!option3FiveSelected) ) {
		option3Three.image = questionCheck;
		option3ThreeSelected = true;
	}
}

option3FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option3TwoSelected) && (!option3OneSelected) && (!option3ThreeSelected) 
		&& (!option3FiveSelected) ) {
		option3Four.image = questionCheck;
		option3FourSelected = true;
	}
}

option3FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option3TwoSelected) && (!option3OneSelected) && (!option3ThreeSelected) 
		&& (!option3FourSelected) ) {
		option3Five.image = questionCheck;
		option3FiveSelected = true;
	}
}

// Question 4 button code
function makeQuestion4Button() {
	// Create option #1
	option4One = new Clickable();

	// Make the question button the question box
	option4One.image = questionBox;
	option4One.width = questionBox.width;
	option4One.height = questionBox.height;
	option4One.onPress = option4OnePressed;

	// Create option #2
	option4Two = new Clickable();

	// Make the question button the question box
	option4Two.image = questionBox;
	option4Two.width = questionBox.width;
	option4Two.height = questionBox.height;
	option4Two.onPress = option4TwoPressed;

	// Create option #3
	option4Three = new Clickable();

	// Make the question button the question box
	option4Three.image = questionBox;
	option4Three.width = questionBox.width;
	option4Three.height = questionBox.height;
	option4Three.onPress = option4ThreePressed;

	// Create option #4
	option4Four = new Clickable();

	// Make the question button the question box
	option4Four.image = questionBox;
	option4Four.width = questionBox.width;
	option4Four.height = questionBox.height;
	option4Four.onPress = option4FourPressed;

	// Create option #5
	option4Five = new Clickable();

	// Make the question button the question box
	option4Five.image = questionBox;
	option4Five.width = questionBox.width;
	option4Five.height = questionBox.height;
	option4Five.onPress = option4FivePressed;
}

option4OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option4TwoSelected) && (!option4ThreeSelected) && (!option4FourSelected) 
		&& (!option4FiveSelected) ) {
		option4One.image = questionCheck;
		option4OneSelected = true;
	}
}

option4TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option4OneSelected) && (!option4ThreeSelected) && (!option4FourSelected) 
		&& (!option4FiveSelected) ) {
		option4Two.image = questionCheck;
		option4TwoSelected = true;
	}	
}

option4ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option4TwoSelected) && (!option4OneSelected) && (!option4FourSelected) 
		&& (!option4FiveSelected) ) {
		option4Three.image = questionCheck;
		option4ThreeSelected = true;
	}
}

option4FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option4TwoSelected) && (!option4OneSelected) && (!option4ThreeSelected) 
		&& (!option4FiveSelected) ) {
		option4Four.image = questionCheck;
		option4FourSelected = true;
	}
}

option4FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option4TwoSelected) && (!option4OneSelected) && (!option4ThreeSelected) 
		&& (!option4FourSelected) ) {
		option4Five.image = questionCheck;
		option4FiveSelected = true;
	}
}

// Question 4 button code
function makeQuestion4Button() {
	// Create option #1
	option4One = new Clickable();

	// Make the question button the question box
	option4One.image = questionBox;
	option4One.width = questionBox.width;
	option4One.height = questionBox.height;
	option4One.onPress = option4OnePressed;

	// Create option #2
	option4Two = new Clickable();

	// Make the question button the question box
	option4Two.image = questionBox;
	option4Two.width = questionBox.width;
	option4Two.height = questionBox.height;
	option4Two.onPress = option4TwoPressed;

	// Create option #3
	option4Three = new Clickable();

	// Make the question button the question box
	option4Three.image = questionBox;
	option4Three.width = questionBox.width;
	option4Three.height = questionBox.height;
	option4Three.onPress = option4ThreePressed;

	// Create option #4
	option4Four = new Clickable();

	// Make the question button the question box
	option4Four.image = questionBox;
	option4Four.width = questionBox.width;
	option4Four.height = questionBox.height;
	option4Four.onPress = option4FourPressed;

	// Create option #5
	option4Five = new Clickable();

	// Make the question button the question box
	option4Five.image = questionBox;
	option4Five.width = questionBox.width;
	option4Five.height = questionBox.height;
	option4Five.onPress = option4FivePressed;
}

option4OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option4TwoSelected) && (!option4ThreeSelected) && (!option4FourSelected) 
		&& (!option4FiveSelected) ) {
		option4One.image = questionCheck;
		option4OneSelected = true;
	}
}

option4TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option4OneSelected) && (!option4ThreeSelected) && (!option4FourSelected) 
		&& (!option4FiveSelected) ) {
		option4Two.image = questionCheck;
		option4TwoSelected = true;
	}	
}

option4ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option4TwoSelected) && (!option4OneSelected) && (!option4FourSelected) 
		&& (!option4FiveSelected) ) {
		option4Three.image = questionCheck;
		option4ThreeSelected = true;
	}
}

option4FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option4TwoSelected) && (!option4OneSelected) && (!option4ThreeSelected) 
		&& (!option4FiveSelected) ) {
		option4Four.image = questionCheck;
		option4FourSelected = true;
	}
}

option4FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option4TwoSelected) && (!option4OneSelected) && (!option4ThreeSelected) 
		&& (!option4FourSelected) ) {
		option4Five.image = questionCheck;
		option4FiveSelected = true;
	}
}

// Question 5 button code
function makeQuestion5Button() {
	// Create option #1
	option5One = new Clickable();

	// Make the question button the question box
	option5One.image = questionBox;
	option5One.width = questionBox.width;
	option5One.height = questionBox.height;
	option5One.onPress = option5OnePressed;

	// Create option #2
	option5Two = new Clickable();

	// Make the question button the question box
	option5Two.image = questionBox;
	option5Two.width = questionBox.width;
	option5Two.height = questionBox.height;
	option5Two.onPress = option5TwoPressed;

	// Create option #3
	option5Three = new Clickable();

	// Make the question button the question box
	option5Three.image = questionBox;
	option5Three.width = questionBox.width;
	option5Three.height = questionBox.height;
	option5Three.onPress = option5ThreePressed;

	// Create option #4
	option5Four = new Clickable();

	// Make the question button the question box
	option5Four.image = questionBox;
	option5Four.width = questionBox.width;
	option5Four.height = questionBox.height;
	option5Four.onPress = option5FourPressed;

	// Create option #5
	option5Five = new Clickable();

	// Make the question button the question box
	option5Five.image = questionBox;
	option5Five.width = questionBox.width;
	option5Five.height = questionBox.height;
	option5Five.onPress = option5FivePressed;
}

option5OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option5TwoSelected) && (!option5ThreeSelected) && (!option5FourSelected) 
		&& (!option5FiveSelected) ) {
		option5One.image = questionCheck;
		option5OneSelected = true;
	}
}

option5TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option5OneSelected) && (!option5ThreeSelected) && (!option5FourSelected) 
		&& (!option5FiveSelected) ) {
		option5Two.image = questionCheck;
		option5TwoSelected = true;
	}	
}

option5ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option5TwoSelected) && (!option5OneSelected) && (!option5FourSelected) 
		&& (!option5FiveSelected) ) {
		option5Three.image = questionCheck;
		option5ThreeSelected = true;
	}
}

option5FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option5TwoSelected) && (!option5OneSelected) && (!option5ThreeSelected) 
		&& (!option5FiveSelected) ) {
		option5Four.image = questionCheck;
		option5FourSelected = true;
	}
}

option5FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option5TwoSelected) && (!option5OneSelected) && (!option5ThreeSelected) 
		&& (!option5FourSelected) ) {
		option5Five.image = questionCheck;
		option5FiveSelected = true;
	}
}

// Question 6 button code
function makeQuestion6Button() {
	// Create option #1
	option6One = new Clickable();

	// Make the question button the question box
	option6One.image = questionBox;
	option6One.width = questionBox.width;
	option6One.height = questionBox.height;
	option6One.onPress = option6OnePressed;

	// Create option #2
	option6Two = new Clickable();

	// Make the question button the question box
	option6Two.image = questionBox;
	option6Two.width = questionBox.width;
	option6Two.height = questionBox.height;
	option6Two.onPress = option6TwoPressed;

	// Create option #3
	option6Three = new Clickable();

	// Make the question button the question box
	option6Three.image = questionBox;
	option6Three.width = questionBox.width;
	option6Three.height = questionBox.height;
	option6Three.onPress = option6ThreePressed;

	// Create option #4
	option6Four = new Clickable();

	// Make the question button the question box
	option6Four.image = questionBox;
	option6Four.width = questionBox.width;
	option6Four.height = questionBox.height;
	option6Four.onPress = option6FourPressed;

	// Create option #5
	option6Five = new Clickable();

	// Make the question button the question box
	option6Five.image = questionBox;
	option6Five.width = questionBox.width;
	option6Five.height = questionBox.height;
	option6Five.onPress = option6FivePressed;
}

option6OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option6TwoSelected) && (!option6ThreeSelected) && (!option6FourSelected) 
		&& (!option6FiveSelected) ) {
		option6One.image = questionCheck;
		option6OneSelected = true;
	}
}

option6TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option6OneSelected) && (!option6ThreeSelected) && (!option6FourSelected) 
		&& (!option6FiveSelected) ) {
		option6Two.image = questionCheck;
		option6TwoSelected = true;
	}	
}

option6ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option6TwoSelected) && (!option6OneSelected) && (!option6FourSelected) 
		&& (!option6FiveSelected) ) {
		option6Three.image = questionCheck;
		option6ThreeSelected = true;
	}
}

option6FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option6TwoSelected) && (!option6OneSelected) && (!option6ThreeSelected) 
		&& (!option6FiveSelected) ) {
		option6Four.image = questionCheck;
		option6FourSelected = true;
	}
}

option6FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option6TwoSelected) && (!option6OneSelected) && (!option6ThreeSelected) 
		&& (!option6FourSelected) ) {
		option6Five.image = questionCheck;
		option6FiveSelected = true;
	}
}

// Question 7 button code
function makeQuestion7Button() {
	// Create option #1
	option7One = new Clickable();

	// Make the question button the question box
	option7One.image = questionBox;
	option7One.width = questionBox.width;
	option7One.height = questionBox.height;
	option7One.onPress = option7OnePressed;

	// Create option #2
	option7Two = new Clickable();

	// Make the question button the question box
	option7Two.image = questionBox;
	option7Two.width = questionBox.width;
	option7Two.height = questionBox.height;
	option7Two.onPress = option7TwoPressed;

	// Create option #3
	option7Three = new Clickable();

	// Make the question button the question box
	option7Three.image = questionBox;
	option7Three.width = questionBox.width;
	option7Three.height = questionBox.height;
	option7Three.onPress = option7ThreePressed;

	// Create option #4
	option7Four = new Clickable();

	// Make the question button the question box
	option7Four.image = questionBox;
	option7Four.width = questionBox.width;
	option7Four.height = questionBox.height;
	option7Four.onPress = option7FourPressed;

	// Create option #5
	option7Five = new Clickable();

	// Make the question button the question box
	option7Five.image = questionBox;
	option7Five.width = questionBox.width;
	option7Five.height = questionBox.height;
	option7Five.onPress = option7FivePressed;
}

option7OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option7TwoSelected) && (!option7ThreeSelected) && (!option7FourSelected) 
		&& (!option7FiveSelected) ) {
		option7One.image = questionCheck;
		option7OneSelected = true;
	}
}

option7TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option7OneSelected) && (!option7ThreeSelected) && (!option7FourSelected) 
		&& (!option7FiveSelected) ) {
		option7Two.image = questionCheck;
		option7TwoSelected = true;
	}	
}

option7ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option7TwoSelected) && (!option7OneSelected) && (!option7FourSelected) 
		&& (!option7FiveSelected) ) {
		option7Three.image = questionCheck;
		option7ThreeSelected = true;
	}
}

option7FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option7TwoSelected) && (!option7OneSelected) && (!option7ThreeSelected) 
		&& (!option7FiveSelected) ) {
		option7Four.image = questionCheck;
		option7FourSelected = true;
	}
}

option7FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option7TwoSelected) && (!option7OneSelected) && (!option7ThreeSelected) 
		&& (!option7FourSelected) ) {
		option7Five.image = questionCheck;
		option7FiveSelected = true;
	}
}

// Question 8 button code
function makeQuestion8Button() {
	// Create option #1
	option8One = new Clickable();

	// Make the question button the question box
	option8One.image = questionBox;
	option8One.width = questionBox.width;
	option8One.height = questionBox.height;
	option8One.onPress = option8OnePressed;

	// Create option #2
	option8Two = new Clickable();

	// Make the question button the question box
	option8Two.image = questionBox;
	option8Two.width = questionBox.width;
	option8Two.height = questionBox.height;
	option8Two.onPress = option8TwoPressed;

	// Create option #3
	option8Three = new Clickable();

	// Make the question button the question box
	option8Three.image = questionBox;
	option8Three.width = questionBox.width;
	option8Three.height = questionBox.height;
	option8Three.onPress = option8ThreePressed;

	// Create option #4
	option8Four = new Clickable();

	// Make the question button the question box
	option8Four.image = questionBox;
	option8Four.width = questionBox.width;
	option8Four.height = questionBox.height;
	option8Four.onPress = option8FourPressed;

	// Create option #5
	option8Five = new Clickable();

	// Make the question button the question box
	option8Five.image = questionBox;
	option8Five.width = questionBox.width;
	option8Five.height = questionBox.height;
	option8Five.onPress = option8FivePressed;
}

option8OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option8TwoSelected) && (!option8ThreeSelected) && (!option8FourSelected) 
		&& (!option8FiveSelected) ) {
		option8One.image = questionCheck;
		option8OneSelected = true;
	}
}

option8TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option8OneSelected) && (!option8ThreeSelected) && (!option8FourSelected) 
		&& (!option8FiveSelected) ) {
		option8Two.image = questionCheck;
		option8TwoSelected = true;
	}	
}

option8ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option8TwoSelected) && (!option8OneSelected) && (!option8FourSelected) 
		&& (!option8FiveSelected) ) {
		option8Three.image = questionCheck;
		option8ThreeSelected = true;
	}
}

option8FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option8TwoSelected) && (!option8OneSelected) && (!option8ThreeSelected) 
		&& (!option8FiveSelected) ) {
		option8Four.image = questionCheck;
		option8FourSelected = true;
	}
}

option8FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option8TwoSelected) && (!option8OneSelected) && (!option8ThreeSelected) 
		&& (!option8FourSelected) ) {
		option8Five.image = questionCheck;
		option8FiveSelected = true;
	}
}

// Question 9 button code
function makeQuestion9Button() {
	// Create option #1
	option9One = new Clickable();

	// Make the question button the question box
	option9One.image = questionBox;
	option9One.width = questionBox.width;
	option9One.height = questionBox.height;
	option9One.onPress = option9OnePressed;

	// Create option #2
	option9Two = new Clickable();

	// Make the question button the question box
	option9Two.image = questionBox;
	option9Two.width = questionBox.width;
	option9Two.height = questionBox.height;
	option9Two.onPress = option9TwoPressed;

	// Create option #3
	option9Three = new Clickable();

	// Make the question button the question box
	option9Three.image = questionBox;
	option9Three.width = questionBox.width;
	option9Three.height = questionBox.height;
	option9Three.onPress = option9ThreePressed;

	// Create option #4
	option9Four = new Clickable();

	// Make the question button the question box
	option9Four.image = questionBox;
	option9Four.width = questionBox.width;
	option9Four.height = questionBox.height;
	option9Four.onPress = option9FourPressed;

	// Create option #5
	option9Five = new Clickable();

	// Make the question button the question box
	option9Five.image = questionBox;
	option9Five.width = questionBox.width;
	option9Five.height = questionBox.height;
	option9Five.onPress = option9FivePressed;
}

option9OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option9TwoSelected) && (!option9ThreeSelected) && (!option9FourSelected) 
		&& (!option9FiveSelected) ) {
		option9One.image = questionCheck;
		option9OneSelected = true;
	}
}

option9TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option9OneSelected) && (!option9ThreeSelected) && (!option9FourSelected) 
		&& (!option9FiveSelected) ) {
		option9Two.image = questionCheck;
		option9TwoSelected = true;
	}	
}

option9ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option9TwoSelected) && (!option9OneSelected) && (!option9FourSelected) 
		&& (!option9FiveSelected) ) {
		option9Three.image = questionCheck;
		option9ThreeSelected = true;
	}
}

option9FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option9TwoSelected) && (!option9OneSelected) && (!option9ThreeSelected) 
		&& (!option9FiveSelected) ) {
		option9Four.image = questionCheck;
		option9FourSelected = true;
	}
}

option9FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option9TwoSelected) && (!option9OneSelected) && (!option9ThreeSelected) 
		&& (!option9FourSelected) ) {
		option9Five.image = questionCheck;
		option9FiveSelected = true;
	}
}

// Question 9 button code
function makeQuestion10Button() {
	// Create option #1
	option10One = new Clickable();

	// Make the question button the question box
	option10One.image = questionBox;
	option10One.width = questionBox.width;
	option10One.height = questionBox.height;
	option10One.onPress = option10OnePressed;

	// Create option #2
	option10Two = new Clickable();

	// Make the question button the question box
	option10Two.image = questionBox;
	option10Two.width = questionBox.width;
	option10Two.height = questionBox.height;
	option10Two.onPress = option10TwoPressed;

	// Create option #3
	option10Three = new Clickable();

	// Make the question button the question box
	option10Three.image = questionBox;
	option10Three.width = questionBox.width;
	option10Three.height = questionBox.height;
	option10Three.onPress = option10ThreePressed;

	// Create option #4
	option10Four = new Clickable();

	// Make the question button the question box
	option10Four.image = questionBox;
	option10Four.width = questionBox.width;
	option10Four.height = questionBox.height;
	option10Four.onPress = option10FourPressed;

	// Create option #5
	option10Five = new Clickable();

	// Make the question button the question box
	option10Five.image = questionBox;
	option10Five.width = questionBox.width;
	option10Five.height = questionBox.height;
	option10Five.onPress = option10FivePressed;
}

option10OnePressed = function() {
	// If options two, three, four, or five are not selected, you can press one
	if ( (!option10TwoSelected) && (!option10ThreeSelected) && (!option10FourSelected) 
		&& (!option10FiveSelected) ) {
		option10One.image = questionCheck;
		option10OneSelected = true;
	}
}

option10TwoPressed = function() {
	// If options one, three, four, or five are not selected, you can press two
	if ( (!option10OneSelected) && (!option10ThreeSelected) && (!option10FourSelected) 
		&& (!option9FiveSelected) ) {
		option10Two.image = questionCheck;
		option10TwoSelected = true;
	}	
}

option10ThreePressed = function() {
	// If options one, two, four, or five are not selected, you can press three
	if ( (!option10TwoSelected) && (!option10OneSelected) && (!option10FourSelected) 
		&& (!option10FiveSelected) ) {
		option10Three.image = questionCheck;
		option10ThreeSelected = true;
	}
}

option10FourPressed = function() {
	// If options one, two, three, or five are not selected, you can press four
	if ( (!option10TwoSelected) && (!option10OneSelected) && (!option10ThreeSelected) 
		&& (!option10FiveSelected) ) {
		option10Four.image = questionCheck;
		option10FourSelected = true;
	}
}

option10FivePressed = function() {
	// If options one, two, three, or four are not selected, you can press five
	if ( (!option10TwoSelected) && (!option10OneSelected) && (!option10ThreeSelected) 
		&& (!option10FourSelected) ) {
		option10Five.image = questionCheck;
		option10FiveSelected = true;
	}
}
