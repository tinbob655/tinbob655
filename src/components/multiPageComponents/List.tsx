import React from 'react';

interface params {
    ordered: boolean,
    elements: string[];
    left: boolean;
}

export default function List({ordered, elements, left}:params):React.ReactElement {

    const alignment:string = left ? "" : "alignRight";

    //ordered list
    if (ordered) {
        return (
            <ol className={alignment}>
                {generateList(elements)}
            </ol>
        )
    }

    //unordered list
    else {
        return (
            <ul className={alignment}>
                {generateList(elements)}
            </ul>
        )
    }
}

function generateList(elements:string[]):React.ReactElement[] {
    const res:React.ReactElement[] = [];

    elements.forEach((element) => {
        res.push(
            <React.Fragment>
                <li>
                    {element}
                </li>
                <br/>
            </React.Fragment>
        )
    })
    return res;
}