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

                <div className={left ? "section" : "section sectionRight"}>
                    <h2 className={alignment}>
                        {heading}
                    </h2>
                </div>

                {children}
            </section>

            <hr className={"sectionDivider"} />
        </React.Fragment>
    )
}