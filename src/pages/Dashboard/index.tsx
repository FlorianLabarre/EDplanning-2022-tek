import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Map from "../Map"
import "./index.css"
import {
    DataSaverOff
} from '@mui/icons-material';

interface DashboardProps {

}

function Home() {
    return (
        <div className="home">
            <div className="slogan">
                Find information of <br />
                natural disasters in <br />
                Saint Lucia <br />
            </div>
            <div className="subtitle">
                Search information now
            </div>
            <img src="/assets/country.png" className="home-illustration"></img>
        </div>
    )
}

function Analytics() {
    return (
        <div className="analytics">
            <img src="https://img.freepik.com/vecteurs-libre/illustration-concept-camembert_114360-1360.jpg?t=st=1652013258~exp=1652013858~hmac=5b00fd3a243dbb88799cf0c2fa683b6edafddce804af86dcdff0d4d02595436a&w=740" className="analytics-graphical"></img>
        </div>
    )
}


const Dashboard = ({ }: DashboardProps): JSX.Element => {
    const [onMap, setOnMap] = useState(false);
    const [onHome, setOnHome] = useState(true);
    const [onAnalytics, setOnAnalytics] = useState(false);

    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar setOnMap={setOnMap} setOnHome={setOnHome} setOnAnalytics={setOnAnalytics} />
                <div className="others">
                    {onMap ? <Map /> : <div />}
                    {onHome ? <Home /> : <div />}
                    {onAnalytics && <Analytics />}
                </div>
            </div>
        </div>
    );
};

interface StyledProps {
    hoverStatus: boolean;
}

export default Dashboard;