import React from 'react';
import {Route, Routes} from 'react-router';

//import all pages
import Home from "./components/singlePage/home/Home.tsx";
import UnknownRoute from "./components/singlePage/unknownRoute/UnknownRoute.tsx";

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
    });

    //default route
    res.push(
        <Route path={'*'} element={<UnknownRoute/>} />
    );

    return res;
}