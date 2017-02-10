"use strict"

chrome.tabs.onUpdated.addListener(function(tabid) {
 chrome.tabs.setZoomSettings(tabid, { scope: "per-tab" })
})