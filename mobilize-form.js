var mobilize = (function (w) {
  var ENABLE_DEBUGGING = true;
  var CONTAINER_ID = "form-container";

  function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
      m,
      key,
      value
    ) {
      vars[key] = value;
    });
    return vars;
  }

  function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
      urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
  }

  function init(uc, uf) {
    var UNIQUE_CAMPAIGN = uc;
    var UNIQUE_FORM = uf;

    w.addEventListener("load", () => {
      try {
        jstag.getid((id) => {
          console.log("id", id, UNIQUE_CAMPAIGN, UNIQUE_FORM);
          let numericPartOfUid = id.slice(2);
          let utmTerm = getUrlParam("utm_term", "");
          let utmSource = getUrlParam("utm_source", "");
          let utmContent = getUrlParam("utm_content", "");
          let utmCampaign = getUrlParam("utm_campaign", "");
          let utmMedium = getUrlParam("utm_medium", "");
          let firstName = getUrlParam("first_name", "");
          let lastName = getUrlParam("last_name", "");
          let email = getUrlParam("email", "");
          let telephone = getUrlParam("telephone", "");

          ENABLE_DEBUGGING
            ? console.log(
                "parameters to send to lytics",
                `_uid=${numericPartOfUid} utm_campaign=${utmCampaign} utm_term=${utmTerm} utm_source=${utmSource} utm_content=${utmContent} utm_medium=${utmMedium}
                 first_name=${firstName} last_name=${lastName} email=${email} telephone=${telephone}`
              )
            : null;
          // create iFrame and append to `div`
          let d = document.getElementById(CONTAINER_ID);
          let ifrm = document.createElement("iframe");
          ifrm.setAttribute(
            "src",
            `https://takeaction.citizenwindow.io/?uc=${UNIQUE_CAMPAIGN}&uf=${UNIQUE_FORM}&_uid=${numericPartOfUid}&utm_term=${utmTerm}&utm_source=${utmSource}&utm_content=${utmContent}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&first_name=${firstName}&last_name=${lastName}&email=${email}&telephone=${telephone}`
          );
          ifrm.setAttribute("id", "advocates-iframe");
          ifrm.setAttribute("width", "100%");
          ifrm.setAttribute("height", "720px");
          ifrm.setAttribute("allowtransparency", true);
          ifrm.setAttribute("frameborder", "0");
          ifrm.setAttribute("scrolling", "no");
          d.appendChild(ifrm);
        });
      } catch (err) {
        console.log("Lytics jstag not found!!", err);
      }
    });
  }

  return { init };
})(window);
