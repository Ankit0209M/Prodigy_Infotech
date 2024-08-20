
window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.fade-in');
    let windowHeight = window.innerHeight;
    
    elements.forEach(function (element) {
        let position = element.getBoundingClientRect().top;

        if (position - windowHeight <= 0) {
            element.classList.add('active');
        }
    });
});
