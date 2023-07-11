const menuToggle = document.querySelector(".menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
});
