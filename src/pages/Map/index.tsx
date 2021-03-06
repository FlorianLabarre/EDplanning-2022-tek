import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerInfo from "./MarkerInfo";
import { schoolData } from '../../data';
import { Autocomplete, TextField } from '@mui/material';

const Map = (): JSX.Element => {
    const [data, setData] = useState(schoolData);
    const [searchValue, setSearchValue] = useState("");

    const updateData = (value: string | null) => {
        if (value == null)
            setData(schoolData);
        else {
            setData(schoolData.filter(current =>
                current.name.toLowerCase().includes(value.toLowerCase())
            ))
        }
    }

    useEffect(() => {
        updateData(searchValue);
    }, [searchValue])

    return (
        <div>
            <Autocomplete
                id="searchBar"
                options={schoolData.map((option) => option.name)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Search"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                }
                onChange={(event: any, newValue: string | null) => {
                    setSearchValue(newValue);
                }}
                value={searchValue}
            />
            <MapContainer
                center={[schoolData[0].latitude, schoolData[0].longitude]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: '94vh', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map(current => {
                    return (
                        <div key={current.id}>
                            <MarkerInfo {...current}/>
                        </div>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default Map;