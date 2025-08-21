chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "openNewTab") {
    const cleanUrl = msg.url.split("&")[0];
    const newUrl = `${cleanUrl}&t=${msg.time}s`;

    console.log("➡️ Opening new tab at:", newUrl);

    chrome.tabs.create({ url: newUrl }, (tab) => {
      if (sender.tab && sender.tab.id) {
        chrome.tabs.remove(sender.tab.id);
      }
    });

    sendResponse({ status: "done" });
  }
});
