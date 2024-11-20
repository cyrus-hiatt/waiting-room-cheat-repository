if ($(".key-required").length > 0) {
  if (culture === "nl-NL") {
    if ($("#keyRequiredContainer").length === 0) {
      $(
        `<span id="inviteHeader">Momenteel is er een verkoop aan uitkaarthouders. Voer hieronder je e-mail adres in als je een uitkaarthouder bent en een ticket wilt proberen te kopen.</span>`
      ).appendTo("#header");
    }
  }
}
