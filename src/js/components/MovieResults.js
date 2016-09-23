var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore1 = require('../stores/AppStore');
var Movie = require('./Movie');

var MovieResults = React.createClass({
	render: function(){
		return(
		<div className="results">
			<h3 className="text-center">Results</h3>
			{
			this.props.movies.map(function(movie,i){
				return(
					<Movie movie={movie} key={i} />
				)
				})
			}
		</div>
		)
	},
	
})

module.exports = MovieResults;