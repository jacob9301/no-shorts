const ytd = document.body.getElementsByTagName('ytd-app')[0];
const content = ytd.querySelector('#content');

const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.addedNodes.length > 0) {

            for (let i = 0; i < mutation.addedNodes.length; i++) {
                const containsShorts = /shorts/i.test(mutation.addedNodes[i].outerText);
                if (containsShorts && (mutation.addedNodes[i].nodeName == 'YTD-SHELF-RENDERER' || 
                mutation.addedNodes[i].nodeName == 'TP-YT-PAPER-TAB' ||
                mutation.addedNodes[i].nodeName == 'YTD-REEL-SHELF-RENDERER')) {
                    mutation.addedNodes[i].remove();
                }
            }
        }
    }
});

observer.observe(content,{ subtree: true, childList: true });