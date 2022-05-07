import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Topbar from "./components/topbar/Topbar";

interface DashboardProps {

}

const Dashboard = ({ }: DashboardProps): JSX.Element => {
    return (
        <div className="Dashboard"><Topbar></Topbar></div>
    );
};

interface StyledProps {
    hoverStatus: boolean;
}

export default Dashboard;