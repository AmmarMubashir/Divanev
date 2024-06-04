const slides = document.querySelectorAll(".slide");
const slides2 = document.querySelectorAll(".slide_v2");

const slideBtnRight = document.querySelector(".slideBtnRight");
const slideBtnLeft = document.querySelector(".slideBtnLeft");

const slideBtnRight2 = document.querySelector(".slideBtnRight_2");
const slideBtnLeft2 = document.querySelector(".slideBtnLeft_2");

const hide1 = document.querySelector(".slides");

//

let currentSlide = 0;
slideBtnRight.addEventListener("click", function () {
  let rightEdge1 = slides[slides.length - 1].getBoundingClientRect().right;
  let right1 = hide1.getBoundingClientRect().right;

  console.log(right1, rightEdge1);

  if (rightEdge1 < right1) return;
  ++currentSlide;
  console.log(currentSlide, slides.length);

  slides.forEach((slide) => {
    slide.style.transform = `translate(-${
      (slide.offsetWidth / 2) * currentSlide
    }px, 0%)`;
  });
});

slideBtnLeft.addEventListener("click", function () {
  if (currentSlide === 0) return;
  --currentSlide;
  console.log(currentSlide, slides.length);

  slides.forEach((slide) => {
    slide.style.transform = `translate(-${
      (slide.offsetWidth / 2) * currentSlide
    }px, 0%)`;
  });
});

// .///////////////////////////////////////////
function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = "50px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = "0px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
    /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e);
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e.changedTouches ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}

initComparisons();

const sofas = document.querySelectorAll(".sofas");

if (window.innerWidth == 1850) {
  sofas.forEach((sofa) => {
    sofa.style.width = "700px";
    sofa.style.height = "300px";
  });
}

console.log("hello sofa");

const familyBtn = document.getElementById("familyButton");
const overview = document.getElementsById("overview");

console.log(familyBtn);
console.log(overview);

familyBtn.addEventListener("click", function () {
  overview.classList.remove(".hidden");
});
