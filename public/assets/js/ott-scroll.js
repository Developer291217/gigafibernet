// Duplicate logos for seamless infinite scroll

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".tna-partner-1-logo");
  if (!track) return;

  // duplicate content once for seamless loop
  track.innerHTML += track.innerHTML;
});