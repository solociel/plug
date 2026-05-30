<script>
  let lastScrollTop = 0;
  const header = document.getElementById("scrollHeader");

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
      // scrolling up
      header.style.display = "block";
    } else {
      // scrolling down
      header.style.display = "none";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
</script>



// IDs o nombres de redes
const socialLinks = ["instagram", "spotify", "soundcloud", "youtube"];

// Inicializar contadores desde localStorage
let clickCounters = {};
socialLinks.forEach(platform => {
  clickCounters[platform] = parseInt(localStorage.getItem(`clicks_${platform}`)) || 0;

  // Añadir event listener
  const link = document.querySelector(`a[href*="${platform}"]`);
  if (link) {
    link.addEventListener("click", () => {
      clickCounters[platform]++;
      localStorage.setItem(`clicks_${platform}`, clickCounters[platform]);
      updateClickStatsUI();
    });
  }
});

// Mostrar los contadores si estás en modo admin
function updateClickStatsUI() {
  const list = document.getElementById("click-stats-list");
  if (!list) return;
  list.innerHTML = "";
  socialLinks.forEach(platform => {
    const li = document.createElement("li");
    li.textContent = `${platform}: ${clickCounters[platform]} clics`;
    list.appendChild(li);
  });
}

// Activar modo admin si se agrega ?admin=true a la URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("admin") === "true") {
    const statsPanel = document.getElementById("admin-click-stats");
    if (statsPanel) {
      statsPanel.style.display = "block";
      updateClickStatsUI();
    }
  }
  backButton.addEventListener("click", () => {
  audio.currentTime = Math.max(startTime, audio.currentTime - 10);
});

forwardButton.addEventListener("click", () => {
  audio.currentTime = Math.min(endTime, audio.currentTime + 10);
});
});
