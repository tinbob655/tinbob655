import React from 'react';
import FormattedImage from "../../multiPage/FormattedImage.tsx";

interface params {
    name: string,
    imagePath: string;
    socialURL: URL;
}

const imageStyle:React.CSSProperties = {
    maxWidth: '7vw',
    maxHeight: '7vh',
}

const cardStyle: React.CSSProperties = {
    flex: '1 1 140px',  //grow, shrink, no smaller than 140px
    textAlign: 'center',
    maxWidth: '25%',
}

export default function Social({name, imagePath, socialURL}:params):React.ReactElement {

    return (
        <div className={"card"} style={cardStyle}>
            <a href={socialURL.href} target={"_blank"}>
                <div>
                    <FormattedImage src={imagePath} alt={`The ${name} logo`} style={imageStyle} />
                </div>
                <p>
                    {name}
                </p>
            </a>
        </div>
    )
}