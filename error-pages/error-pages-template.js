var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  if (pageid == "error") {
    var errorid = $("body").attr("data-errorid");

    // Set ErrorId in error.html

    // UnknownCustomerId
    if (errorid == "1") {
      $("#lbHeaderH2").text("Unknown line");
      $("#lbHeaderP").text(
        "The link you used seems to be broken. We cannot recognize the line it is referring to."
      );
    }
    // UnknownEventId
    if (errorid == "2") {
      $("#lbHeaderH2").text("Unknown queue");
      $("#lbHeaderP").text(
        "The link you used seems to be broken. We cannot recognise the queue it is referring to."
      );
    }
    // EventNotFound
    if (errorid == "3") {
      $("#lbHeaderH2").text("An error has occured.");
      $("#lbHeaderP").text(
        "An unexpected error has occurred. Please inform the Queue-it team by e-mail at: mailto:support@queue-it.com"
      );
    }
    // Old queue #
    if (errorid == "4") {
      $("#lbHeaderH2").text("Your queue number is no longer valid");
      $("#lbHeaderP").text(
        "Queue numbers are valid for {0} minutes.  Unfortunately your queue number has now expired.  Please click the button below to get a new place in the queue."
      );
    }
    // Max#ofRedirectsPerQId
    if (errorid == "5") {
      // if ($("#detailExpander").length > 0) {
      if ($(detailExpander).is(":visible")) {
        //used queue iddetailExpander
        $("#lbHeaderH2").text("");
        $("#lbHeaderP").text("");
      } else {
        //rejected queue id
        $("#lbHeaderH2").text("");
        $("#lbHeaderP").text("");
      }
    }
    // KnownUserV3
    if (errorid == "6") {
      $("#lbHeaderH2").text("Not valid URL");
      $("#lbHeaderP").text(
        "Your link to the queue is not valid.  Please click the button below to get a new place at the end of the queue."
      );
    }
    // ChallengeSolveTimeout
    if (errorid == "7") {
      $("#lbHeaderH2").text("Solving captcha took too long");
      $("#lbHeaderP").text(
        "The captcha has to be solved in 5 minutes.  Otherwise you have to start over by clicking the button below to get a new place at the end of the queue."
      );
    }
    // ChallengeBlocked
    if (errorid == "8") {
      $("#lbHeaderH2").text("An error has occurred.");
      $("#lbHeaderP").text(
        "An unexpected error has occurred. Please inform the Queue-it team by e-mail at: mailto:support@queue-it.com"
      );
    }
    // InvalidQueueitEnqueueToken
    if (errorid == "9") {
      $("#lbHeaderH2").text("Restricted Access");
      $("#lbHeaderP").text(
        "You have attempted to enter a waiting room, but the access link is invalid. Please ensure you are using the correct valid link."
      );
    }
    // MissingCustomDataKey
    if (errorid == "10") {
      $("#lbHeaderH2").text("Restricted Access");
      $("#lbHeaderP").text(
        "You have attempted to enter a waiting room, but the access link is invalid. Please ensure you are using the correct valid link."
      );
    }
    // CustomDataUniqueKeyViolation
    if (errorid == "11") {
      $("#lbHeaderH2").text("Restricted Access");
      $("#lbHeaderP").text(
        "You have attempted to enter a waiting room, but the access link is invalid. Please ensure you are using the correct valid link."
      );
    }
    // QueueIdUsageLimitError
    if (errorid == "12") {
      $("#lbHeaderH2").text("An error has occurred.");
      $("#lbHeaderP").text(
        "An unexpected error has occurred. Please inform the Queue-it team by e-mail at: mailto:support@queue-it.com"
      );
    }
  }
});
