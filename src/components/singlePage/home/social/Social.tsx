import React from 'react';
import FormattedImage from "../../../multiPage/FormattedImage.tsx";
import './social.scss';
import {ErrorBoundary} from "react-error-boundary";

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
        <div className={"card singleSocialWrapper"}>
            <a href={socialURL.href} target={"_blank"}>
                <div>
                    <ErrorBoundary fallback={(

                        //show the default image if we cannot format it
                        <React.Fragment>
                            <img src={imagePath} alt={`The ${name} logo`} style={imageStyle} />
                        </React.Fragment>
                    )}>
                        <FormattedImage src={imagePath} alt={`The ${name} logo`} style={imageStyle} />
                    </ErrorBoundary>
                </div>
                <p>
                    {name}
                </p>
            </a>
        </div>
    )
}