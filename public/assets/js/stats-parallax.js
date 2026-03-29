// simple working parallax
window.addEventListener("scroll", function () {
  const section = document.querySelector(".stats-strip");
  if (!section) return;

  const rect = section.getBoundingClientRect();

  // only run when section is visible
  if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
    const move = rect.top * 0.25;

    section.style.setProperty(
      "--parallax",
      "translateY(" + move + "px)"
    );
  }
});