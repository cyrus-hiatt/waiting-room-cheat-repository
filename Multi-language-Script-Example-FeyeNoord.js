queueViewModel.pageReady(function (data) {
  var culture = $("body").attr("data-culture");
  var pageid = $("body").attr("data-pageid");

  if (pageid === "before") {
    $("#defaultCountdown").hide();
  }

  if (culture == "nl-NL") {
    if (pageid === "before") {
      $("#MainPart_lbEventStartsAtText").text("De verkoop start om ");
    }

    if (pageid === "queue") {
      $("#MainPart_lbUsersInLineAheadOfYouText").text(
        "Aantal kameraden voor je in de rij:"
      );
      $("#MainPart_lbWhichIsInText").text("Jouw geschatte wachttijd:");
      $("#MainPart_lbLastUpdateTime").text("Bijgewerkt:");
      $("#MainPart_lbExitLineLoseYourPlaceText").text(
        "(Je verliest je plek in wachtrij)"
      );
      $("#first-in-line").text("Je bent nu aan de beurt");

      $("#serviced-soon span:first-child").text(
        "Je wordt zo doorgestuurd naar de ticketshop"
      );

      $("#h2ConfirmRedirect").text("Jij was aan de beurt om");
      $("#pConfirmRedirect").text("Wil je alsnog doorgaan naar de Ticketshop?");
      $("#queue-paused").text("De wachtrij is (even) gepauzeerd!");

      $("#BodyTop_nojavascriptenabled").text(
        "JavaScript is uitgeschakeld in jouw browser, zet deze aan om problemen te voorkomen!"
      );
      $("#MainPart_lbManualUpdateWarning").text(
        "Jouw (internet) verbinding is verbroken, controleer deze en probeer het opnieuw."
      );
    }

    if (pageid === "after") {
      // $("#lbHeaderH2").text("Header on the AFTER page");
      // $("#lbHeaderP").text("This is the text for AFTER page");
    }

    if (pageid === "exit") {
    }

    if (pageid === "error") {
      $("#headerparagraph").append(
        "<p>" +
          getTagByKey("linktextnl") +
          '<a href="' +
          getTagByKey("linkvalue") +
          '">Klik dan hier.</a></p>'
      );
    }
  }
  if (culture === "en-US") {
    if (pageid === "queue") {
      $("#serviced-soon span:first-child").text(
        "The queue is longer than usual. You will be redirected to the website as soon as possible"
      );
    }

    if (pageid === "error") {
      $("#headerparagraph").append(
        "<p>" +
          getTagByKey("linktexten") +
          '<a href="' +
          getTagByKey("linkvalue") +
          '">click here</a></p>'
      );
    }
  }

  function getTagByKey(tag_key) {
    var _tags = window.queueViewModel.options.tags;
    var tag_value;
    $.each(_tags, function (k, obj) {
      if (obj.key === tag_key) {
        console.log(obj.value);
        tag_value = obj.value;
      }
    });
    return tag_value;
  }

  //const myqInterval = setInterval(myTimerq, 20);
  //function myTimerq() {
  //if ($("#error_box").length) {
  //if (
  //$("#error_box").text() ===
  //"Uw e-mailadres kan niet worden geverifieerd. Voer het e-mailadres in dat voor dit evenement is geregistreerd."
  //) {
  //$("#error_box").text(
  // "Je e-mailadres kan niet worden geverifieerd. Voer het e-mailadres in dat aan je Ticketshop-account is gekoppeld."
  //);
  //myStop();
  // }
  // }
  // }
  // function myStop() {
  // clearInterval(myqInterval);
  // }

  const myqInterval2 = setInterval(myTimerq2, 20);
  function myTimerq2() {
    if ($("#code_message").length) {
      if (
        $("#code_message").text() ===
        "Er is een zescijferige verificatiecode naar je e-mailadres gestuurd. Voer de code hierboven in."
      ) {
        if (culture === "nl-NL") {
          $("#code_message").text(
            "Er is een zescijferige verificatiecode naar je e-mailadres gestuurd. Voer de code hierboven in. Bekijk je spambox als je de mail niet hebt ontvangen."
          );
        }
        if (culture === "en-US") {
          $("#code_message").text(
            "A six-digit verification code has been sent to your email address. Enter the code above. Check your spam box if you have not received the email."
          );
        }
        myStop2();
      }
    }
  }
  function myStop2() {
    clearInterval(myqInterval2);
  }
});
