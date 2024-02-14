// var test = document.getElementById('test');

// test.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
//   console.log('hello');
// });

// var demo = document.getElementById('dataForm');
// demo.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log('hi');
// });

// var img = document.getElementById('img');
// img.addEventListener('drag', function () {
//   console.log('koko');
// });

//!------------------- Global Var ---------------------
// DOM --> element , event , action
var imgs = Array.from(document.querySelectorAll('.item img')); // convert node List to array
var lightBox = document.getElementById('lightBox');
var closeIcon = document.getElementById('close');
var inBox = document.getElementById('inBox');
var currentIndex = 0;
var nextImg = document.getElementById('next');
var prevImg = document.getElementById('prev');

//!------------------- functions ---------------------
function closeSlide(from, to) {
  lightBox.classList.replace(from, to);
}

function nextSlide() {
  currentIndex++; // next Index

  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }

  // img kolo --->src
  var currentEleSrc = imgs[currentIndex].getAttribute('src');

  inBox.style.backgroundImage = `url(${currentEleSrc})`;
}

function prevSlide() {
  currentIndex--; // prev Index

  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }

  // img kolo --->src
  var currentEleSrc = imgs[currentIndex].getAttribute('src');

  inBox.style.backgroundImage = `url(${currentEleSrc})`;
}

//!------------------- Events ---------------------
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function (e) {
    closeSlide('d-none', 'd-block');
    var currentTarget = e.target; // img select
    currentIndex = imgs.indexOf(currentTarget); // will search and go back with *index* if exist in array
    var currentSrc = e.target.getAttribute('src');
    console.log(e.target.getAttribute('src'));

    inBox.style.backgroundImage = `url(${currentSrc})`;
  });
}

closeIcon.addEventListener('click', function () {
  closeSlide('d-block', 'd-none');
});

nextImg.addEventListener('click', function () {
  nextSlide();
});

prevImg.addEventListener('click', function () {
  prevSlide();
});

document.addEventListener('click', function (e) {
  if (e.target == lightBox) {
    closeSlide('d-block', 'd-none');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    nextSlide();
  } else if (e.key == 'ArrowLeft') {
    prevSlide();
  } else if (e.key == 'Escape') {
    closeSlide('d-block', 'd-none');
  }
});
