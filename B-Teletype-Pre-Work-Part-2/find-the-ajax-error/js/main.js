$('.btn').on('click', function() {
  $('.text').text('loading . . .');
  $.ajax({
    url: 'https://api.meetup.com/2/cities',
    dataType: 'jsonp',
     success: function(dataWeGotViaJsonp){
      console.log(dataWeGotViaJsonp.results.length);
      $('.text').text('');
      var results = dataWeGotViaJsonp.results;
      for(var i=0; i<results.length; i++){
        var city = results[i].city;
        $('#citylist').append('<li>' + city + '</li>');
      }
    }
  });
});

$(document).ready("DOMContentLoaded")
