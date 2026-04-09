const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const title = document.querySelector(".hero-title");

if (title && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(() => {
    title.classList.remove("glitch");
    window.requestAnimationFrame(() => {
      title.classList.add("glitch");
    });
  }, 7000);
}
