const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  const btn = acc.querySelector(".accordion-btn");
  const content = acc.querySelector(".accordion-content");
  const arrow = acc.querySelector(".arrow");

  btn.addEventListener("click", () => {
    
    // Cerrar otros abiertos
accordions.forEach(other => {
  if (other !== acc) {
    other.querySelector(".accordion-content").style.maxHeight = null;
    other.classList.remove("open");
    other.querySelector(".arrow").classList.remove("rotate");
  }
});


    // Alternar el actual
if (content.style.maxHeight) {
  content.style.maxHeight = null;
  acc.classList.remove("open");
  arrow.classList.remove("rotate");
} else {
  content.style.maxHeight = content.scrollHeight + "px";
  acc.classList.add("open");
  arrow.classList.add("rotate");
}

  });
});
