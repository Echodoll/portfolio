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
