const ytd = document.body.getElementsByTagName('ytd-app')[0];
const content = ytd.querySelector('#content');

const nodeNames = ['YTD-SHELF-RENDERER', 'TP-YT-PAPER-TAB', 'YTD-REEL-SHELF-RENDERER'];

const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.addedNodes.length > 0) {

            for (let i = 0; i < mutation.addedNodes.length; i++) {
                const containsShorts = /shorts/i.test(mutation.addedNodes[i].outerText);
                if (containsShorts && nodeNames.includes(mutation.addedNodes[i].nodeName)) {
                    mutation.addedNodes[i].remove();
                }
            }
        }
    }
});

observer.observe(content,{ subtree: true, childList: true });