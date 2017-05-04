https://www.googleapis.com/youtube/v3/search/watch?v=SB93yqhrRPA?alt=json

var youTubeURL = 'https://www.googleapis.com/youtube/v3/search';

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

function displaySearchData(data) {
  console.log(data);
  var videoHTML = "";
    data.items.forEach(function(j){
        videoHTML += 
        '<div class="js-video-block"><p>' + j.snippet.title + '</p><a href="https://www.youtube.com/watch?v=' + j.id.videoId + '"><img src="' + j.snippet.thumbnails.medium.url + '"></a></div>';
    });
    $(".js-video").html(videoHTML);

  }

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displaySearchData);
  });
}

$(function(){watchSubmit();});
