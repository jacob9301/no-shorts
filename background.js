const redirect = (tabId, changeInfo, tab) => {
    if (changeInfo.url.includes("youtube.com/shorts")) {
        chrome.tabs.update(tabId, { url: "https://youtube.com" });
    }
}

chrome.tabs.onUpdated.addListener(redirect);