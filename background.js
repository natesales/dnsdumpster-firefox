browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.create({
    "url": "https://dnsdumpster.com?site=" + String(tab.url).replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0]
  });
});
