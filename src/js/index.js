

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// hero slider
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll("#slider-container img");
    let indicators = document.querySelectorAll("[id^='indicator-']");
    let bars = document.querySelectorAll("[id^='bar-']");
    let index = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.replace("text-lime-500", "text-gray-300"));
        bars.forEach(bar => bar.style.width = "0%");

        slides[index].classList.add("active");
        indicators[index].classList.replace("text-gray-300", "text-lime-500");
        bars[index].style.width = "100%";

        index = (index + 1) % slides.length;
    }

    // Run slider every 4 seconds
    setInterval(showSlide, 6000);

    // Initialize the first active indicator
    indicators[0].classList.replace("text-gray-300", "text-lime-500");
    bars[0].style.width = "100%";
});



// product slider

const slider = document.getElementById('slider');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const indicatorsContainer = document.getElementById('indicators');
  
  const slides = Array.from(slider.children);
  let index = 0;

  // Generate Indicators
  slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = "w-3 h-3 rounded-full bg-gray-500 indicator";
      if (i === 0) dot.classList.add("active-indicator");
      indicatorsContainer.appendChild(dot);
  });

  const indicators = document.querySelectorAll('.indicator');

  function updateIndicators() {
      indicators.forEach((dot, i) => {
          dot.classList.toggle('active-indicator', i === index);
      });
  }

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
      updateIndicators();
  }

  next.addEventListener('click', () => moveToSlide(index + 1));
  prev.addEventListener('click', () => moveToSlide(index - 1));

  // Auto-scroll every 4 seconds
  setInterval(() => moveToSlide(index + 1), 4000);