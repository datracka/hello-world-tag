console.log("Hello World Tag", document.location.href);

(function bgInit() {
  console.log("module pattern");
  function mobilizeInit(uc, uf) {
    console.log("Start...");
    console.log(uc, uf);
  }
  return {
    mobilizeInit,
  };
})();
