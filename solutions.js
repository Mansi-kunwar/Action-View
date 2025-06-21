
      // Smooth scrolling function
      function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
          behavior: "smooth",
        });
      }

      // Interactive metrics update
      function updateMetrics() {
        const productivityScore = document.getElementById("productivityScore");
        const focusTime = document.getElementById("focusTime");
        const distractions = document.getElementById("distractions");

        // Simulate real-time updates
        const scores = ["91%", "94%", "97%", "89%", "95%"];
        const times = ["5.8h", "6.2h", "7.1h", "5.5h", "6.8h"];
        const distractionCounts = ["8", "12", "15", "5", "10"];

        productivityScore.textContent =
          scores[Math.floor(Math.random() * scores.length)];
        focusTime.textContent = times[Math.floor(Math.random() * times.length)];
        distractions.textContent =
          distractionCounts[
            Math.floor(Math.random() * distractionCounts.length)
          ];

        // Add visual feedback
        const chart = document.getElementById("productivityChart");
        chart.style.background =
          "linear-gradient(135deg, var(--accent), var(--primary))";
        chart.textContent = "📊 Metrics Updated Successfully!";

        setTimeout(() => {
          chart.style.background =
            "linear-gradient(135deg, var(--light-gray), var(--accent))";
          chart.textContent = "📊 AI Analytics Loading...";
        }, 2000);
      }

      // CTA button action
      function startTrial() {
        alert(
          "🎉 Welcome to ActionView! Your AI-powered productivity journey begins now. A demo account has been created for you."
        );
      }

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
