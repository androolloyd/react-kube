const React = require("react");
const Navigation = require("./lib/Navigation");
const NavigationBar = require("./lib/NavigationBar");
const NavigationItem = require("./lib/NavigationItem");
const NavigationLogo = require("./lib/NavigationLogo");
const NavigationToggle = require("./lib/NavigationToggle");

class NavigationBox extends React.Component {

render() {
	return (
		<span>
			<Navigation fixed active="01" id="navbar-1" className="demo-navbar-fixed">
				<NavigationToggle target="#navbar-1"> Menu </NavigationToggle>
				<NavigationLogo>React-Kube (BETA)</NavigationLogo>
				<NavigationBar active={0} left>
					<NavigationItem url="#documentation" icon="code"> Documentation </NavigationItem>
					<NavigationItem url="http://www.raymondmuller.com" icon="envelope"> Contact </NavigationItem>
					<NavigationItem url="http://www.github.com/raymondmuller" target="_new" icon="github"> Github</NavigationItem>
				</NavigationBar>
			</Navigation>
		</span>
		);
	}
}

module.exports = NavigationBox;
