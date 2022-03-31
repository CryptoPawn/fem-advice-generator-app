const api_url = "https://api.adviceslip.com/advice";

const advice_id = "#advice-id";
const advice_text = "#advice-text";
const dice = "#dice";

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    data = await response.json();
    
    $(advice_id).html(data.slip.id);
    $(advice_text).html(data.slip.advice);
}

$(document).ready(function() {
    getAdvice();
    
    $(dice).on('click', function() {
        getAdvice();
    });
});