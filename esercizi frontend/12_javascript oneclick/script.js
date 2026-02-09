function togglecolor() {
   const box = document.querySelector(".box5");
   if (!box) return;
   box.classList.toggle("active");
}

window.togglecolor = togglecolor;

var array = [1, 2, 3, 4, 5];
console.log(array(3));