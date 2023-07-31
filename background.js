const redirect = (tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("youtube.com/shorts")) {
        if (typeof browser !== "undefined" && browser.tabs) {
            browser.tabs.goBack(tabId);
        } else if (typeof chrome !== "undefined" && chrome.tabs) {
            chrome.tabs.goBack(tabId);
        }
    }
}

if (typeof browser !== "undefined" && browser.tabs) {
    browser.tabs.onUpdated.addListener(redirect);
} else if (typeof chrome !== "undefined" && chrome.tabs) {
    chrome.tabs.onUpdated.addListener(redirect);
}