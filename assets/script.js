/**const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]**/
/**
	arrow = document.querySelectorAll(".arrow")

	arrow.forEach(img => {
		img.addEventListener("click", () => {
			console.log(img)
		})
	})
**/ /**
const slides = [
	"slide1.jpg", //Index0
	"slide2.jpg", //Index1
	"slide3.jpg", //Index2
	"slide4.png" //Index3
]

let currentIndex = 0;

function showSlide () {
	let currentSlide = slides[currentIndex] 

	console.log(currentSlide)
}

showSlide ()

function changeSlide (newIndex) {
	currentIndex += newIndex;
	showSlide ();
	console.log({newIndex, currentIndex})
}**/

//SLIDE AND BANNER
const slides = [
    {
      image: "slide1.jpg", //index 0
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg", //index 1
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg", //index 2
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png", //index 3
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
], 
  	  bannerImg = document.querySelector(".banner-img"),
	    bannerTxt = document.querySelector("#banner p");

//ARROW
const leftArrow = document.querySelector(".arrow_left"),
	    rightArrow = document.querySelector(".arrow_right"),
	    arrow = document.querySelectorAll(".arrow"); //ATTENTION TODO

//SLIDES ELEMENTS
const slideElement = slides.length -1, // index 0 départ + -1 parcequ'il reste 3 img et pas 4
  	  imgSrc = "./assets/images/slideshow/";

let currentIndex = 0; // point de départ

//DOT
const containerDots = document.querySelector(".dots"),
      eachDot = `<span class="dot"></span>`,
      allDot = document.querySelectorAll(".dot");


function activeSlide (select) { //select???
	bannerImg.src = imgSrc + slides[select]["image"]; //imgSrc devant pour avoir le bon path
	bannerTxt.innerHTML = slides[select]["tagLine"]
};

rightArrow.addEventListener("click", () => {
	if (currentIndex >= slideElement) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}
	activeSlide(currentIndex);
});

leftArrow.addEventListener("click", () => {
	if (currentIndex <= 0) {
		currentIndex = slideElement;
	} else {
		currentIndex--;
	}
	activeSlide(currentIndex);
});

function dotFunction () {
  for (let sliderDot = 0; sliderDot <= slideElement; sliderDot++) {
    containerDots.innerHTML += eachDot;
    const dotSelect = () => {
      if (sliderDot === currentIndex) {
        allDot.classList.add("dot_selected");
      } else {
        allDot.classList.remove("dot_selected");
      }
    }
	console.log(allDot)
  }
};
dotFunction ()