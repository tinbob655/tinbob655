import React, {useEffect, useState} from 'react';
import './footer.scss';


export default function Footer():React.ReactElement {

    const [links, setLinks] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        const buildLinks = () => {
            const headers:NodeListOf<Element> = document.querySelectorAll('.sectionHeader');

            //make sure we actually have headers
            if (headers.length === 0) return;

            //render headers' markup
            setLinks(Array.from(headers).map(header => (
                <div className="footerLink" key={header.textContent}>
                    <p>
                        <a onClick={() => header.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                            {header.textContent}
                        </a>
                    </p>
                </div>
            )));
        };

        //try to build straight away
        buildLinks();

        //if we cannot build straight away then wait for headers to appear
        const observer = new MutationObserver(buildLinks);
        observer.observe(document.getElementById('content')!, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, []);

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