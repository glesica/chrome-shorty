window.addEventListener('keydown', function(event) {
    // Bind to both command (for Mac) and control (for Win/Linux)
    var modifier = event.ctrlKey || event.metaKey;

    // 'x' == 88
    if (modifier && event.shiftKey && event.keyCode == 88) {
        // Send message to background page to toggle tab
        chrome.extension.sendRequest({shorten_url: true});
    }

}, false);