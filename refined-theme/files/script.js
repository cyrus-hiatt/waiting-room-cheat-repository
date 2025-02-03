var pageid;
var culture;
var currentProgress = 0;
const version = "1.01";
function debugLog(message) {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("previewid") || queueViewModel.options.isPreview) {
    console.log("DEBUG: " + message);
  }
}
queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  $("#main-top").insertBefore("#main");

  if (pageid === "before") {
    $("#MainPart_ulProgressbarBox_Holder_Processbar").insertAfter(
      "#whatisthis"
    );
    $("#MainPart_divProgressbarBox_Holder_LastUpdateTime").insertAfter(
      "#MainPart_ulProgressbarBox_Holder_Processbar"
    );

    $(".warning-box .beforeElement").prependTo("#MainPart_divProgressbarBox");
  }
  $("#queueIdModal_Header").prependTo("#queueIdLinkModal_Body"); //all pages

  if (pageid === "queue") {
    $("#pConfirmRedirectTime").appendTo("#h2ConfirmRedirect");

    span_container = $(
      '<div id="span_container_messages" data-bind="visible: layout.firstInLineVisible() ||  layout.queueIsPausedVisible() "></div><div id="span_container"></div>'
    );
    $("#MainPart_pProgressbarBox_Holder_Larger").append(span_container);

    $("#span_container_messages").append($("#queue-paused"));
    $("#span_container_messages").append($("#first-in-line"));
    $("#span_container_messages").append($("#serviced-soon"));
    ko.applyBindings(
      queueViewModel,
      document.getElementById("span_container_messages")
    );

    span_container_inner_1 = $("#MainPart_lbQueueNumberText").parent("span");
    span_container_inner_1.addClass("s_outer");
    $("#span_container").append(span_container_inner_1);

    span_container_inner_2 = $(
      '<span class="s_outer" id="users-ahead-container" data-bind="visible: layout.usersInLineAheadOfYouVisible"></span>'
    );
    span_container_inner_2.append($("#MainPart_lbUsersInLineAheadOfYouText"));
    span_container_inner_2.append($("#MainPart_lbUsersInLineAheadOfYou"));
    $("#span_container").append(span_container_inner_2);
    ko.applyBindings(
      queueViewModel,
      document.getElementById("users-ahead-container")
    );

    span_container_inner_4 = $(
      '<span class="s_outer" id="relative-wait-time-container" data-bind="visible: layout.whichIsInVisible"></span>'
    );
    span_container_inner_4.append($("#MainPart_lbWhichIsInText"));
    span_container_inner_4.append($("#MainPart_lbWhichIsIn"));
    $("#span_container").append(span_container_inner_4);
    ko.applyBindings(
      queueViewModel,
      document.getElementById("relative-wait-time-container")
    );

    span_container_inner_3 = $(
      '<span class="s_outer" id="expected-arival-time-container" data-bind="visible: layout.expectedServiceTimeVisible"></span>'
    );
    span_container_inner_3.append($("#MainPart_lbExpectedServiceTimeText"));
    time_container_posfix = $('<span class="time_outer"></span>');
    span_container_inner_3.append(time_container_posfix);
    time_container_posfix.append($("#MainPart_lbExpectedServiceTime"));
    time_container_posfix.append(
      $("#MainPart_lbExpectedServiceTimeTimeZonePostfix")
    );
    $("#span_container").append(span_container_inner_3);
    ko.applyBindings(
      queueViewModel,
      document.getElementById("expected-arival-time-container")
    );

    span_container_inner_5 = $(
      '<span class="s_outer status_last_updated" id="MainPart_divProgressbarBox_Holder_LastUpdateTime_container" ></span>'
    );
    span_container_inner_5.append(
      $("#MainPart_ulProgressbarBox_Holder_Processbar")
    );
    span_container_inner_5.append(
      $("#MainPart_divProgressbarBox_Holder_LastUpdateTime")
    );
    $("#span_container").append(span_container_inner_5);

    setTheProcentage(queueViewModel.options.inqueueInfo.ticket.progress);
  }
});

function setTheProcentage(prog) {
  var progressToSet = prog * 100;
  if (currentProgress < progressToSet) {
    currentProgress++;
    setTimeout(function () {
      $("#MainPart_divProgressbar_Progress_Runner").text(
        currentProgress + " %"
      );
      setTheProcentage(prog);
    }, 24);
  }
}

queueViewModel.modelUpdated(function (data) {
  if (pageid === "queue") {
    setTheProcentage(data.ticket.progress);
  }
});
