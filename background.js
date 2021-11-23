browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.create({
        "url": "https://dnsdumpster.com/#" + tab.url
            .replace("https://", "")
            .replace("http://", "")
            .replace("www.", "")
            .split("/")[0]
    });
});
