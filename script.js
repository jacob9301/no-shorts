const ytd = document.body.getElementsByTagName('ytd-app')[0];
const content = ytd.querySelector('#content');

const miniGuidePurge = () => {
    try {    
        const miniGuideElements = content.getElementsByTagName('ytd-mini-guide-entry-renderer');
        
        if (miniGuideElements.length > 1) {
        clearInterval(miniGuideInterval);
        const shorts = miniGuideElements[1];
        shorts.remove();
        }
    } catch (err) {
        console.log('oopsy');
    }
}
  
const guidePurge = () => {
    try {    
        const guideElements = content.getElementsByTagName('tp-yt-paper-item');
        
        if (guideElements.length > 1) {
            clearInterval(guideInterval);
            const shorts = guideElements[1].parentElement;
            shorts.remove();
        }
    } catch (err) {
        console.log('oopsy');
    }
}

const dismissiblePurge = () => {
    try {
        const ytdRichSection = content.getElementsByTagName('ytd-rich-section-renderer');

        for (i = 0; i < ytdRichSection.length; i++) {
            const dismissible = ytdRichSection[i];
            dismissible.remove();
            
        } 
    } catch (err) {
        console.log('oopsy');
    }
} 

const miniGuideInterval = setInterval(miniGuidePurge, 100);
const guideInterval = setInterval(guidePurge, 100);
const dismissibleInterval = setInterval(dismissiblePurge, 100);

window.addEventListener('beforeunload', () => {
    clearInterval(dismissibleInterval);
    clearInterval(guidePurge);
    clearInterval(miniGuidePurge);
});

window.addEventListener('unload', () => {
    clearInterval(dismissibleInterval);
    clearInterval(guidePurge);
    clearInterval(miniGuidePurge);
  });