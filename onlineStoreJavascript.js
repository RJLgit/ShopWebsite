//Ui elements
let imageOne;
let imageTwo;
let imageThree;
let imageFour;
let imageFive;
let imageSix;
let itemTextOne;
let itemTextTwo;
let itemTextThree;
let itemTextFour;
let itemTextFive;
let itemTextSix;

function populateWhenOneClicked() {
	imageOne.src = "Images/Items/BoatModel.PNG";
	imageTwo.src = "Images/Items/GermanSoldierModel.PNG";
	imageThree.src = "Images/Items/HeavyInfModel.PNG";
	imageFour.src = "Images/Items/MotteCastleModel.PNG";
	imageFive.src = "Images/Items/NormanModel.PNG";
	imageSix.src = "Images/Items/PyramidModel.PNG";

	itemTextOne.textContent = "Boat Model £79.99"
	itemTextTwo.textContent = "German Soldier Model £11.99"
	itemTextThree.textContent = "German Soldier Model £11.99"
	itemTextFour.textContent = "Motte Castle Model £49.99"
	itemTextFive.textContent = "Norman Model £8.99"
	itemTextSix.textContent = "Pyramid Model £14.99"
}

function init() {
	imageOne = document.querySelector('#storeItemImageOne');
	imageTwo = document.querySelector('#storeItemImageTwo');
	imageThree = document.querySelector('#storeItemImageThree');
	imageFour = document.querySelector('#storeItemImageFour');
	imageFive = document.querySelector('#storeItemImageFive');
	imageSix = document.querySelector('#storeItemImageSix');
	itemTextOne = document.querySelector('#storeItemTextOne');
	itemTextTwo = document.querySelector('#storeItemTextTwo');
	itemTextThree = document.querySelector('#storeItemTextThree');
	itemTextFour = document.querySelector('#storeItemTextFour');
	itemTextFive = document.querySelector('#storeItemTextFive');
	itemTextSix = document.querySelector('#storeItemTextSix');
	populateWhenOneClicked();
}


window.onload = init;