window.addEventListener('scroll', function() {
    var logoHeader = document.getElementById('logo-header');
    var leCabinet = document.getElementById('le-cabinet');
    var scrollPosition = window.scrollY;
    var halfScreenHeight = window.innerHeight / 2;

    if (scrollPosition >= leCabinet.offsetTop - halfScreenHeight) {
        logoHeader.classList.remove('invisible');
    } else {
        logoHeader.classList.add('invisible');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const languageBtn = document.getElementById('languageBtn');
    const closeBtn = document.getElementById('close');
    
    const overlay2 = document.getElementById('overlay2');
    const mapBtn = document.getElementById('mapBtn');
    const closeBtn2 = document.getElementById('close2');

    languageBtn.onclick = function () {
        overlay.style.display = "block";
    };

    closeBtn.onclick = function () {
        overlay.style.display = "none";
    };

    mapBtn.onclick = function () {
        overlay2.style.display = "block";
    };

    closeBtn2.onclick = function () {
        overlay2.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
        if (event.target === overlay2) {
            overlay2.style.display = "none";
        }
    };
});



window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
        if (isElementInViewport(element, 0.05)) { // Modifier ici le seuil de visibilité
            element.classList.add('animated');
        }
    });
});

function isElementInViewport(el, visiblePercentage) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visiblePercent = visibleHeight / rect.height;

    return visiblePercent >= visiblePercentage;
}









