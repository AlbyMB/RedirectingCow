chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Check if the request is for YouTube
      if (details.url.includes("youtube.com")) {
        return { redirectUrl: "https://leetcode.com/problemset/all/" };
      }
    },
    { urls: ["*://*.youtube.com/*"], types: ["main_frame"] },
    ["blocking"]
  );