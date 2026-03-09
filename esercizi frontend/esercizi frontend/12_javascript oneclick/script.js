function togglecolor() {
   const box = document.querySelector(".box5");
   if (!box) return;
   box.classList.toggle("active");
}

window.togglecolor = togglecolor;

