const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-4-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
});

/*const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    stretch: 0,
  },
}); 
const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30, // Adds gap between images
  // Temporarily comment out 'effect: coverflow' to see if the basic slider works
}); */
window.addEventListener('load', function() {
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    // Add these two lines to fix conflicts with ScrollReveal
    observer: true,
    observeParents: true,
    
    coverflowEffect: {
      rotate: 30,     
      stretch: 0,      
      depth: 250,     
      modifier: 1,     
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
ScrollReveal().reveal(".service__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service__row:nth-child(2n-1) img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__row:nth-child(2n) img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".service__details h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__details p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__images");

const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});