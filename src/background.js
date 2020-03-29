// Callback function to visit snopes
function visitSite(info, tab) {
    // alert(JSON.stringify(info));
    // console.log("item " + info.menuItemId + " was clicked");
    // console.log("info: " + JSON.stringify(info));
    // console.log("tab: " + JSON.stringify(tab));
    const url = `https://www.snopes.com/`
    chrome.tabs.create({ url: url, index: tab.index + 1 });
}

const context = "selection";
const title = "Search Snopes for selected phrase";
const id = chrome.contextMenus.create({
    "title": title, "contexts": [context],
    "onclick": visitSite
});