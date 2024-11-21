queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");

  var timestart = $("#MainPart_lbExpectedServiceTime").text();

  $("#MainPart_lbExpectedServiceTime").text(converTo24HourFormat(timestart));

  if (culture === "zh-CN") {
    if (pageid == "queue") {
    }
  }

  if (culture === "en-US") {
    if (pageid == "queue") {
    }
  }

  if (culture === "zh-HK") {
    if (pageid == "queue") {
    }
  }
});

function converTo24HourFormat(culture, text) {
  let regex;

  switch (culture) {
    case "en-US":
      regex = new RegExp(/(PM)/);
      break;
    case "zh-HK":
      regex = new RegExp(/(上午)/);

    default:
      // if there are no regex for that culture we simply return same text.
      console.log("culture not supported");
      return text;
  }

  var hrs = Number(text.match(/(\d+)/)[1]); //Get the hour from the string
  var mnts = Number(text.match(/:(\d+)/)[1]); //Get the minutes from the string
  if (regex.test(text) && hrs < 12) hrs = hrs + 12; //Check if its PM
  var hours = hrs.toString();
  var minutes = mnts.toString();
  if (hrs < 10) hours = "0" + hours;
  if (mnts < 10) minutes = "0" + minutes;
  var timeend = hours + ":" + minutes + ":00";
  console.log(timeend); // this is just for debug, you can delete after it.
  return timeend;
}
