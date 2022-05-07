import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./index.css"

interface DashboardProps {

}

const Dashboard = ({ }: DashboardProps): JSX.Element => {
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="others"></div>
            </div>
        </div>
    );
};

interface StyledProps {
    hoverStatus: boolean;
}

export default Dashboard;