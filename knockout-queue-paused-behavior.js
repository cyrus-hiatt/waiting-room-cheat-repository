var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  if (pageid === "queue") {
    (function subscribeToQueuePause() {
      if (ko.isObservable(queueViewModel.layout.queueIsPausedVisible)) {
        queueViewModel.layout.queueIsPausedVisible.subscribe(function (
          isPaused
        ) {
          const el = document.getElementById("queue-paused");

          if (el) {
            if (isPaused) {
              console.log("Queue is paused - executing additional logic...");
              el.textContent = "The queue is currently paused.";
            } else {
              console.log("Queue resumed.");
            }
          }
        });
      }
    })();
  }
});
