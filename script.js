const searchBox = document.getElementById("search-box");
  
searchBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && searchBox.value.trim() !== "") { 
      showAllResults();
  }
});

function googleSearch() {
  var query = document.getElementById("search-box").value;
  window.location.href = "https://www.google.com/search?q=" + query;
}

function bingSearch() {
  var query = document.getElementById("search-box").value;
  window.location.href = "https://www.bing.com/search?q=" + query;
}

function duckduckgoSearch() {
  var query = document.getElementById("search-box").value;
  window.location.href = "https://duckduckgo.com/?q=" + query;
}

function youtubeSearch() {
  var query = document.getElementById("search-box").value;
  window.location.href = "https://www.youtube.com/results?search_query=" + query;
}

function youSearch() {
  var query = document.getElementById("search-box").value;
  window.location.href = "https://you.com/search?q=" + query;
}

function showAllResults() {
  var searchBoxValue = document.getElementById("search-box").value;
  window.open("https://www.google.com/search?q=" + searchBoxValue);
  window.open("https://www.bing.com/search?q=" + searchBoxValue);
  window.open("https://duckduckgo.com/?q=" + searchBoxValue);
  window.open("https://www.youtube.com/results?search_query=" + searchBoxValue);
  window.open("https://you.com/search?q=" + searchBoxValue);
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  searchBox.focus();
}
