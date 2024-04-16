var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  // 'Your estimated wait time is' start
  if (pageid === "queue") {
    $("#MainPart_lbWhichIsInText, #MainPart_lbWhichIsIn").wrapAll(
      '<div id="estimated-time"></div>'
    );

    $("#MainPart_lbUsersInLineAheadOfYouText").text(
      "NÃºmero de pessoas na sua frente:"
    );
  }

  if (pageid === "queue" || pageid === "before") {
    // 'Error, no internet connection' start
    $("#MainPart_lbManualUpdateWarning")
      .text("")
      .append(
        "<i id='MainPart_lbManualUpdateWarning-warning-icon' aria-hidden='true' color='#D87706' class='sc-dmqHEX hqWaKu'><svg xmlns='http://www.w3.org/2000/svg' fill='none' focusable='false' viewBox='0 0 32 32' style='width: auto;height: 24px;'><path d='M14.5986 16H17.4014V23.007H14.5986V16ZM14.5986 10.3944H17.4014V13.1972H14.5986V10.3944ZM16 2C8.26426 2 2 8.27827 2 16C2 23.7217 8.27827 30 16 30C23.7217 30 30 23.7217 30 16C30 8.27827 23.7217 2 16 2Z' fill='currentColor' style='fill: #D87706;'></path></svg></i><div id='MainPart_lbManualUpdateWarning-message-container'><b>VocÃª nÃ£o tem conexÃ£o Ã  internet</b>. <span>Quando se reconectar voltarÃ¡ ao seu lugar na fila.</span></div>"
      );
    // 'Error, no internet connection' end

    // 'Queue paused' start
    $("#queue-paused")
      .text("")
      .append(
        "<i id='queue-paused-warning-icon' aria-hidden='true' color='#D87706' class='sc-dmqHEX hqWaKu'><svg xmlns='http://www.w3.org/2000/svg' fill='none' focusable='false' viewBox='0 0 32 32' style='width: auto;height: 24px;'><path d='M14.5986 16H17.4014V23.007H14.5986V16ZM14.5986 10.3944H17.4014V13.1972H14.5986V10.3944ZM16 2C8.26426 2 2 8.27827 2 16C2 23.7217 8.27827 30 16 30C23.7217 30 30 23.7217 30 16C30 8.27827 23.7217 2 16 2Z' fill='currentColor' style='fill: #D87706;'></path></svg></i><div id='queue-paused-message-container'><b>A fila estÃ¡ pausada</b>. <span>Em breve retomaremos o acesso ao site.</span></div>"
      );
    // 'Queue paused' end

    // 'First in line message' start
    $("#first-in-line")
      .text("Chegou a sua vez!")
      .append(
        "<span id='first-in-line-mkt-message'>Estamos te redirecionando para as melhores ofertas.</span>"
      );
    // 'First in line message' end

    $("#estimated-time").insertBefore(".warning-box");
    $("#MainPart_lbWhichIsInText").text("VocÃª entrarÃ¡ em:");
    $("#hlLinkToQueueTicket2Text").text(
      "Transferir meu nÃºmero de fila para outro dispositivo:"
    );

    // 'Share queue id and position' start

    $("#queueIdLinkModalLabel").text("Transferir meu nÃºmero de fila");
    $("#queueIdLinkModalDescription").text(
      "Para transferir seu lugar na fila para outro navegador ou dispositivo, copie seu link Ãºnico a seguir. Caso compartilhe seu link com mais alguÃ©m, essa pessoa poderÃ¡ pegar seu lugar na fila e vocÃª deverÃ¡ voltar a entrar na sala espera."
    );
    $("#copyToClipboardButton")
      .text("Copiar meu nÃºmero de fila")
      .append(
        "<svg id='copyToClipboardIcon' width='18' height='22' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.2308 0.5H1.95707C0.923651 0.5 0.078125 1.35909 0.078125 2.40909V15.7727H1.95707V2.40909H13.2308V0.5ZM16.0492 4.31818H5.71497C4.68155 4.31818 3.83602 5.17727 3.83602 6.22727V19.5909C3.83602 20.6409 4.68155 21.5 5.71497 21.5H16.0492C17.0826 21.5 17.9281 20.6409 17.9281 19.5909V6.22727C17.9281 5.17727 17.0826 4.31818 16.0492 4.31818ZM16.0492 19.5909H5.71497V6.22727H16.0492V19.5909Z' fill='#4658DF'/></svg>"
      );

    // 'Share queue id and position' end

    // 'Enter to the site modal' start

    $("#h2ConfirmRedirect").text("Ei, atenÃ§Ã£o: sua entrada foi liberada Ã s");
    $("#buttonConfirmRedirect").text("Entrar");
    $("#pConfirmRedirect").text(
      "VocÃª tem 10 minutos a partir desse horÃ¡rio para entrar no site."
    );

    // 'Enter to the site modal' end
  }
  // 'Your estimated wait time is' end

  // 'Status last updated' start
  $("#MainPart_divProgressbarBox_Holder_LastUpdateTime").insertBefore(
    "#footer"
  );
  $("#MainPart_divProgressbarBox_Holder_LastUpdateTime").prepend(
    "<span>Esta pÃ¡gina se atualiza automaticamente.</span>"
  );
  $("#MainPart_lbLastUpdateTime").text("Ãšltima atualizaÃ§Ã£o");
  $("#MainPart_lbWhichIsInText").text("VocÃª entrarÃ¡ em:");
  // 'Status last updated' end
});
