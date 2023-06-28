"use strict"; 

const URL = "http://api.giphy.com/v1/gifs/";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

console.log("Let's get this party started!");

async function requestGif(term) {
    const resp = await axios.get(
        `${URL}search`, 
        {params: {q: term, api_key: API_KEY}});
    return resp.data.data[0];
}

function showGifOnPage(gifDetails) {
    const newImg = 
    $("#gifs").append($("<img>").attr('src', gifDetails.images.original.url));
}

async function getAndShowGif() {
    evt.preventDefault();

    const $searchTerm = $("#term").val();
    $("#term").val("");
    const gifDetails = await requestGif($searchTerm);
    console.log(gifDetails);
    showGifOnPage(gifDetails);

}

function removeGifsFromPage() {
    $("#gifs").empty();
}

$("form").on("submit", getAndShowGif)

$("#remove").on("click", removeGifsFromPage);