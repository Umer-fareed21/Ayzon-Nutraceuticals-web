const slides = document.querySelector(".slides");
const slideEls = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let interval;

slideEls.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slideEls.length;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + slideEls.length) % slideEls.length;
    updateSlider();
}

function goToSlide(i) {
    index = i;
    updateSlider();
    resetAuto();
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAuto();
});

function startAuto() {
    interval = setInterval(nextSlide, 8000);
}

function resetAuto() {
    clearInterval(interval);
    startAuto();
}

const sliderWrapper = document.querySelector(".bg-slider");

sliderWrapper.addEventListener("mouseenter", () => clearInterval(interval));
sliderWrapper.addEventListener("mouseleave", startAuto);

startAuto();

