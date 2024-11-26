var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  if (pageid === "softblock") {
    $("#lbHeaderP").text(
      "You are in line for Formula 1 Singapore Airlines Singapore Grand Prix 2025 tickets. When it is your turn, you will have 10 minutes to enter the website"
    );
  }
});
