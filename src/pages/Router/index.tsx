import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import NotFound from "pages/NotFound";
import Hello from "pages/Hello";
import Map from "pages/Map";
import Dashboard from "pages/Dashboard";
import React from "react";

interface RouterPros {

}

const Router = ({}: RouterPros): JSX.Element => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Map />}/>
          <Route path={'/Dashboard'} element={<Dashboard />}/>
          <Route path={'/hello'} element={<Hello />}/>
          {/* This line must always remain the last line of the router! */}
          <Route path={'*'} element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default Router;