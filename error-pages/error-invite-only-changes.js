var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  changeText()
  const myqInterval = setInterval(myTimerq, 20);
  const myqInterval2 = setInterval(myTimerq2, 20);

  function changeText() {
    if ($('body').hasClass('key-required')) {

      $('#lblEmail').css({ "visibility": "visible" })
      $('#lblEmail').html(textTChange("lblEmail"))

      $('#code_message').css({ "color": "#000000" })
      $('#code_message').css({ "font-weight": "normal" })
      $('#code_message').html(textTChange("code_message"))
    }
  }

  function myTimerq() {
    if ($('#lblEmail').length) {
      changeText()
      myStop()
    }
  }
  function myStop() {
    clearInterval(myqInterval);
  }

  function myTimerq2() {
    if ($('#code_message').length) {
      $('#code_message').prependTo('#main_invite_div')
      changeText()
      myStop2()
    }
  }
  function myStop2() {
    clearInterval(myqInterval2);
  }

  const myqInterval3 = setInterval(myTimerq3, 20);
  function myTimerq3() {
    if ($('#error_box_code').length) {
      if ($('#error_box_code').text() === textTChange("error_box_code_default")) {
        $('#error_box_code').html(textTChange("error_box_code"))
      }
    }
  }

  const myqInterval4 = setInterval(myTimerq4, 20);
  function myTimerq4() {
    if ($('#error_box').length) {
      if ($('#error_box').text() === textTChange("error_box_default")) {
        $('#error_box').html(textTChange("error_box"))
      }
    }
  }

  if (pageid === "error") {
    var errorid = $("body").attr("data-errorid");
    // QueueId Validity Expired
    if (errorid == "4") {
      $("#lbHeaderH2").html(textTChange("error4headtext"));
      $("#lbHeaderP").text(textTChange("error4v1bodytextedited"));
    }
    // Max No Of Redirects Per QId
    // MaxNoOfRedirectsPerQIdHeadInfoText_Rejected
    if (errorid == "5") {
      $("#lbHeaderH2").html(textTChange("error5headtext"));
      $("#lbHeaderP").text(textTChange("error5v1bodytextedited"));
      $("#expandableDetails").text(
        $("#expandableDetails")
          .text()
          .replace(textTChange("error5v2expandableDetailsToReplace"), "")
      );
    }
    if (errorid == "9") {
      // InvalidQueueitEnqueueToken
      $("#lbHeaderH2").html(textTChange("error9headtext"));
      $("#lbHeaderP").html(textTChange("error9bodytext"));
    }
    if (errorid == "10") {
      // MissingCustomDataKey
      $("#lbHeaderH2").html(textTChange("error10headtext"));
      $("#lbHeaderP").html(textTChange("error10bodytext"));
    }
    if (errorid == "11") {
      // CustomDataUniqueKeyViolation
      $("#lbHeaderH2").html(textTChange("error11headtext"));
      $("#lbHeaderP").html(textTChange("error11bodytext"));
    }
  }
});

function textTChange(key) {
  var _lang = {
    "en-US": {
      lblEmail: {
        queue: 
          "<b>New Security Measure</b><br><br>An additional security process has been added....<br><br>",
      },
      error_box_default: {
        queue:
          "Your phone number cannot be verified. Please enter the phone number registered for this event.",
      },
      error_box : {
        queue:
          "<br><br>The mobile number you have entered is invalid...",
      },
      code_message: {
        queue:
          "<b>Enter Your One Time Passcode</b><br><br>Your One Time Passcode has been sent to your mobile phone...",
      },
      error_box_code_default: {
        queue:
          "The code you provided is incorrect. Try again.",
      },
      error_box_code: {
        queue: "The One Time Passcode you have entered is invalid...",
      },
      error4headtext: {
        error:
          "Your queue number is no longer valid",
      },
      error4v1bodytextedited: {
        error:
          "Once you reach the front of the queue, you have 10 mins to start to shop for tickets. Unfortunately, your chance to shop has now passed. To access the sale again, please follow the instructions and link provided to you.",
      },
      error5headtext: {
        error:
          "Used queue number",
      },
      error5v1bodytextedited: {
        error:
          "There has been an error, and your queue number has been rejected. We have reported the issue, and apologize for any inconvenience. To access the sale again, please follow the instructions and link provided to you.",
      },
      error5v2expandableDetailsToReplace: {
        error:
          "Click the button below to get a new place at the end of the queue.",
      },
      error9headtext: {
        error: "This Sale Is for Invited Fans",
      },
      error9bodytext: {
        error:
          "This is an invitation-only sale. To access the sale, please follow the instructions and link provided to you.<br><br>Didn’t receive an invite to this sale? Please check back for more updates.",
      },
      error10headtext: {
        error: "This Sale Is for Invited Fans",
      },
      error10bodytext: {
        error:
          "This is an invitation-only sale. To access the sale, please follow the instructions and link provided to you.<br><br>Didn’t receive an invite to this sale? Please check back for more updates.",
      },
      error11headtext: {
        error: "You've Already Joined The Queue",
      },
      error11bodytext: {
        error:
          "We've identified that the link you've used to join the queue has already been used. Each link can only be used once.",
      },
    },
  };
  if (pageid == "before") {
    return _lang[culture][key]["queue"];
  }
  return _lang[culture][key][pageid];
}
