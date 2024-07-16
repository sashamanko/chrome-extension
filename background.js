chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  chrome.scripting.executeScript({
    target: { tabId },
    files: ['content.js'],
  });
});