(function() {
  const video = document.querySelector("video");
  if (!video) return;

  function checkForAds() {
    const ad = document.querySelector(".ad-showing, .ytp-ad-player-overlay"); 
    if (ad) {
      console.log("🚨 Ad detected in content.js");
      const currentTime = Math.floor(video.currentTime);

      chrome.runtime.sendMessage({
        action: "openNewTab",
        url: window.location.href,
        time: currentTime
      }, (response) => {
        console.log("📩 Response from background:", response);
      });
    }
  }

  setInterval(checkForAds, 1000);
})();
