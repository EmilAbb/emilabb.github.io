const clickBars = document.querySelector('.click-bars')
const hamburgerMenu = document.querySelector('.hamburger-menu') 
const clickX = document.querySelector('.click-x')

clickBars.addEventListener('click',function(){
    hamburgerMenu.classList.add('hamburger-menu-active')
})

clickX.addEventListener('click',function(){
    hamburgerMenu.classList.remove('hamburger-menu-active')
})


// CHAKI SLIDER
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        updateSlideContentClass();
      },
    },
  });

  function updateSlideContentClass() {
    var slides = document.querySelectorAll(".swiper-slide");
    for (var i = 0; i < slides.length; i++) {
      var content = slides[i].querySelector(".slide-content");
      if (content) {
        content.classList.remove("slide-content-active");
      }
    }

    var activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      var activeContent = activeSlide.querySelector(".slide-content");
      if (activeContent) {
        activeContent.classList.add("slide-content-active");
      }
    }
  }

  updateSlideContentClass();

  var nextButton = document.querySelector(".swiper-button-next");
  nextButton.addEventListener("click", function () {
    updateSlideContentClass();
  });

  var prevButton = document.querySelector(".swiper-button-prev");
  prevButton.addEventListener("click", function () {
    updateSlideContentClass();
  });
});



// UP CLICK BUTTON

window.addEventListener("scroll", function() {
  var upClickButton = document.querySelector(".up-click-button");
  if (window.scrollY > 0) {
      upClickButton.classList.add("up-click-button-active");
  } else {
      upClickButton.classList.remove("up-click-button-active");
  }
});

document.querySelector(".up-click-button").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});



// LORAINE SECTION

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loraine-button").addEventListener("click", function () {
      var loraineSection = document.querySelector(".loraine");

      if (loraineSection) {
          loraineSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
  });
});


// HEADER FIXED

window.addEventListener("scroll", function() {
  var headerUp = document.querySelector(".header-up");
  var headerMenu = document.querySelector(".header-menu");
  
  if (window.scrollY > 0) { 
      headerUp.style.display = "none";
      headerMenu.style.position = "fixed";
  } else {
      headerUp.style.display = "flex";
      headerMenu.style.position = "relative";
  }
});


// CLIENT SLIDER

var clientSlider = new Swiper(".clientSlider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




// CARUSEL SLIDER

var caruselSlider = new Swiper(".caruselSlider", {
  spaceBetween: 0,
  centeredSlides: false,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.querySelectorAll('.clickable-slide').forEach(function(slide) {
  let imageIndex = 0; 
  const images = slide.querySelectorAll('img');

  slide.addEventListener('click', function() {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.className = 'fullscreen';

    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = images[imageIndex].src;
    fullscreenDiv.appendChild(fullscreenImage);

    fullscreenDiv.style.position = 'fixed';
    fullscreenDiv.style.top = '0';
    fullscreenDiv.style.left = '0';
    fullscreenDiv.style.width = '100%';
    fullscreenDiv.style.height = '100%';
    fullscreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullscreenDiv.style.display = 'flex';
    fullscreenDiv.style.justifyContent = 'center';
    fullscreenDiv.style.alignItems = 'center';

    document.body.appendChild(fullscreenDiv);

    fullscreenImage.style.maxWidth = '100%';
    fullscreenImage.style.maxHeight = '100%';

    fullscreenDiv.addEventListener('click', closeFullscreen);
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeFullscreen();
      } else if (event.key === 'ArrowLeft') {
        imageIndex = (imageIndex - 1 + images.length) % images.length;
        fullscreenImage.src = images[imageIndex].src;
      } else if (event.key === 'ArrowRight') {
      
        imageIndex = (imageIndex + 1) % images.length;
        fullscreenImage.src = images[imageIndex].src;
      }
    });

    function closeFullscreen() {
      document.body.removeChild(fullscreenDiv); 
    }
  });
});
