var pageid;
var culture;

function setStrokeDasharray(currentProgress) {
  // Adjust circumference for the new radius (r = 47.5 instead of 45)
  const newCircumference = 2 * Math.PI * 47.5; // 298.45
  $(".progress-circle-prog").css(
    "stroke-dasharray",
    Math.round(currentProgress * newCircumference) + " 1000"
  );
}

function insertBackgroundSVG() {
  $(`<div class="background-svg">
       <img src="https://assets.queue-it.net/sisal/userdata/v2/assets/background.svg" 
            alt="Background SVG" 
            style="width: 100%; height: 100%;" />
     </div>`).insertBefore("#wrapper");
}

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  insertBackgroundSVG();

  if (pageid === "queue") {
    $(
      `<div class="progress-container">
         <svg class="progress-circle" width="112px" height="112px" xmlns="http://www.w3.org/2000/svg">
           <circle class="progress-circle-back" cx="56" cy="56" r="47.5"></circle>
           <circle class="progress-circle-prog" cx="56" cy="56" r="47.5"></circle>
         </svg>
       </div>`
    ).insertBefore("#header");
    setStrokeDasharray(queueViewModel.options.inqueueInfo.ticket.progress);
  }
});

// Update progress circle when the model is updated
queueViewModel.modelUpdated(function (data) {
  if (pageid === "queue") {
    setStrokeDasharray(data.ticket.progress);
  }
});
