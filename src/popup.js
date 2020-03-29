// when the popup page is loaded
document.addEventListener('DOMContentLoaded', initial);

/**
 * Initial function to run when the popup page is loaded. This function adds click event listener to submit button.
 * @returns void
 */
function initial() {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', handleSearchClick);
}

/**
 * This function handles search button click event and calls function visitAndSearchSnopes.
 * @returns void
 */
function handleSearchClick() {
    const query = document.getElementById('search-query').value;
    visitAndSearchSnopes(query);
}

/**
 * This function visits Snopes in a new tab and searches for user entered query.
 * @param query string to be lookeup in Snopes
 * @returns void
 */
function visitAndSearchSnopes(query) {
    const url = `https://www.snopes.com/?s=${query}`
    chrome.tabs.create({ url: url});
}