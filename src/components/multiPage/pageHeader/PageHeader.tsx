import React from 'react';
import './pageHeader.scss';

interface params {
    title: string,
    subheading: string,
}

export default function PageHeader({title, subheading}:params):React.ReactElement {

    return (
        <React.Fragment>
            <div className={"pageHeader"}>
                <h1 className={"noVerticalSpacing alignLeft pageHeaderH1"}>
                    {title}
                </h1>
                <p className={"noVerticalSpacing alignLeft pageHeaderP"}>
                    {subheading}
                </p>
            </div>

            <div className={"sectionDivider"} />
        </React.Fragment>
    )
}