chrome.webNavigation.onHistoryStateUpdated.addListener(e => {
  chrome.tabs.sendMessage(e.tabId, {
    action: "browse"
  });
}, {
  url: [{
    hostSuffix: "netflix.com",
    pathPrefix: "/browse"
  }]
});
