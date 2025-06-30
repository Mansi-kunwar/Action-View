
      // Smooth scrolling function
      // function scrollToSection(sectionId) {
      //   document.getElementById(sectionId).scrollIntoView({
      //     behavior: "smooth",
      //   });
      // }



      // Add scroll animations
      function handleScrollAnimations() {
        const cards = document.querySelectorAll(
          ".feature-card, .realtime-card"
        );

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          if (isVisible) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }
        });
      }

      // Initialize animations
      document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll(
          ".feature-card, .realtime-card"
        );
        cards.forEach((card) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        });

        window.addEventListener("scroll", handleScrollAnimations);
        handleScrollAnimations(); // Initial check
      });

      // Auto-update metrics every 5 seconds for demo effect
      setInterval(() => {
        if (Math.random() > 0.7) {
          // 30% chance every 5 seconds
          updateMetrics();
        }
      }, 5000);
