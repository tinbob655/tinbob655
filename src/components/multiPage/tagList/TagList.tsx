import React from 'react';
import './tagList.scss';

interface params {
    tags: string[];
}

export default function TagList({tags}:params):React.ReactElement {

    return (
        <div className={"tagListWrapper"}>
            {tags.map((skill:string):React.ReactElement => (
                    <span key={skill} className={"tag tagInTagList"}>{skill}</span>
                ))}
        </div>
    )
}