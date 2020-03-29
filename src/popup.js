document.addEventListener('DOMContentLoaded', initial);

function initial(){
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click',handleSearchClick);
}

