var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  if (pageid === "queue") {
    const observer = new MutationObserver((mutationsList, observer) => {
      const form = document.getElementById("MainPart_FormEmailInput");
      const checkbox = document.getElementById("acceptCheckbox");
      const submitButton = document.getElementById("aUpdateEmail");
      const errorMessage = document.getElementById("divEmailStatusFrame");

      if (form && checkbox && submitButton) {
        // Stop observing as elements are found
        observer.disconnect();

        // Initially disable the submit button
        submitButton.disabled = true;

        // Enable submit button when checkbox is checked
        checkbox.addEventListener("change", function () {
          submitButton.disabled = !checkbox.checked;
        });

        // Add custom validation to prevent Knockout.js submission
        submitButton.addEventListener("click", function (event) {
          console.log("Submit button clicked");
          if (!checkbox.checked) {
            event.preventDefault();
            errorMessage.style.display = "block";
            errorMessage.textContent =
              "Por favor, acepta que Ecoembes tenga acceso a la información de tu correo electrónico.";
          }
        });
      }
    });

    // Observe the body for DOM changes
    observer.observe(document.body, { childList: true, subtree: true });
  }
});
