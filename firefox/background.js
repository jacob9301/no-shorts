const redirect = (tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("youtube.com/shorts")) {
        browser.tabs.goBack(tabId);
    }
}

browser.tabs.onUpdated.addListener(redirect);