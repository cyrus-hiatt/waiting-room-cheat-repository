if ($(".key-required").length > 0) {
  if (culture === "nl-NL") {
    if ($("#keyRequiredContainer").length === 0) {
      $(`<span id="inviteHeader">Invite only text.</span>`).appendTo(
        "#divChallenge_Content"
      );
    }
  }
}
