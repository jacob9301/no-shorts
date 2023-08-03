const removeShortsElements = (node) => {
    const nodeNames = ['YTD-SHELF-RENDERER', 'TP-YT-PAPER-TAB', 'YTD-REEL-SHELF-RENDERER'];
    
    const containsShorts = /shorts/i.test(node.outerText);

    if (containsShorts && nodeNames.includes(node.nodeName)) {
        node.remove();
        return;
    }

    if (node.href && node.href.includes('/shorts/')) {
        const videoElement = node.closest('ytd-video-renderer, ytd-rich-item-renderer');
        if (videoElement) {
            videoElement.remove();
            return;
        }
    }
};

const ytd = document.body.getElementsByTagName('ytd-app')[0];
const content = ytd.querySelector('#content');

const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.addedNodes.length > 0) {
            for (const addedNode of mutation.addedNodes) {
                removeShortsElements(addedNode);
            }
        }
    }
});

observer.observe(content, { subtree: true, childList: true });