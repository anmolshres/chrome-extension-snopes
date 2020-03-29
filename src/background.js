// Callback function to visit snopes
function visitSite(info, tab) {
    const url = `https://www.snopes.com/?s=${info.selectionText}`
    chrome.tabs.create({ url: url, index: tab.index + 1 });
}

const title = `Search Snopes for "%s"`;
chrome.contextMenus.create({
    "title": title, "contexts": ["selection"],
    "onclick": visitSite
});