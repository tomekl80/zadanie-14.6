'use strict';

var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	render: function() {
		return React.createElement('div', {onClick: this.increment},
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('br', {}),
			React.createElement('br', {}),
			React.createElement('button', {className: 'btn'}, 'Dodaj')
		);
	}

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));