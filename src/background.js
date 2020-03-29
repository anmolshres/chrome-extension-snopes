// Callback function to create new tab and visit snopes when context menu item is clicked
function visitSite(info, tab) {
    const url = `https://www.snopes.com/?s=${info.selectionText}`
    chrome.tabs.create({ url: url, index: tab.index + 1 });
}

// create contextmenu item listing the availability to search Snopes for highlighted text
const title = `Search Snopes for "%s"`;
chrome.contextMenus.create({
    "title": title, "contexts": ["selection"],
    "onclick": visitSite
});