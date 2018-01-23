Xcelcious = {
  ApiURL: "http://localhost:100/api",
  IsMobile: false,
  SimulateMobile: true,
  Camera: {
    PhotoFromLibrary: function (success, fail) {
      if (Xcelcious.IsMobile || Xcelcious.SimulateMobile) {
        navigator.camera.getPicture(success, fail, {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          //targetWidth: 1024,
          //targetHeight: 768,
          correctOrientation: true,
          allowEdit: false,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });
      } else {
        //TODO: Add camera for browser
      }
    },
    PhotoFromCamera: function (success, fail) {
      if (Xcelcious.IsMobile || Xcelcious.SimulateMobile) {
        navigator.camera.getPicture(success, fail, {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          //targetWidth: 1024,
          //targetHeight: 768,
          correctOrientation: true,
          allowEdit: false,
          sourceType: Camera.PictureSourceType.CAMERA
        });
      } else {
        //TODO: Add camera for browser
      }
    }
  },
  Device: {
    Authenticate: function () {
      Xcelcious.Http.Request({
        url: "device/authenticate/" + (Xcelcious.IsMobile ? device.uuid : "test"),
        success: function (http) {
          var json = JSON.parse(http.responseText);

          json = JSON.parse(json);

          if (json.active) {
            return json.credits
          } else {
            return null;
          }
        }
      });
    }
  },
  Http: {
    GetHttp: function () {
      /// <summary>Gets the HTTP for geekCo.Http.Request. Do not use indipendantly.</summary>
      if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
      }

      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (ex) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (ex2) {}
      }

      return false;
    },
    Request: function (options) {

      var url = options.url;
      var parameters = options.parameters;
      var success = options.success;
      var successParamaters = options.successParamaters;
      var async = options.async;
      var method = options.method;
      var formData = options.formData;
      var apiCall = options.apiCall;
      var jsonPost = options.jsonPost;

      if (!apiCall) {
        apiCall = true;
      }

      url = (url == null ? "" : url);

      if (url == null || url.trim() == "") {
        throw "Xcelcious.Http.Request, url not supplied";
      }

      if (async == null) {
        async = true;
      }

      if (method == null) {
        if (Xcelcious.IsMobile || Xcelcious.SimulateMobile) {
          method = "GET";
        } else {
          method = "POST";
        }
      }

      if (apiCall) {
        url = Xcelcious.ApiURL + "" + (url.indexOf("/") != 0 ? "/" : "") + url;
      } else {
        if (Xcelcious.IsMobile || Xcelcious.SimulateMobile) {
          url = url;
        } else {
          url = (url.indexOf("/") != 0 ? "/" : "") + url;
        }
      }

      var urlParameters = "";
      var parameter = null;

      if (parameters != null && formData == null) {
        var paramCount = 0;
        for (parameter in parameters) {
          paramCount++
          if (!(url.indexOf("?") >= 0) && paramCount == 1) {
            urlParameters += "?" + parameter + "=" + encodeURIComponent(parameters[parameter]);
          } else {
            urlParameters += "&" + parameter + "=" + encodeURIComponent(parameters[parameter]);
          }
        }
      }

      if (formData != null) {
        if (parameters != null) {
          for (parameter in parameters) {
            formData.append(parameter, JSON.stringify(parameters[parameter]));
          }
        }
      }

      var http = Xcelcious.Http.GetHttp();
      http.onerror = function () {
        alert("error")
      };

      http.open(method, url + urlParameters, async);

      if (formData == null) {
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      } else {
        if (jsonPost) {
          http.setRequestHeader("Content-Type", "application/json");
        }
      }

      if (async) {
        http.onreadystatechange = function () {
          Xcelcious.Http.HandleHttpRequest(http, success, successParamaters, url);
        };
      }

      try {
        if (Xcelcious.IsMobile || Xcelcious.SimulateMobile) {
          if (jsonPost) {
            http.send((formData == null ? null : JSON.stringify(parameters)));
          } else {
            http.send();
          }
        } else {
          if (jsonPost) {
            http.send((formData == null ? null : JSON.stringify(parameters)));
          } else {
            http.send((formData == null ? urlParameters : formData));
          }
        }
      } catch (exFailed) {}

      if (!async) {
        return Xcelcious.Http.HandleHttpRequest(http, success, successParamaters, url);
      }
    },
    HandleHttpRequest: function (http, success, successParamaters, url) {
      /// <summary>This Handles the AJAX Call used in Xcelcious.Http.Request. Use Xcelcious.Http.Request instead.</summary>
      if (http.readyState == 4) {
        var message = "";

        switch (http.status) {
          case 0:
            message = "It seems that we could not connect to the server. Please check your internet connection and try again.\n\nError Code: 0";

            if (callbackFailed == null) {
              alert(message);
            } else {
              callbackFailed(http, http.statusText, http.status, http);
            }
            return false;
          case 200:
            if (success != null) {
              if (typeof success == "string") {
                throw "Xcelcious.Common > HandleHttpRequest: " + success + " is not a callback function";
              }
              success(http, successParamaters);
            }
            return http;
          case 404:
            throw "Xcelcious.Http.Request\n\nPage not found: " + url;
            break;
          case 525:
            alert("no session");
            return false;
          case 526:
            alert("access denied");
            return false;
          default:
            message = "Unfortunately we encountered an unknown error.\n\nError Code:\n" + http.status + "\n\nError:\n" + http.statusText + "\n\nUrl:\n" + url;

            alert(message);
            return false;
        }
      }
    }
  },
  Page: {
    ReadyCheck: function (callback) {
      if (Xcelcious.IsMobile) {
        document.addEventListener("deviceready", function () {
          callback();
        }, false);
      } else {
        Xcelcious.Page.DocumentReadyChecker.PageReady(
          function () {
            callback()
          }
        );
      }
    },
    DocumentReadyChecker: {
      ReadyList: [],
      ReadyFired: false,
      ReadyEventHandlersInstalled: false,
      Ready: function () {
        if (!Xcelcious.Page.DocumentReadyChecker.ReadyFired) {
          Xcelcious.Page.DocumentReadyChecker.ReadyFired = true;
          for (var i = 0; i < Xcelcious.Page.DocumentReadyChecker.ReadyList.length; i++) {
            Xcelcious.Page.DocumentReadyChecker.ReadyList[i].fn.call(window, Xcelcious.Page.DocumentReadyChecker.ReadyList[i].ctx);
          }
          Xcelcious.Page.DocumentReadyChecker.ReadyList = [];
        }
      },
      ReadyStateChange: function () {
        if (document.readyState === "complete") {
          Xcelcious.Page.DocumentReadyChecker.Ready();
        }
      },
      PageReady: function (callback, context) {
        if (typeof callback !== "function") {
          throw new TypeError("callback for docReady(fn) must be a function");
        }
        if (Xcelcious.Page.DocumentReadyChecker.ReadyFired) {
          setTimeout(function () {
            callback(context);
          }, 1);
          return;
        } else {
          Xcelcious.Page.DocumentReadyChecker.ReadyList.push({
            fn: callback,
            ctx: context
          });
        }
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
          setTimeout(Xcelcious.Page.DocumentReadyChecker.Ready, 1);
        } else if (!Xcelcious.Page.DocumentReadyChecker.ReadyEventHandlersInstalled) {
          if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", Xcelcious.Page.DocumentReadyChecker.Ready, false);
            window.addEventListener("load", Xcelcious.Page.DocumentReadyChecker.Ready, false);
          } else {
            document.attachEvent("onreadystatechange", Xcelcious.Page.DocumentReadyChecker.ReadyStateChange);
            window.attachEvent("onload", Xcelcious.Page.DocumentReadyChecker.Ready);
          }
          Xcelcious.Page.DocumentReadyChecker.ReadyEventHandlersInstalled = true;
        }
      }
    }
  },
  PDF: {
    GenerateFormImages: function (options) {

      var fileName = options.fileName;
      var images = options.images;

      var pdf = new jsPDF();

      for (var i = 0; i < images.length; i++) {
        pdf.addPage();
        pdf.addImage(images[i], 'JPEG', 0, 0);
      }

      debugger;
      pdf.save(fileName + ".pdf");
    }
  }
};
