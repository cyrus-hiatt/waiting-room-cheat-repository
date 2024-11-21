var __extends, QueueIt;
(function (n) {
  var t;
  (function (n) {
    n.Version = "1.8.3";
  })((t = n.Javascript || (n.Javascript = {})));
})(QueueIt || (QueueIt = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {}
        return (
          (n.parse = function (n, t) {
            function u(n, i) {
              var f,
                e,
                r = n[i];
              if (r && typeof r == "object")
                for (f in r)
                  Object.prototype.hasOwnProperty.call(r, f) &&
                    ((e = u(r, f)), e !== undefined ? (r[f] = e) : delete r[f]);
              return t.call(n, i, r);
            }
            if ((t === void 0 && (t = null), !n)) return null;
            if (typeof JSON == "object") return JSON.parse(n, t);
            var i =
                /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              r;
            if (
              ((n = String(n)),
              (i.lastIndex = 0),
              i.test(n) &&
                (n = n.replace(i, function (n) {
                  return (
                    "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                  );
                })),
              /^[\],:{}\s]*$/.test(
                n
                  .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                  .replace(
                    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]"
                  )
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
              ))
            )
              return (
                (r = eval("(" + n + ")")),
                typeof t == "function"
                  ? u(
                      {
                        "": r
                      },
                      ""
                    )
                  : r
              );
            throw new SyntaxError("JSON.parse");
          }),
          n
        );
      })();
      n.Json = t;
    })((t = n.Tools || (n.Tools = {})));
  })(QueueIt || (QueueIt = {})),
  (function (n) {
    var t;
    (function (t) {
      var i;
      (function (t) {
        var i = (function () {
            function n() {}
            return (
              (n.ENTERED_QUEUE_GOT_QUEUEID = "EnteredQueueGotQueueId"),
              (n.QUEUEID_ALREADY_EXIST = "QueueIdAlreadyExist"),
              (n.INVALID_CAPTCHA_TOKEN = "InvalidCaptchaToken"),
              (n.MISSING_CUSTOM_DATA_KEY = "MissingCustomDataKey"),
              (n.UNIQUE_KEY_VIOLATION = "UniqueKeyViolation"),
              (n.UNEXPECTED_FAILURE_TO_ENQUEUE = "UnexpectedFailureToEnqueue"),
              (n.IDLE_QUEUE_ILLEGAL_ACTION = "IdleQueueIllegalAction"),
              (n.CUSTOM_DATA_UPDATED = "CustomDataUpdated"),
              (n.MISSING_QUEUE_ID = "MissingQueueId"),
              (n.UNEXPECTED_FAILURE_TO_UPDATE = "UnexpectedFailureToUpdate"),
              (n.INVALID_QUEUEIT_ENQUEUE_TOKEN = "InvalidQueueitEnqueueToken"),
              n
            );
          })(),
          u = (function () {
            function t(n, t) {
              n === void 0 && (n = !1);
              var u = this;
              this.getQueryString = function () {
                return window.location.search.substring(1);
              };
              this.enqueueWithTokenFromUrl = function (n, t) {
                u.enqueueWithToken(u.getQueryStringParam("qet"), n, t);
              };
              this.enqueueWithToken = function (n, t, i) {
                u.onEnqueued = t;
                u.onEnqueueFailed = i;
                var r = {
                  Type: "QueueitEnqueueToken",
                  QueueitEnqueueToken: n
                };
                u.postToParent(r);
              };
              this.enqueueWithCustomData = function (n, t, i, r, f) {
                u.onEnqueued = r;
                u.onEnqueueFailed = f;
                var e = {
                  Type: "Enqueue",
                  Key: n,
                  Email: t,
                  CustomData: i
                };
                u.postToParent(e);
              };
              this.enqueueWithKey = function (n, t, i) {
                u.onEnqueued = t;
                u.onEnqueueFailed = i;
                var r = {
                  Type: "Enqueue",
                  Key: n,
                  Email: null,
                  CustomData: null
                };
                u.postToParent(r);
              };
              this.postToParent = function (n) {
                parent.postMessage(n, "*");
              };
              this.notifyDirect = function (n) {
                u.handleMessageReceived(n);
              };
              this.receiveMessage = function (n) {
                if (!n.data || !n.data.Type) {
                  var t = u.deserialize(n.data);
                  u.handleMessageReceived(t);
                }
              };
              this.handleMessageReceived = function (n) {
                if (
                  n.messageType == i.ENTERED_QUEUE_GOT_QUEUEID &&
                  u.onEnqueued
                )
                  u.onEnqueued(n.queueId);
                else if (
                  n.messageType == i.IDLE_QUEUE_ILLEGAL_ACTION &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(
                    i.IDLE_QUEUE_ILLEGAL_ACTION,
                    n.enqueueParams
                  );
                else if (
                  n.messageType == i.QUEUEID_ALREADY_EXIST &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(i.QUEUEID_ALREADY_EXIST, n.enqueueParams);
                else if (
                  n.messageType == i.INVALID_CAPTCHA_TOKEN &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(i.INVALID_CAPTCHA_TOKEN, n.enqueueParams);
                else if (
                  n.messageType == i.MISSING_CUSTOM_DATA_KEY &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(i.MISSING_CUSTOM_DATA_KEY, n.enqueueParams);
                else if (
                  n.messageType == i.UNIQUE_KEY_VIOLATION &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(i.UNIQUE_KEY_VIOLATION, n.enqueueParams);
                else if (
                  n.messageType == i.UNEXPECTED_FAILURE_TO_ENQUEUE &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(
                    i.UNEXPECTED_FAILURE_TO_ENQUEUE,
                    n.enqueueParams
                  );
                else if (
                  n.messageType == i.CUSTOM_DATA_UPDATED &&
                  u.customdata.onCustomDataUpdated
                )
                  u.customdata.onCustomDataUpdated();
                else if (
                  n.messageType == i.MISSING_QUEUE_ID &&
                  u.customdata.onCustomDataUpdateFailed
                )
                  u.customdata.onCustomDataUpdateFailed(i.MISSING_QUEUE_ID);
                else if (
                  n.messageType == i.UNEXPECTED_FAILURE_TO_UPDATE &&
                  u.customdata.onCustomDataUpdateFailed
                )
                  u.customdata.onCustomDataUpdateFailed(
                    i.UNEXPECTED_FAILURE_TO_UPDATE
                  );
                else if (
                  n.messageType == i.INVALID_QUEUEIT_ENQUEUE_TOKEN &&
                  u.onEnqueueFailed
                )
                  u.onEnqueueFailed(
                    i.INVALID_QUEUEIT_ENQUEUE_TOKEN,
                    n.enqueueParams
                  );
              };
              this.listenParentFrame = function () {
                window.addEventListener
                  ? window.addEventListener("message", u.receiveMessage, !1)
                  : window.attachEvent &&
                    window.attachEvent("onmessage", function () {
                      return u.receiveMessage;
                    });
              };
              this.customdata = new r(this);
              this.listenParentFrame();
              n && (window.queueUserManager = this);
              t && (this.getQueryString = t);
            }
            return (
              (t.prototype.deserialize = function (t) {
                try {
                  var i = n.Tools.Json.parse(t);
                  return i ? i : {};
                } catch (r) {
                  return {};
                }
              }),
              (t.prototype.getQueryStringParam = function (n) {
                for (
                  var i, u, f = this.getQueryString().split("&"), t = 0, r = f;
                  t < r.length;
                  t++
                )
                  if (((i = r[t]), (u = i.split("=")[0]), u == n))
                    return i.split("=")[1];
                return undefined;
              }),
              t
            );
          })(),
          r;
        t.QueueUserManager = u;
        r = (function () {
          function n(n) {
            var t = this;
            this.queueUserManager = n;
            this.update = function (n, i, r, u) {
              t.onCustomDataUpdated = r;
              t.onCustomDataUpdateFailed = u;
              var f = {
                Type: "Update",
                Email: n,
                CustomData: i
              };
              t.queueUserManager.postToParent(f);
            };
          }
          return n;
        })();
        t.CustomData = r;
      })((i = t.CustomLayout || (t.CustomLayout = {})));
    })((t = n.Javascript || (n.Javascript = {})));
  })(QueueIt || (QueueIt = {}));
(__extends =
  (this && this.__extends) ||
  (function () {
    var n =
      Object.setPrototypeOf ||
      ({
        __proto__: []
      } instanceof Array &&
        function (n, t) {
          n.__proto__ = t;
        }) ||
      function (n, t) {
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
      };
    return function (t, i) {
      function r() {
        this.constructor = t;
      }
      n(t, i);
      t.prototype =
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })()),
  (function (n) {
    var t;
    (function (t) {
      var i;
      (function (t) {
        var u = (function () {
            function n(n, t, i, r, u, f) {
              this.queueNumber = null;
              this.customerId = n;
              this.queueId = t;
              this.eventId = i;
              this.cultureId = r;
              this.targetUrl = u;
              this.tags = f;
            }
            return n;
          })(),
          i,
          f,
          e,
          r;
        t.UserInfo = u;
        i = (function () {
          function n(n, t) {
            this.key = n;
            this.value = t;
          }
          return n;
        })();
        f = (function (n) {
          function t() {
            return (n !== null && n.apply(this, arguments)) || this;
          }
          return __extends(t, n), t;
        })(i);
        t.TargetUrlParam = f;
        e = (function (n) {
          function t() {
            return (n !== null && n.apply(this, arguments)) || this;
          }
          return __extends(t, n), t;
        })(i);
        t.Tag = e;
        r = (function () {
          function t(n) {
            n === void 0 && (n = null);
            this.onUsersInLineAheadOfYouChanged = function () {};
            this.onQueueNumberChanged = function () {};
            this.onQueueIdChanged = function () {};
            this.onPageIdChanged = function () {};
            this.onTargetUrlParamsChanged = function () {};
            this.onTargetUrlChanged = function () {};
            this.onTagsChanged = function () {};
            this.userInfo = this.getUserInfo(n);
            this.listenParentFrame();
            this.requestRefresh();
          }
          return (
            (t.prototype.getCustomerId = function () {
              return this.userInfo.customerId;
            }),
            (t.prototype.getQueueId = function () {
              return this.userInfo.queueId;
            }),
            (t.prototype.getEventId = function () {
              return this.userInfo.eventId;
            }),
            (t.prototype.getPageId = function () {
              return this.userInfo.pageId;
            }),
            (t.prototype.getCultureId = function () {
              return this.userInfo.cultureId;
            }),
            (t.prototype.getQueueNumber = function () {
              return this.userInfo.queueNumber;
            }),
            (t.prototype.getUsersInLineAheadOfYou = function () {
              return this.userInfo.usersInLineAheadOfYou;
            }),
            (t.prototype.getTargetUrlParams = function () {
              return this.userInfo.targetUrlParams != null
                ? this.userInfo.targetUrlParams
                : [];
            }),
            (t.prototype.getTargetUrlParam = function (n) {
              return this.getFromKeyValuePairArray(
                this.userInfo.targetUrlParams,
                n
              );
            }),
            (t.prototype.hasQueueId = function () {
              var n = this.getQueueId();
              return n && n !== "00000000-0000-0000-0000-000000000000";
            }),
            (t.prototype.getTags = function () {
              return this.userInfo.tags != null ? this.userInfo.tags : [];
            }),
            (t.prototype.getTag = function (n) {
              return this.getFromKeyValuePairArray(this.userInfo.tags, n);
            }),
            (t.prototype.getFromKeyValuePairArray = function (n, t) {
              if (n == null) return null;
              var i = n.filter(function (n) {
                return n.key === t;
              });
              return i.length === 0 ? null : i[0].value;
            }),
            (t.prototype.getUserInfo = function (n) {
              var i, h, t;
              n ||
                (n = function () {
                  return window.location.search.substring(1);
                });
              var r = undefined,
                f = undefined,
                e = undefined,
                o = undefined,
                c = n(),
                s = c.split("&");
              for (i = 0; i < s.length; i++)
                (h = s[i]),
                  (t = h.split("=")),
                  t[0] === "c"
                    ? (r = t[1])
                    : t[0] === "q"
                    ? (f = t[1])
                    : t[0] === "e"
                    ? (e = t[1])
                    : t[0] === "cid" && (o = t[1]);
              return new u(r, f, e, o, null, null);
            }),
            (t.prototype.receiveMessage = function (n) {
              switch (n.messageType) {
                case "UpdateQueue":
                  if (n.queueId && this.userInfo.queueId !== n.queueId) {
                    this.userInfo.queueId = n.queueId;
                    this.onQueueIdChanged(this.userInfo.queueId);
                  }
                  if (
                    n.queueNumber &&
                    this.userInfo.queueNumber !== n.queueNumber
                  ) {
                    this.userInfo.queueNumber = n.queueNumber;
                    this.onQueueNumberChanged(this.userInfo.queueNumber);
                  }
                  if (n.targetUrl && this.userInfo.targetUrl !== n.targetUrl) {
                    this.userInfo.targetUrl = n.targetUrl;
                    this.onTargetUrlChanged(this.userInfo.targetUrl);
                  }
                  if (
                    n.usersInLineAheadOfYou &&
                    this.userInfo.usersInLineAheadOfYou !==
                      n.usersInLineAheadOfYou
                  ) {
                    this.userInfo.usersInLineAheadOfYou =
                      n.usersInLineAheadOfYou;
                    this.onUsersInLineAheadOfYouChanged(
                      this.userInfo.usersInLineAheadOfYou
                    );
                  }
                  if (n.pageId && this.userInfo.pageId !== n.pageId) {
                    this.userInfo.pageId = n.pageId;
                    this.onPageIdChanged(this.userInfo.pageId);
                  }
                  if (
                    n.targetUrlParams &&
                    !this.areArraysEqual(
                      n.targetUrlParams,
                      this.userInfo.targetUrlParams
                    )
                  ) {
                    this.userInfo.targetUrlParams = n.targetUrlParams;
                    this.onTargetUrlParamsChanged(
                      this.userInfo.targetUrlParams
                    );
                  }
                  if (
                    n.tags &&
                    !this.areArraysEqual(n.tags, this.userInfo.tags)
                  ) {
                    this.userInfo.tags = n.tags;
                    this.onTagsChanged(this.userInfo.tags);
                  }
                  return;
                default:
                  return;
              }
            }),
            (t.prototype.areArraysEqual = function (n, t) {
              if (!n && !t) return !0;
              if ((n && !t) || (t && !n) || n.length !== t.length) return !1;
              for (var i = 0; i < n.length; i++)
                if (n[i].key !== t[i].key || n[i].value !== t[i].value)
                  return !1;
              return !0;
            }),
            (t.prototype.deserialize = function (t) {
              try {
                var i = n.Tools.Json.parse(t);
                return i ? i : {};
              } catch (r) {
                return {};
              }
            }),
            (t.prototype.listenParentFrame = function () {
              var t = this;
              n &&
                n.Tools &&
                n.Tools.Json &&
                (window.addEventListener
                  ? window.addEventListener(
                      "message",
                      function (n) {
                        return t.receiveMessage(
                          t.deserialize(n.data),
                          t.userInfo
                        );
                      },
                      !1
                    )
                  : window.attachEvent &&
                    window.attachEvent("onmessage", function (n) {
                      return t.receiveMessage(
                        t.deserialize(n.data),
                        t.userInfo
                      );
                    }));
            }),
            (t.prototype.requestRefresh = function () {
              parent.postMessage('{"messageType":"RequestRefresh"}', "*");
            }),
            (t.prototype.refresh = function (n) {
              this.receiveMessage(this.deserialize(n), this.userInfo);
            }),
            t
          );
        })();
        t.QueueUserInfoClient = r;
        window.queueUserInfoClient = new r();
      })((i = t.CustomLayout || (t.CustomLayout = {})));
    })((t = n.Javascript || (n.Javascript = {})));
  })(QueueIt || (QueueIt = {}));
