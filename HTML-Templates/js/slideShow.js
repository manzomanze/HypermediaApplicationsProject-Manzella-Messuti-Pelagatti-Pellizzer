//UTILITIES
var clickable = true;

function extractNumber(text) {
  var numb = text.match(/\d/g);
  numb = numb.join("");
  return numb * 1;
}

//SLIDESHOW CORE
function buildAllSlideShow() {
  var slideShowContainer = document.getElementsByClassName(
    "slideShowContainer"
  );

  for (let i = 0; i < slideShowContainer.length; i++) {
    buildSlideShow(slideShowContainer[i]);
  }
}

function buildSlideShow(slideShowContainer) {
  var i;
  var slides = slideShowContainer.getElementsByClassName("slide");
  var container = slideShowContainer.querySelector(".container");

  //Set max width for the container
  var maxWidth = slides.length > 3 ? 3 : slides.length;
  container.style.width = `${maxWidth * (200 + 50)}px`;

  //More than 3? showButton : hideButton
  if (slides.length <= 3) {
    hideButtons(slideShowContainer);
  }

  //Place each slide from the beginning of the container
  for (var k = 0; k < slides.length; k++) {
    slides[k].style.left = `${25 + (200 + 50) * k}px`;
  }
}

function showButtons(slideShowContainer) {
  slideShowContainer.querySelector(".next").style.display = "";
  slideShowContainer.querySelector(".prev").style.display = "";
}

function hideButtons(slideShowContainer) {
  slideShowContainer.querySelector(".next").style.display = "none";
  slideShowContainer.querySelector(".prev").style.display = "none";
}

function next(e) {
  //Simple Rate Limiter
  if(!clickable){
    return;
  }
  clickable = false;
  setTimeout(function() {
    clickable = true;
  }, 300);

  //Get from the button the parent element
  var upperLevelNode = e.parentNode;
  var slides = upperLevelNode.getElementsByClassName("slide");
  var container = upperLevelNode.getElementsByClassName("container");

  var maxWidth = 25 + slides.length * 250;

  for (let i = 0; i < slides.length; i++) {
    var leftOffset = extractNumber(slides[i].style.left);

    if (leftOffset + 250 == maxWidth) {
      slides[i].style.left = `${leftOffset + 250}px`;
      slides[i].style.visibility = "hidden";
      setTimeout(function () {
        slides[i].style.transitionDuration = "0ms";
      }, 100);
      setTimeout(function () {
        slides[i].style.left = "-250px";
      }, 100);
      setTimeout(function () {
        slides[i].style.visibility = "visible";
        slides[i].style.transitionDuration = "250ms";
        slides[i].style.left = "25px";
      }, 150);
    } else {
      slides[i].style.left = `${leftOffset + 250}px`;
    }
  }
}

function prev(e) {
  //Simple Rate Limiter
  if(!clickable){
    return;
  }
  clickable = false;
  setTimeout(function() {
    clickable = true;
  }, 300);

  //Get from the button the parent element
  var upperLevelNode = e.parentNode;
  var slides = upperLevelNode.getElementsByClassName("slide");
  var container = upperLevelNode.getElementsByClassName("container");

  var minWidth = 25;
  var maxWidth = 25 + slides.length * 250;

  for (let i = 0; i < slides.length; i++) {
    var leftOffset = extractNumber(slides[i].style.left);

    if (leftOffset - 250 < minWidth) {
      slides[i].style.left = `${leftOffset - 250}px`;
      slides[i].style.visibility = "hidden";
      setTimeout(function () {
        slides[i].style.transitionDuration = "0ms";
      }, 100);
      setTimeout(function () {
        slides[i].style.left = `${maxWidth + 250}px`;
        leftOffset = maxWidth;
      }, 100);
      setTimeout(function () {
        slides[i].style.visibility = "visible";
        slides[i].style.transitionDuration = "250ms";
        slides[i].style.left = `${leftOffset - 250}px`;
      }, 150);
    } else {
      slides[i].style.left = `${leftOffset - 250}px`;
    }
  }
}

buildAllSlideShow();

//Media Query for SLIDESHOW
function screenChange(x) {
  var slideShowContainer = document.getElementsByClassName(
    "slideShowContainer"
  );

  for (let i = 0; i < slideShowContainer.length; i++) {
    if (x.matches) {
      // Small Screen
      checkSmall(slideShowContainer[i]);
    } else {
      checkBig(slideShowContainer[i]);
    }
  }
}

function checkSmall(slideShowContainer) {
  var slides = slideShowContainer.getElementsByClassName("slide");

  if (slides.length == 3) {
    //Show - Hide buttons
    showButtons(slideShowContainer);
  } else if (slides.length == 2) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.position = "relative";
      slides[i].style.top = 0;
      slides[i].style.left = 0;
      slides[i].style.marginBottom = "30px";
    }
  }
}

function checkBig(slideShowContainer) {
  var slides = slideShowContainer.getElementsByClassName("slide");

  if (slides.length == 3) {
    //Hide buttons
    hideButtons(slideShowContainer);
  } else if (slides.length == 2) {
    // Reset for bigger screens
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.position = "absolute";
      slides[i].style.top = 0;
      slides[i].style.left = 0;
      slides[i].style.marginBottom = "0px";
    }
    buildSlideShow(slideShowContainer);
  }
}

// Set screen switch point
var x = window.matchMedia("(max-width: 700px)");

// Call listener function at run time
screenChange(x);

// Attach listener function on state changes
x.addListener(screenChange);
