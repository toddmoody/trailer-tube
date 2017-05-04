https://www.googleapis.com/youtube/v3/search/watch?v=SB93yqhrRPA?alt=json

var youTubeURL = 'https://www.googleapis.com/youtube/v3/search';

// YouTube API call function incl query parameters
function getDataFromApi(searchTerm, callback) {
  var query = {
      part: "snippet",
      key: "AIzaSyBr-T08BfZJneqp-WrCoMVdd6rt2VKyOSA",
      type: "video",
      videoCategoryId: 44,
      maxResults: 16,
      q: searchTerm
  }
  $.getJSON(youTubeURL, query, callback);
}

//Function to render HTML by pulling required data from the returned YouTube JSON object
function displaySearchData(data) {
  var videoHTML = "";
    data.items.forEach(function(j){
        videoHTML += 
        '<div class="js-video-block"><p>' + j.snippet.title + '</p><a href="https://www.youtube.com/watch?v=' + j.id.videoId + '"><img src="' + j.snippet.thumbnails.medium.url + '"></a></div>';
    });
    $(".js-video-rev").html(videoHTML);

  }

// function including click listener on search form. User search then passed through the get data from API function
function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displaySearchData);
  });
}

$(function(){watchSubmit();});
