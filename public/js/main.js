import PathServant from './paths/servants.js'

if (window.location.pathname === "/servants") {
  new PathServant(window.location.pathname, 90)
}

// Others function
document.addEventListener("DOMContentLoaded", function () {
  var elems2 = document.querySelectorAll(".splide");

  if (elems2.length > 0) {
    new Splide(".splide", {
      width: "300px",
      height: "420px",
      type: "loop",
      pagination: false,
      lazyLoad: "nearby",
      start: 1,
    }).mount();
  }

  var tabs = document.getElementsByClassName("tabs");
  if (tabs) {
    var instance = M.Tabs.init(tabs[0], {
      onShow: () => {
        var elems2 = document.querySelectorAll(".splide");

        if (elems2.length > 0) {
          new Splide(".splide", {
            width: "300px",
            height: "400px",
            type: "loop",
            pagination: false,
            lazyLoad: "nearby",
            preloadPages: true,
            start: 1,
          }).mount();
        }

        var skillsTabs = document.getElementById("skillTabs");
        new ScrollBooster({
          viewport: skillsTabs,
          content: skillsTabs,
          scrollMode: "native",
          emulateScroll: true, // scroll on wheel events
          direction: "horizontal",
        });
      },
    });

    if (tabs[1]) var instance = M.Tabs.init(tabs[1], {}); // Skills
    if (tabs[2]) var instance = M.Tabs.init(tabs[2], {}); // Np
  }
});

window.onload = () => {
  var elems = document.querySelectorAll(".autocomplete");
  var svtlist = document.getElementById("servantlist");

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  if (elems.length > 0) {
    var instances = M.Autocomplete.init(elems, {
      data: JSON.parse(svtlist.value),
      onAutocomplete: (text) => {
        var rgex = /\[(.*?)\]/g;
        var servantID = rgex.exec(text);
        $(location).attr("href", "/servant/" + servantID[1]);
      },
    });
  }
}
