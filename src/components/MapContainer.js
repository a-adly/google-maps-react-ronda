import React, { Component } from "react";
import { Map, Marker, /*InfoWindow,*/ GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
	//const placesToDisplay: [];
	//code session with Danny J. Smith
	/*handleClick = (venue) => {
		const { marker, InfoWindow } = venue;

		this.state.venues.forEach(({ marker: m, InfoWindow: i }) => {
			if (m === marker) {
				marker.setAnimation(window.google.maps.Animation.BOUNCE);
				InfoWindow.open(marker.map, marker);

				window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
					marker.setAnimation(null);
				});
			} else {
				m.setAnimation('none');
				i.close();
			}
		});
	};*/

	state = {
		showInfoWindow: false,
		activeMarker: {}
		//selectedVenue: {},
		//markers: locations
  };

	onMarkerClick = (props, marker) => {
		this.setState({
			//selectedVenue: props,
			activeMarker: marker,
			showInfoWindow: true
		});
	}


		componentDidMount() {
	}

	onClose = props => {
		if (this.state.showInfoWindow) {
			this.setState({
				showInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		const style = {
    height: '100vh',
    width: '100vw'
  };

		return (
				<Map
					google={this.props.google}
					zoom={16}
					style={style}
					onClick={() => {this.setState({activeMarker: {}, showInfoWindow: false})}}
					ref={"map"}
					initialCenter={{
						lat: 36.7421339,
						lng: -5.1665916
					}}
				>
					{this.props.places.map((placeName, index) => 
						<Marker 
							ref={placeName.title}
							title={placeName.title}
							key={index}
							name={placeName.name} //dr
							onClick={this.onMarkerClick} 
							/>
					)}
				</Map>
			//</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
