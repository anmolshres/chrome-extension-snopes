document.addEventListener('DOMContentLoaded', initial);

function initial() {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', handleSearchClick);
}

function handleSearchClick() {
    const query = document.getElementById('search-query').value;
    visitAndSearchSnopes(query);
}

function visitAndSearchSnopes(query) {
    const url = `https://www.snopes.com/?s=${query}`
    chrome.tabs.create({ url: url});
}