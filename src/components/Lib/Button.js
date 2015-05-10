const React = require("react");
var classNames = require("classnames");
var styles;

class Button extends React.Component {

	componentWillMount() {
		styles = classNames({
			"btn": true,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		})

		if(this.props.color) {
			styles += " " + "btn-" + this.props.color
		}
	}
	
	render() {
		return (
			<button className={styles}>{this.props.children} </button>
		)
	}

}

module.exports = Button;