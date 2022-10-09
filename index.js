setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

const closeBtn = document.getElementById("modal-close-btn");
const modalText = document.getElementById("modal-text");
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

const consentForm = document.getElementById("consent-form");
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  console.log(consentFormData);

  const name = consentFormData.get("name");

  modalText.innerHTML = `<img src="images/loading.svg" class="loading">
  <p id="uploadText">
      Uploading your data to the dark web...
  </p>
</div>`;
  setTimeout(
    () => (document.getElementById("uploadText").innerText = `Making the sale`),
    1500
  );
  setTimeout(
    () =>
      (document.getElementById(
        "modal-inner"
      ).innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span> you sucker! </h2>
  <p>We just sold the rights to your eternal soul.</p>
  <div class="idiot-gif">
      <img src="images/pirate.gif">
  </div>`),
    3500
  );
});
