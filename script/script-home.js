// Load main page

var mainPage = document.getElementById("main-page");
mainPage.style.opacity = 1;

// Functions for image section

var currentImage = 0;
setImage(currentImage);
imageSlider();

function setImage() {

    var firstImage = document.getElementById("img1");
    var secondImage = document.getElementById("img2");
    var thirdImage = document.getElementById("img3");

    if (currentImage < 0) {
        currentImage += spots.length; // so that it can repeat again the photos
    }

    firstImage.src = spots[currentImage % spots.length].photo_url;
    secondImage.src = spots[(currentImage + 1) % spots.length].photo_url;
    thirdImage.src = spots[(currentImage + 2) % spots.length].photo_url;
    
}

function previousImage() {
    currentImage -= 1;
    setImage();
}

function nextImage() {
    currentImage += 1;
    setImage();
}

// Sliding effect for images

function imageSlider() {
    nextImage();
    setTimeout(doNext, 3000);
}

function doNext() {
    nextImage();
    setTimeout(imageSlider, 3000);
}

function loadSpotFromImage(object) { // object is passed to check for its src and load the relevant content
    var fileName = object.src;
    var startIndex = fileName.lastIndexOf('/') + 1;
    var endIndx = fileName.lastIndexOf('.');
    var spotID = fileName.substring(startIndex, endIndx)
    window.location = "detailed-spot.html?spot=" + spotID;
}

function openPopUpStory(id) {

    for (var i = 0; i < stories.length; i++) {
        if (stories[i].id == id) {
            index = i;
            break;
        }
    }

    document.getElementById("story-title").innerHTML = stories[index].title;
    document.getElementById("story-image").src = stories[index].img_url;
    document.getElementById("story-author").innerHTML = stories[index].author;
    document.getElementById("story-body").innerHTML = stories[index].story;
    document.getElementById("story-section").style.display = "block";

}

function closePopUpStory() {
    document.getElementById("story-section").style.display = "none";
}
