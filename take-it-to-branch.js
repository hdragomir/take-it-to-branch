(function () {
    function take_to_branch() {
        chrome.tabs.executeScript(null, {code: "window.__branchHost__ = 'http://branch.com'; var origin = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port, script; if (origin.match(new RegExp('branch.com')) && window.location.pathname === '/') { return; } script = document.createElement('script'); script.type = 'text/javascript'; script.src = '" + chrome.extension.getURL('bookmarklet.m.js') + "'; document.body.appendChild(script);" });
    }
    chrome.browserAction.onClicked.addListener(take_to_branch);
}());

