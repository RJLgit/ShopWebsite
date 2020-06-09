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
let buttonOne;
let buttonTwo;

function populateWhenOneClicked() {
	imageOne.src = "Images/Items/BoatModel.PNG";
	imageTwo.src = "Images/Items/GermanSoldierModel.PNG";
	imageThree.src = "Images/Items/HeavyInfModel.PNG";
	imageFour.src = "Images/Items/MotteCastleModel.PNG";
	imageFive.src = "Images/Items/NormanModel.PNG";
	imageSix.src = "Images/Items/PyramidModel.PNG";

	itemTextOne.textContent = "Boat Model £79.99";
	itemTextTwo.textContent = "German Soldier Model £11.99";
	itemTextThree.textContent = "German Soldier Model £11.99";
	itemTextFour.textContent = "Motte Castle Model £49.99";
	itemTextFive.textContent = "Norman Model £8.99";
	itemTextSix.textContent = "Pyramid Model £14.99";
}

function populateWhenTwoClicked() {
	imageOne.src = "Images/Items/RomeCastleModel.PNG";
	imageTwo.src = "Images/Items/SasModel.PNG";
	imageThree.src = "Images/Items/SaxonModel.PNG";
	imageFour.src = "Images/Items/SwatModel.PNG";
	imageFive.src = "Images/Items/VikingModel.PNG";
	imageSix.src = "Images/Items/WW1Model.PNG";

	itemTextOne.textContent = "Roman Castle Model £199.99";
	itemTextTwo.textContent = "SaS Model £6.99";
	itemTextThree.textContent = "Saxon Model £8.99";
	itemTextFour.textContent = "Swat Model £9.99";
	itemTextFive.textContent = "Viking Model £8.99";
	itemTextSix.textContent = "WW1 Model £13.99";
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
	buttonOne = document.querySelector('#storeListGroupButtonOne');
	buttonTwo = document.querySelector('#storeListGroupButtonTwo');
	buttonOne.addEventListener('click', populateWhenOneClicked);
	buttonTwo.addEventListener('click', populateWhenTwoClicked);
	populateWhenOneClicked();
}


window.onload = init;