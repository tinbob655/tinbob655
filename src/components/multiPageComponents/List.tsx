import React from 'react';

interface params {
    ordered: boolean,
    elements: string[];
}

export default function List({ordered, elements}:params):React.ReactElement {


    //ordered list
    if (ordered) {
        return (
            <ol>
                {generateList(elements)}
            </ol>
        )
    }

    //unordered list
    else {
        return (
            <ul>
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