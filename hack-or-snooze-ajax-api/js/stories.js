"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName(story.url);
  const userFavoriteIds = currentUser.favorites.map(favorite => favorite.storyId);
  const star = userFavoriteIds.includes(story.storyId) ? "bi-star-fill" : "bi-star";
  // const star = "bi-star";

  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        <i class="bi ${star}"></i>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

function putStoryOnPage(story) {
  console.debug("putStoryOnPage", story);

  const $formattedStory = generateStoryMarkup(story);
  $allStoriesList.prepend($formattedStory);
}

/** Handle submit of new story by calling addStory with the form data and then 
 * calling putStoryOnPage
 */

async function handleNewStoryFormSubmit() {
  console.debug("handleNewStoryFormSubmit");

  const newStoryData = {
    author: $("#author").val(),
    title: $("#title").val(),
    url: $("#url").val()
  }

  const newStory = await storyList.addStory(currentUser, newStoryData);

  putStoryOnPage(newStory);
}

async function handleAddFavoriteStory(evt) {
  const $storyId = $(evt.target).closest("li").attr("id");
  console.log("handleAddFavorite id", $storyId);
  currentUser.addFavorite($storyId);

  const $star = $(evt.target).closest(".bi")
  $star.removeClass("bi-star");
  $star.addClass("bi-star-fill");
}

async function handleRemoveFavoriteStory(evt) {
  const $storyId = $(evt.target).closest("li").attr("id");
  console.log("handleRemoveFavorite id", $storyId);
  currentUser.removeFavorite($storyId);

  const $star = $(evt.target).closest(".bi")
  $star.removeClass("bi-star-fill");
  $star.addClass("bi-star");
}



