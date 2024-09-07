chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  console.log(details.url)
    if (localStorage.getItem(details.url)) {
      return { redirectUrl: `${localStorage.getItem(details.url)}`};
    }
  },
  { urls: ["<all_urls>"]},
  ["blocking"]
);