var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  if ($("#background-video").length === 0) {
    $(` <video autoplay muted loop id="background-video">
        <source src="files/assets/background-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`).appendTo("body");
  }
});
