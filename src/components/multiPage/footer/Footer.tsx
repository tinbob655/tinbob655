import React, {useEffect, useState} from 'react';
import './footer.scss';


export default function Footer():React.ReactElement {

    const [links, setLinks] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        const res:React.ReactElement[] = [];

        //get all sections
        const sectionHeaders:NodeListOf<Element> = document.querySelectorAll('.sectionHeader');
        console.log(sectionHeaders);
        sectionHeaders.forEach((header) => {
            res.push(
                <div className={"footerLink"}>
                    <p>
                        <a onClick={() => {header.scrollIntoView({behavior: 'smooth', block: 'center'})}}>
                            {header.textContent}
                        </a>
                    </p>
                </div>
            )
        })
        setTimeout(() => {

            setLinks(res);
        }, 20);
    })

    return (
        <React.Fragment>
            <div className={"footerLinksWrapper"}>
                {links}
            </div>
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