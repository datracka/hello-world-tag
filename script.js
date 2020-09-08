(function (w, d) {
  w.addEventListener("load", () => jstag.getid((id) => console.log("id", id)));
  function initMobilize(uc, uf) {
    console.log("initMobilize", uc, uf);
    w.addEventListener("load", () =>
      jstag.getid((id) => console.log("id2", id))
    );
  }
  return { initMobilize };
})(window, document);
