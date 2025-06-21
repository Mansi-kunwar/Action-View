
      // Animation for elements when they come into view
      const animateOnScroll = () => {
        const elements = document.querySelectorAll(
          ".highlight-card, .step, .feature-list li"
        );

        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;

          if (elementPosition < screenPosition) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        });
      };

      // Set initial state for animated elements
      document
        .querySelectorAll(".highlight-card, .step, .feature-list li")
        .forEach((element) => {
          element.style.opacity = "0";
          element.style.transform = "translateY(20px)";
          element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        });

      // Add scroll event listener
      window.addEventListener("scroll", animateOnScroll);

      // Trigger once on page load
      window.addEventListener("load", animateOnScroll);

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
