const redirect = (details) => {
    if (details.url.includes("www.youtube.com/shorts")) {
        chrome.tabs.update(details.tabId, { url: "https://youtube.com" });
    }
} 

chrome.webNavigation.onBeforeNavigate.addListener(redirect);