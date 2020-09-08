var mobilize = (function (w) {
  w.addEventListener("load", () => jstag.getid((id) => console.log("id", id)));
  function initMobilize(uc, uf) {
    console.log("initMobilize", uc, uf);
  }
  return { initMobilize };
})(window);
