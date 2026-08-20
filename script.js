/* ========================================
   CARROSSÉIS DOS PROJETOS
======================================== */

document.querySelectorAll(".carousel").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-track img");

    const prevButton = carousel.querySelector(".carousel-prev");
    const nextButton = carousel.querySelector(".carousel-next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    let currentSlide = 0;

    /* ----------------------------------------
       SE EXISTIR APENAS UMA IMAGEM
    ---------------------------------------- */

    if (slides.length <= 1) {

        if (prevButton) {
            prevButton.style.display = "none";
        }

        if (nextButton) {
            nextButton.style.display = "none";
        }

        return;
    }


    /* ----------------------------------------
       CRIAR INDICADORES
    ---------------------------------------- */

    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        dot.type = "button";

        dot.setAttribute(
            "aria-label",
            `Ir para imagem ${index + 1}`
        );

        dot.addEventListener("click", () => {

            currentSlide = index;

            updateCarousel();

        });

        dotsContainer.appendChild(dot);

    });


    const dots = dotsContainer.querySelectorAll(".carousel-dot");


    /* ----------------------------------------
       ATUALIZAR CARROSSEL
    ---------------------------------------- */

    function updateCarousel() {

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });

    }


    /* ----------------------------------------
       PRÓXIMA IMAGEM
    ---------------------------------------- */

    nextButton.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        updateCarousel();

    });


    /* ----------------------------------------
       IMAGEM ANTERIOR
    ---------------------------------------- */

    prevButton.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        updateCarousel();

    });


    /* ----------------------------------------
       INICIALIZAÇÃO
    ---------------------------------------- */

    updateCarousel();

});

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });
}

mobileMenuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});