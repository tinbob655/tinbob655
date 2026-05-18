import React from 'react';


export default function Footer():React.ReactElement {

    return (
        <React.Fragment>
            <img src={"logo.svg"} alt={"Tinbob655 website logo"} />
            <p>
                Website brought to you by <a href={"https://github.com/tinbob655"} style={{textDecoration: 'underLine'}}>Tinbob655</a>.
            </p>
        </React.Fragment>
    )
}