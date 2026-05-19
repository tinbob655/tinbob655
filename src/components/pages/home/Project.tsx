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
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                {tags.map(tag => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            <a href={url} target="_blank">
                <h3>
                    View on GitHub →
                </h3>
            </a>
        </div>
    )
}