import React from 'react';
import './header.scss';

export default function Header():React.ReactElement {

    return (
        <div className={"logoWrapper"}>
            <img src={"logo.svg"} alt={"Tinbob655 website logo"} />
        </div>
    )
}