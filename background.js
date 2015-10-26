/*
* First click - generate HTML. 
* On close move HTML above page and disable.
* All other clicks - move already generated HTML.
*/

var firstUse = true;
var isActive = false;

chrome.browserAction.onClicked.addListener(function() {
  if(isActive) {
    chrome.tabs.executeScript(null, { 
      code: 'document.getElementById("cpContainer").style.top = -100px; document.body.margin = 0'
    });
  }
  if(firstUse) {
    chrome.tabs.insertCSS(null, { file: 'dropdown.css' });
    chrome.tabs.executeScript(null, { file: 'jquery-2.1.4.min.js' });
    chrome.tabs.executeScript(null, { file: 'oauth.js' });
    chrome.tabs.executeScript(null, { file: 'generate.js' });
    firstUse = false;
    isActive = true;
  }
});