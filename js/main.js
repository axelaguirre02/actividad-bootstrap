const link = document.getElementById("opciones");
const acordeon = document.getElementById("accordionExample");

link.addEventListener("click", () => {
  if (acordeon.classList.contains("d-none")) {
    acordeon.classList.remove("d-none");
  } else {
    acordeon.classList.add("d-none");
  }
});
