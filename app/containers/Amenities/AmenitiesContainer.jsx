import React, { Component } from 'react';
import { Amenities } from 'components';

const communityAmenities = [
	'Adjacent to Silver Lake',
	'Maintenance free living',
	'Assigned parking available',
	'Minutes to Mill Creek',
	'Disability access',
	'Newly redesigned resident clubhouse',
	'Dog park',
	'Online rent payment',
	'On-site fitness center',
	'Indoor pool and spa',
	'Picnic area with BBQ\'s',
	'Sauna',
	'Laptop workstation in the resident lounge',
	'Lush landscaping'
];

class AmenitiesContainer extends Component {
	render() {
		return(
			<Amenities
				communityAmenities={communityAmenities}
			/>
		)
	}
}

export default AmenitiesContainer;