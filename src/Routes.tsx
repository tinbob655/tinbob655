import React from 'react';
import {Route, Routes} from 'react-router';

//import all pages
import Home from "./components/pages/home/Home.tsx";

export default function AllRoutes():React.ReactElement {

    return (
        <Routes>
            {getRoutes()}
        </Routes>
    )
}

function getRoutes():React.ReactElement[] {
    const res:React.ReactElement[] = [];
    const pageInfo:[string, React.ReactElement][] = [
        ['', <Home/>],
    ]

    //create pages
    pageInfo.forEach((page) => {
        res.push(
            <Route path={page[0]} element={page[1]} key={page[0]} />
        );
    })
    return res;
}