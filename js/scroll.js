document.addEventListener("DOMContentLoaded", function () {
    // Código para la animación de scroll
    const scrollLinks = document.querySelectorAll('.navbar a[href^="#"]');
  
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      });
    });
  });
  