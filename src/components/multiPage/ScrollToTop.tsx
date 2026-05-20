import {useEffect} from 'react';
import {useLocation} from "react-router";

export default function ScrollToTop():null {

    const location = useLocation();

    //scroll to top on page location change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}