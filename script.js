const planets = document.querySelectorAll(".planet");
const infoPanel = document.getElementById("infoPanel");
const planetName = document.getElementById("planetName");
const planetFact = document.getElementById("planetFact");

// Show info on hover
planets.forEach(planet => {
  planet.addEventListener("mouseenter", () => {
    planetName.textContent = planet.dataset.name;
    planetFact.textContent = planet.dataset.fact;
    infoPanel.classList.add("show");
  });

  planet.addEventListener("mouseleave", () => {
    infoPanel.classList.remove("show");
  });
});

