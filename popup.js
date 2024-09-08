window.onload = (async () => {
    
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const shortenedURL = tab.url.substring(0,tab.url.lastIndexOf('/')+1);
    document.getElementById("redirectInput").value = shortenedURL;

    const addRedirectButton = document.getElementById("addRedirectButton");

    addRedirectButton.addEventListener('click', AddRedirection);
    
})();

const AddRedirection = () => {
    const redirectFrom = document.getElementById("redirectInput").value;
    const redirectTo = document.getElementById("toInput").value;
    localStorage.setItem(`${redirectFrom}`, `${redirectTo}`);

}