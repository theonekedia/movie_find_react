var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore1 = require('../stores/AppStore');

var Movie = React.createClass({
	render: function(){
		var link = "http://imdb.com/title/" + this.props.movie.imdbID;
		return(
		<div className='well'>
			<div className="row">
				<div className="col-md-6">
					<img className="thumbnail" src={this.props.movie.Poster} alt="" />
				</div>
				<div className="col-md-6">
					<h4>{this.props.movie.Title}</h4>
					<ul className="list-group">
						<li className="list-group-item">
							Year:  {this.props.movie.Year}
						</li>
						<li className="list-group-item">
							IMDB ID: {this.props.movie.imdbID}
						</li>
					</ul>
					<a href={link} className="btn btn-primary ">View On IMDB</a>
				</div>
			</div>

		</div>
		)
	},
	
})

module.exports = Movie;