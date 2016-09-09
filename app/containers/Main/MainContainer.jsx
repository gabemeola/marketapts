import React, { Component } from 'react';
import { Main } from 'components';

class MainContainer extends Component {
	render() {
		return(
			<Main
				children={this.props.children}
			/>
		)
	}
}

export default MainContainer;