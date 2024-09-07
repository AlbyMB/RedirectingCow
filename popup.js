window.onload = (async () => {
    
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    console.log(tab.url);
    document.getElementById("redirectInput").value = tab.url;

    const addRedirectButton = document.getElementById("addRedirectButton");

    addRedirectButton.addEventListener('click', AddRedirection);
    
})();

const AddRedirection = () => {
    const redirectFrom = document.getElementById("redirectInput").value;
    const redirectTo = document.getElementById("toInput").value;
    localStorage.setItem(`${redirectFrom}`, `${redirectTo}`);

}