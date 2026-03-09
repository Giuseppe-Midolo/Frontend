const button = document.getElementById("button");
const titles = document.querySelectorAll("div h1");

button.addEventListener("click", function () {
    titles.forEach(function (h1) {
        h1.classList.toggle("blue");
    });
});
