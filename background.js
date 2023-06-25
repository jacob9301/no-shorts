chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url.includes("www.youtube.com/shorts")) {
        chrome.tabs.update(details.tabId, { url: "https://youtube.com" });
    }
  });