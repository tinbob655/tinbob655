import React from 'react';
import './footer.scss';


export default function Footer():React.ReactElement {

    return (
        <React.Fragment>
            <img src={"logo.svg"} alt={"Tinbob655 website logo"} />
            <p className={"footerParagraph"}>
                Website brought to you by{' '}
                <a href={"https://github.com/tinbob655"} className={"footerLink"}>
                    Tinbob655
                </a>.
            </p>
        </React.Fragment>
    )
}