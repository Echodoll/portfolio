document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add("visible");
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});
document.addEventListener("DOMContentLoaded", function () {
    var animationSpan = document.querySelector(".animation");
    var labels = ["développeuse Web", "créative", "designer", "polyvalente", "perfectionniste", "curieuse", "autonome"];
    var currentIndex = 0;

    function updateLabel() {
        animationSpan.textContent = labels[currentIndex];
        animationSpan.classList.remove("visible");
        void animationSpan.offsetWidth;
        animationSpan.classList.add("visible");
    }

    function animateLabels() {
        setInterval(function () {
            currentIndex = (currentIndex + 1) % labels.length;
            updateLabel();
        }, 4000); // Change label every 4 seconds
    }

    // Initial call to start the animation
    animateLabels();
});