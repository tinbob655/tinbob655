import React from 'react';
import PageHeader from "../../multiPage/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../multiPage/GenericMarkupSection.tsx";
import {useLocation} from "react-router";


export default function UnknownRoute():React.ReactElement {

    const location = useLocation();

    return (
        <React.Fragment>
            <PageHeader title={"404: Page Not Found"} subheading={"Check you typed the URL correctly!"} />

            <GenericMarkupSection left={false} heading={"Couldn't find that page"} >
                <p>
                    Hmmm, looks like we couldn't find a page to match the URL you typed in!
                    <br/>
                    Please check that "{location.pathname}" is typed correctly and try again.
                </p>
            </GenericMarkupSection>
        </React.Fragment>
    )
}