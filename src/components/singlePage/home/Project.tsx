import React from 'react';

interface params {
    name: string;
    description: string;
    tags: string[];
    url: string;
    wide?: boolean;
    tall?: boolean;
}

export default function Project({name, description, tags, url, wide, tall}: params): React.ReactElement {

    const gridStyle: React.CSSProperties = {
        ...(wide && { gridColumn: 'span 2' }),
        ...(tall && { gridRow: 'span 2' }),
    };

    return (
        <div className="card" style={gridStyle}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={"projectTagsWrapper"}>
                {tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
            <p>
                <a href={url} target="_blank">View on GitHub →</a>
            </p>
        </div>
    )
}