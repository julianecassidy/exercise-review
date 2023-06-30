"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show the form to add a new story when click "submit" */

function showNewStoryForm(evt) {
  console.debug("showNewStoryForm", evt);
  evt.preventDefault;
  $storyForm.show();
}

$body.on("click", "#new-story", showNewStoryForm);
$body.on("submit", "#story-form", function(evt) {
  evt.preventDefault;
  $storyForm.hide();
  handleNewStoryFormSubmit();
})

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  evt.preventDefault();
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();

  $newStory.show();
}

$allStoriesList.on("click", ".bi-star", function (evt) {
  handleAddFavoriteStory(evt);
});

$allStoriesList.on("click", ".bi-star-fill", function(evt) {
  handleRemoveFavoriteStory(evt)
});
