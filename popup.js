// popup.js

function redirectToMovie() {
  // Query for the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Get the URL of the active tab
    const currentUrl = tabs[0].url;

    // Check if the URL matches the specific format
    if (currentUrl.includes("https://www.baiscope.lk/")) {
      // Use a regular expression to extract the movie title
	  const match = currentUrl.match(/\/([^/]+)-sinhala-subtitles\//);

	  // Check if there's a match and get the movie title
	  const movieTitle = match ? match[1] : '';

	  console.log(movieTitle);

      // Build the new URL
      const newUrl = `https://www.baiscopedownloads.link/${movieTitle}`;

      // Open a new tab with the new URL, next to the current tab
      chrome.tabs.create({ url: newUrl, index: tabs[0].index + 1 });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Add click event listener to the button
  const downloadButton = document.getElementById("downloadButton");
  if (downloadButton) {
    downloadButton.addEventListener("click", redirectToMovie);
  }
});
