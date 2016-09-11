import React, { Component } from "react";
import { Floorplans } from 'components';

const floorPlanOptions = {
	studio: {
		name: 'Studio',
		available: {

		}
	},
	oneBed: {
		name: '1 Bed',
		available: {

		}
	},
	twoBed: {
		name: '2 Bed',
		available: {

		}
	},
	threeBed: {
		name: '3 Bed',
		available: {

		}
	}
};

class FloorplansContainer extends Component {
	render() {
		return (
			<Floorplans
				floorPlanOptions={floorPlanOptions}
			/>
		)
	}
}

export default FloorplansContainer;