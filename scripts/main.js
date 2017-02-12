$(document).ready(function(){

  $('#load').click(function(e){
    FEATURED_SONGS_METHOD.loadFeaturedSongsData();
  });

  var FEATURED_SONGS_METHOD ={
    handlerFeaturedSongsData: function(resJSON){
      var templateSource = $("#js-featured-songs-template").html(),
        template = Handlebars.compile(templateSource),
        synonymsHTML = template(resJSON);
        $('#js-featured-songs-container').html(synonymsHTML);
        console.log(resJSON)
    },

    loadFeaturedSongsData: function(){
      var url = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=fb6cc40c61b7d40e0016afc774b135f5&format=json";
      $.ajax({
        url: url,
        method: 'get',
        success: function(data){

          FEATURED_SONGS_METHOD.handlerFeaturedSongsData(data.tracks.track);
          var jsono = data.tracks.track;
          return jsono;
        }
      })
    }
  };


});