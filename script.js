// script.js

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Muestra u oculta el botón según la posición de desplazamiento
    window.addEventListener("scroll", toggleScrollToTopBtn);

    // Desplazamiento suave al hacer clic en el botón
    scrollToTopBtn.addEventListener("click", scrollToTop);

    function toggleScrollToTopBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    navbarLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });

            // Agrega la clase para la transición durante el desplazamiento
            document.body.classList.add('scroll-transition');

            // Remueve la clase después de la transición
            setTimeout(() => {
                document.body.classList.remove('scroll-transition');
            }, 500); // Ajusta el tiempo según la duración de la transición en CSS
        }
    }
});


