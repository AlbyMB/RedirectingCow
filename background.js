chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (findRedirection(details.url)) {
      return { redirectUrl: `${findRedirection(details.url)}`};
    }
  },
  { urls: ["<all_urls>"]},
  ["blocking"]
);


const findRedirection = (url) => {
  for ( let i = 0, len = localStorage.length; i < len; ++i ) {
    console.log(url);
    console.log(localStorage.key(i));
    console.log(localStorage.key(i)=== url);
    console.log(localStorage.key(i).includes(url));
    if(localStorage.key(i) === url || url.includes(localStorage.key(i))){
      return localStorage.getItem(localStorage.key(i));
    }
  }
}