var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $("body").attr("data-pageid");
  culture = $("body").attr("data-culture");

  if (pageid === "before") {
    // Update #MainPart_lbEventStartTime
    // We assume the element is bound to the original eventStartTimeFormatted.
    // Since we can't change the HTML, we can intercept by using our computed value
    // and writing directly to textContent whenever it changes.
    (function updateEventStartTimeElement() {
      const el = document.getElementById("MainPart_lbEventStartTime");
      if (el && queueViewModel.ticket.eventStartTimeReformatted) {
        ko.computed(function () {
          el.textContent = queueViewModel.ticket.eventStartTimeReformatted();
        });
      }
    })();
  }

  if (pageid === "queue") {
    (function () {
      // Check if queueViewModel and ticket exist to avoid errors
      if (typeof queueViewModel === "undefined" || !queueViewModel.ticket) {
        console.warn("queueViewModel or ticket object not found.");
        return;
      }

      /**
       * Utility function to safely format a number as a localized string.
       * If the value is not a number or is undefined/null, it returns the original value.
       */
      function formatNumber(value) {
        if (typeof value === "number" && !isNaN(value)) {
          return value.toLocaleString("de-DE");
        }
        return value;
      }

      // Create computed observables for each numeric field you want to reformat.
      // Each computed observable will automatically update whenever the underlying observable changes.

      // Example 1: Formatting the queue number
      if (ko.isObservable(queueViewModel.ticket.queueNumber)) {
        queueViewModel.ticket.queueNumberFormatted = ko.computed(function () {
          const rawValue = queueViewModel.ticket.queueNumber();
          return formatNumber(rawValue);
        });
      }

      // Example 2: Formatting the number of users ahead
      if (ko.isObservable(queueViewModel.ticket.usersInLineAheadOfYou)) {
        queueViewModel.ticket.usersInLineAheadOfYouFormatted = ko.computed(
          function () {
            const rawValue = queueViewModel.ticket.usersInLineAheadOfYou();
            return formatNumber(rawValue);
          }
        );
      }

      // If there are other numeric fields, you can follow the same pattern:
      // For instance, if `ticket.whichIsIn` returned a numeric value (e.g., minutes), you could do:
      // if (ko.isObservable(queueViewModel.ticket.whichIsIn)) {
      //   queueViewModel.ticket.whichIsInFormatted = ko.computed(function () {
      //     const rawValue = queueViewModel.ticket.whichIsIn();
      //     return formatNumber(rawValue);
      //   });
      // }

      /**
       * Now, since you cannot modify the HTML directly, you can use a ko.computed or subscription
       * to update the existing textContent dynamically. This approach taps into the existing
       * observable properties without changing the original data-bind attributes.
       */

      // Example: Updating #MainPart_lbQueueNumber in real-time
      (function updateQueueNumberElement() {
        const el = document.getElementById("MainPart_lbQueueNumber");
        if (el && queueViewModel.ticket.queueNumberFormatted) {
          ko.computed(function () {
            el.textContent = queueViewModel.ticket.queueNumberFormatted();
          });
        }
      })();

      // Example: Updating #MainPart_lbUsersInLineAheadOfYou in real-time
      (function updateUsersAheadElement() {
        const el = document.getElementById("MainPart_lbUsersInLineAheadOfYou");
        if (el && queueViewModel.ticket.usersInLineAheadOfYouFormatted) {
          ko.computed(function () {
            el.textContent =
              queueViewModel.ticket.usersInLineAheadOfYouFormatted();
          });
        }
      })();

      // Repeat similarly for other elements that need formatting.
    })();
  }
});
