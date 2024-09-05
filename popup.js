window.onload = (async () => {
    
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    console.log(tab.url);
    document.getElementById("redirectInput").value = tab.url;
    
})();