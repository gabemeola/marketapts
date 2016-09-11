import React, { Component } from "react";
import { Floorplans } from 'components';

const floorPlanOptions = {
	studio: {
		name: 'Studio',
		bed: 0,
		bath: 1,
		rentRangeStart: 930,
		rentRangeEnd: 1190,
		deposit: 500,
		sqFeet: 500
	},
	oneBed: {
		name: '1 Bed',
		bed: 1,
		bath: 1,
		rentRangeStart: 1230,
		rentRangeEnd: 1490,
		deposit: 500,
		sqFeet: 700
	},
	twoBed: {
		name: '2 Bed',
		bed: 2,
		bath: 2,
		rentRangeStart: 1445,
		rentRangeEnd: 1770,
		deposit: 500,
		sqFeet: 915
	},
	threeBed: {
		name: '3 Bed',
		bed: 3,
		bath: 2,
		rentRangeStart: 1595,
		rentRangeEnd: 1720,
		deposit: 500,
		sqFeet: 1150
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