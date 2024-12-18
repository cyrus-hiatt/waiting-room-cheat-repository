var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  if (pageid === "queue") {
    var divChallange = $("#challenge-container");
    if (divChallange.length > 0) {
      $(`<span id="header">Welcome to bookmyshow Indonesia</span><br>
        <span id="lbHeaderP">Secondary header text.</span>`).prependTo(
        "#divChallenge_Content"
      );

      const observer = new MutationObserver((mutationsList, observer) => {
        const label = document.getElementById("captcha-code-label");
        if (label) {
          label.textContent =
            "To continue, type the characters you see in the picture above";
          const solution = document.getElementById("solution");
          solution.setAttribute(
            "aria-label",
            "To continue, type the characters you see in the picture above"
          );
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
});
