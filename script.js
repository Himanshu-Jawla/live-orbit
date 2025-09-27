const planets = document.querySelectorAll(".planet");
const infoPanel = document.getElementById("infoPanel");
const planetName = document.getElementById("planetName");
const planetFact = document.getElementById("planetFact");
const closeBtn = document.getElementById("closeBtn");

planets.forEach(planet => {
  planet.addEventListener("click", () => {
    planetName.textContent = planet.dataset.name;
    planetFact.textContent = planet.dataset.fact;
    infoPanel.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  infoPanel.classList.remove("show");
});
