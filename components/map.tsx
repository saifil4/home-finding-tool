/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultMapCenter = {  
  lat: 43.706956,
  lng: -79.345726,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
};

export { MapComponent };
