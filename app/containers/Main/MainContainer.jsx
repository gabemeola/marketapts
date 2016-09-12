import React, { Component } from 'react';
import { Main } from 'components';
import scrollTo from 'utils/scrollTo';

class MainContainer extends Component {
	componentDidUpdate() {
		scrollTo(window.innerHeight);
	}
	render() {
		return(
			<Main
				children={this.props.children}
			/>
		)
	}
}

export default MainContainer;