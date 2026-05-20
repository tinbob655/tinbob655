import React, {useEffect} from 'react';
import {useLocation} from "react-router";

export default function ScrollToTop():React.ReactElement {

    const location = useLocation();

    //scroll to top on page location change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <React.Fragment></React.Fragment>
    )
}