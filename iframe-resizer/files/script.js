var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  iFrameResize({ checkOrigin: false }, "#middlepanel_iframe");

  if (pageid === "queue") {
  }
});
