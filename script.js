var mobilize = (function (w) {
  function initMobilize(uc, uf) {
    w.addEventListener("load2", () =>
      jstag.getid((id) => console.log("id", id))
    );
  }
  return { initMobilize };
})(window);
