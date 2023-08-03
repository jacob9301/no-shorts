const redirect = (tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("youtube.com/shorts")) {
        chrome.tabs.goBack(tabId);
    }
}

chrome.tabs.onUpdated.addListener(redirect);