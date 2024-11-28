var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  customeridname = queueViewModel.customerId;
  eventidname = queueViewModel.eventId;

  url =
    "https://" +
    customeridname +
    ".queue-it.net/?c=" +
    customeridname +
    "&e=" +
    eventidname;

  function redirectToTicketing() {
    window.location.href = url;
  }

  // Add click event listener to back-in-line-btn
  $(document).on("click", ".back-in-line-btn", function () {
    redirectToTicketing();
  });

  if (pageid == "error") {
    var errorid = $("body").attr("data-errorid");
    if ($("#MainPart_divWarningBox p .btn").length <= 0) {
      if (errorid == "4" || errorid == "5") {
        $(
          `<p><button class='back-in-line-btn btn'>Get a new place in line</button></p>`
        ).prependTo("#MainPart_divWarningBox");
      }
    }
  }
});
