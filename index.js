// Add event listeners to carousel indicators
const carouselIndicators = document.querySelectorAll(".carousel-indicators li");
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = Array.from(carouselSlide.children);
const slideWidth = carouselImages[0].offsetWidth;

let currentIndex = 0;

function moveToSlide(index) {
    carouselSlide.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
    updateIndicator();
}

function updateIndicator() {
    carouselIndicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        moveToSlide(index);
    });
});

// Automatically move to the next slide every 3 seconds
function autoSlide() {
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    moveToSlide(nextIndex);
}

setInterval(autoSlide, 2000);
