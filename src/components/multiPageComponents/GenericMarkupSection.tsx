import React from 'react';


interface params {
    left: boolean;
    heading: string;

    children: React.ReactElement;
}

export default function GenericMarkupSection({left, heading, children}:params):React.ReactElement {

    const alignment: string = left ? "alignLeft" : "alignRight";

    return (
        <React.Fragment>
            <section className={"contentSection"}>
                <h2 className={alignment}>
                    {heading}
                </h2>

                {children}
            </section>

            <div className={"dividerLine"}></div>
        </React.Fragment>
    )
}