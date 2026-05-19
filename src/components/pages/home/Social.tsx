import React from 'react';
import FormattedImage from "../../multiPageComponents/FormattedImage.tsx";

interface params {
    name: string,
    imagePath: string;
    socialURL: URL;
}

const imageStyle:React.CSSProperties = {
    maxWidth: '7vw',
    maxHeight: '7vh',
}

export default function Social({name, imagePath, socialURL}:params):React.ReactElement {

    return (
        <div className={"card"}>
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