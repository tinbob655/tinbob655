import React from 'react';

interface params {
    title: string,
    subheading: string,
}

export default function PageHeader({title, subheading}:params):React.ReactElement {

    return (
        <React.Fragment>
            <div className={"pageHeader"}>
                <h1 className={"noVerticalSpacing alignLeft"} style={{marginTop: '20px', marginLeft: '10%'}}>
                    {title}
                </h1>
                <p className={"noVerticalSpacing alignLeft"} style={{marginBottom: '20px', marginLeft: '12.5%'}}>
                    {subheading}
                </p>
            </div>

            <hr className={"sectionDivider"} />
        </React.Fragment>
    )
}