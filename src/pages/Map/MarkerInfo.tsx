import { schoolProps } from "data";
import React from "react";
import { Marker, Popup } from 'react-leaflet'

const MarkerInfo = (props: schoolProps): JSX.Element => {
    return (
        <Marker position={[props.latitude, props.longitude]}>
            <Popup>
                Name: {props.name}
                <br />
                Address: {props.address}
                <br />
                Level: {props.level}
                <br />
                Shelter:
                <br />
                    Flood: {props.Shelter_floods ? 'yes' : 'no'}
                    <br />
                    Fire: {props.Shelter_fire ? 'yes' : 'no'}
                    <br />
                    Quake: {props.Shelter_quake ? 'yes' : 'no'}
                    <br />
                    Tsunami: {props.Shelter_tsunami ? 'yes' : 'no'}
                    <br />
                    Volcano: {props.Shelter_volcano ? 'yes' : 'no'}
            </Popup>
        </Marker>
    );
};
export default MarkerInfo;