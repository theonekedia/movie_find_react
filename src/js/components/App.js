var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');

function getAppState(){
	return{
		movies: AppStore.getMovieResults()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function(){
		AppStore.addChangeListner(this._onChange)
	},
	componentWillUnmount: function(){
		AppStore.removeChangeListner(this._onChange)
	},
	render: function(){
		if(this.state.movies == ''){
			var moviesResult = '';
		}else{
			var moviesResult = <MovieResults movies={this.state.movies} />;
		}

		return(
			<div>
				<SearchForm />
				{moviesResult}
			</div>
		);
	},
	_onChange: function(){
		this.setState(getAppState());
	}
});
module.exports = App