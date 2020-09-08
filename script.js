var mobilize = (function (w) {
  var UNIQUE_CAMPAIGN = uc;
  var UNIQUE_FORM = uf;
  var ENABLE_DEBUGGING = true;
  var CONTAINER_ID = "form-container";

  w.addEventListener("load", () =>
    jstag.getid((id) => {
      console.log("id", id, UNIQUE_CAMPAIGN, UNIQUE_FORM);
    })
  );
  function init(uc, uf) {
    UNIQUE_CAMPAIGN = uc;
    UNIQUE_FORM = uf;
  }
  return { init };
})(window);
