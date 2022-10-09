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
  modalText.innerHTML = `<img src="images/loading.svg" class="loading">
  <p id="uploadText">
      Uploading your data to the dark web...
  </p>
</div>`;
  const uploadText = document.getElementById("uploadText");
  setTimeout(
    () =>
      (uploadText.innerHTML = `
<p id="uploadText">
    Making the sale
</p>
</div>`),
    1500
  );
});

/*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/
