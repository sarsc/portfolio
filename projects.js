
const project = document.getElementById("project");
const image1  = document.getElementById("image1");
const image2  = document.getElementById("image2")
project.addEventListener("mouseenter", (event) => {
  event.preventDefault();
  image1.classList.add("d-none");
  image2.classList.remove("d-none")
 });


project.addEventListener("mouseleave", (event) => {
  event.preventDefault();
  image2.classList.add("d-none");
  image1.classList.remove("d-none");
 });
