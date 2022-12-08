import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
  Circle,
  InfoBox,
} from "react-google-maps";
// import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const Map = (props) => {
  const { place, clickedLatLng, setClickedLatLng } = props;
  const [toggle, setToggle] = useState(true);
  const handle = () => {
    setToggle(!toggle);
    console.log("hi");
  };

  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.center}
      options={{ streetViewControl: false }}
    >
      <Marker
        position={{
          lat: 53.071747,
          lng: 8.785545,
        }}
        onClick={handle}
      >
        {toggle && (
          <InfoWindow>
            <Data />
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
};

export const Data = () => {
  return (
    <>
      <h3 style={{ marginBottom: "5px" }}>Hansa Real Estate GmbH</h3>

      <h4>Hohentorsheerstr. 49/51</h4>
      <h4>28199 Bremen</h4>
    </>
  );
};

// const { compose, withProps, withStateHandlers } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } = require("react-google-maps");
// const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// // const demoFancyMapStyles = require("./demoFancyMapStyles.json");

// const Map = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwyQ2fI1UgcPSJJ8HuYLhVQRFHYpB0iRE",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//     center: { lat: 53.0847155, lng: 8.779814 },
//   }),
//   withStateHandlers(() => ({
//     isOpen: false,
//   }), {
//     onToggleOpen: ({ isOpen }) => () => ({
//       isOpen: !isOpen,
//     })
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     center={{ lat: 53.0847155, lng: 8.779814 }}
//     zoom={17}
//   >

//     <Marker
//       position={{
//         lat: 53.0847155,
//         lng: 8.779814,
//       }}
//     >

//     </Marker>
//     {/* <InfoBox
//       position={{
//         lat: 53.0847155,
//         lng: 8.779814,
//       }}
//     >
//       <div style={{ width: "5px", height: "10px" }}>
//         Hello, !
//       </div>
//     </InfoBox> */}

//   </GoogleMap >
// );

// export default Map;
export default withScriptjs(withGoogleMap(Map));
