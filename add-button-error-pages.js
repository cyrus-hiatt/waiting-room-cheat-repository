var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  function modifyURL() {
    let url = window.location.href;
    url = url.replace(/error\?er=(7)&/, "?");
    let index = url.indexOf("&iow");
    if (index !== -1) {
      url = url.substring(0, index + 4);
    }
    window.location.href = url;
  }

  // Add click event listener to captcha-btn
  $(document).on("click", ".captcha-btn", function () {
    modifyURL();
  });

  if (pageid == "error") {
    var errorid = $("body").attr("data-errorid");

    // UnknownCustomerId
    if (errorid == "7") {
      $(
        `<br><div id='MainPart_divWarningBox' class='warning-box'><p><button class='captcha-btn btn'>Back</button></p></div>`
      ).insertAfter("#headerparagraph");
    }
  }
});
