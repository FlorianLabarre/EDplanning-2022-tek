import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerInfo from "./MarkerInfo";
import { schoolData } from '../../data';

interface MapProps {

}

const Map = ({}: MapProps): JSX.Element => {
    return (
        <MapContainer
            center={[schoolData[0].latitude, schoolData[0].longitude]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {schoolData.map(data => {
                return (
                    <div key={data.id}>
                        <MarkerInfo {...data}/>
                    </div>
                );
            })}
            {/* <MarkerInfo /> */}
        </MapContainer>
    );
};

export default Map;