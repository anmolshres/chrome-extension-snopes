function searchWithKeyWord() {
    let clickplanet = document.getElementsByClassName('btn-submit')[0];
    let inputField = document.getElementById('header-search');
    inputField.value = "covid-19";
    clickplanet.click();
}

searchWithKeyWord();