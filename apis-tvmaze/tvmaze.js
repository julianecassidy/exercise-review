"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $episodesList = $("#episodesList");
const $searchForm = $("#searchForm");
const BASE_URL = "http://api.tvmaze.com/";
const DEFAULT_IMG = "https://tinyurl.com/tv-missing";


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  const resp = await axios.get(`${BASE_URL}search/shows`, {params: {q: term}});
  return resp.data.map(show => {
    return { 
    id: show.show.id, 
    name: show.show.name, 
    summary: show.show.summary, 
    image: show.show.image ? show.show.image.medium : DEFAULT_IMG
    }
  });
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    // console.log("show", show);
    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="${show.image}" 
              alt="Bletchly Circle San Francisco" 
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($show);  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const resp = await axios.get(`${BASE_URL}shows/${id}/episodes`);
  return resp.data.map(episode => {
    return {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number
    };
  })
}

/** Given an array of episode info { id, name, season, number }, create a markup
 * list of the episodes and add to DOM.
  */

function populateEpisodes(episodes) {
  $episodesList.empty();

  for (let episode of episodes) {
    console.log("episode", episode);
    const $episode = $(
      `<li>${episode.name}(season ${episode.season}, number ${episode.number})</li>`
    )

    $episodesList.append($episode);
  }

  $episodesArea.show();
}

async function getEpisodesOfShowAndDisplay(evt) {
  const $showDiv = $("div.Show");
  const id = $(evt.target).closest($showDiv).data("showId");
  
  const episodes = await getEpisodesOfShow(id);
  populateEpisodes(episodes);

}

$showsList.on("click", $(".Show-getEpisodes"), getEpisodesOfShowAndDisplay);
