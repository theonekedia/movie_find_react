var AppActions = require('../actions/AppActions');

module.exports = {
	searchMovies: function(movie){
		$.ajax({
			url: "http://www.omdbapi.com/?s="+movie.title,
			dataType: 'json',
			cache: false,
			success: function(data){
				AppActions.receiveMoviesResults(data.Search)
			}.bind(this),
			error: function(xhr,startus,err){
				alert(err);
			}.bind(this)
		})
	}
}