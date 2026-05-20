import React from 'react';

interface params extends React.StyleHTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    tags: string[];
    url: string;
}

export default function Project({name, description, tags, url, ...props}:params):React.ReactElement {

    return (
        <div className="card" {...props}>
            <h2>
                {name}
            </h2>
            <p>
                {description}
            </p>

            {/*tech tags*/}
            <div className={"projectTagsWrapper"}>
                {tags.map(tag => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            <p>
                <a href={url} target="_blank">
                    View on GitHub →
                </a>
            </p>
        </div>
    )
}