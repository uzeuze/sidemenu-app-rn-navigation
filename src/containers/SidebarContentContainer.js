import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { login, logout, setCurrentScreen } from '../actions';

import SidebarContent from '../components/Sidebar/SidebarContent';

class SidebarContentContainer extends Component {
	componentDidMount() {
		StatusBar.setHidden(true);
	}

	render() {
		return (
			<SidebarContent {...this.props} />
		);
	}
}

const mapStateToProps = state => {
  const { isAuth } = state.auth;
	const { screen } = state.flow;
	return {
		isAuth,
		screen
	};
};

export default connect(mapStateToProps, { login, logout, setCurrentScreen })(SidebarContentContainer);
