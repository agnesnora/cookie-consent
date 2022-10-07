setTimeout(function () {
  modal.style.display = "block";
}, 1500);

const closeBtn = document.getElementById("modal-close-btn");

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
