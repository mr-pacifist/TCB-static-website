

document.getElementById("menu-btn").addEventListener("click", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileMenu = document.getElementById('mobile-menu');
    // Toggle hidden class
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    mobileMenu.classList.toggle('hidden');

});


// hero slider
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll("#slider-container div");
    let indicators = document.querySelectorAll("[id^='indicator-']");
    let bars = document.querySelectorAll("[id^='bar-']");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            indicators[i].classList.replace("text-lime-500", "text-gray-300");
            bars[i].style.width = "0%";
        });

        slides[index].classList.add("active");
        indicators[index].classList.replace("text-gray-300", "text-lime-500");
        bars[index].style.width = "100%";

        index = (index + 1) % slides.length;
    }

    // Initialize first slide immediately
    showSlide();

    // Run slider every 10 seconds
    setInterval(showSlide, 10000);
});



// product slider

  const slider = document.getElementById('slider');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  
  
  const slides = Array.from(slider.children);
  let index = 0;

  function moveToSlide(newIndex) {
      if (newIndex >= slides.length) {
          index = 0;
          slider.scrollLeft = 0;
      } else if (newIndex < 0) {
          index = slides.length - 1;
          slider.scrollLeft = slider.scrollWidth;
      } else {
          index = newIndex;
          slider.scrollLeft = index * (slides[0].offsetWidth + 16); // Adjust for margin
      }
  }

  next.addEventListener('click', () => moveToSlide(index + 1));
  prev.addEventListener('click', () => moveToSlide(index - 1));

  // Auto-scroll every 4 seconds
  setInterval(() => moveToSlide(index + 1), 4000);