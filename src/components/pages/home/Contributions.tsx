import React from 'react';
import {GitHubCalendar} from "react-github-calendar";

export default function Contributions():React.ReactElement {

    return (
        <div className={"contributionsWrapper card"}>
            <GitHubCalendar
                username={"Tinbob655"}
                theme={{dark: ["#1E2533", "#19D4A8"]}}
                colorScheme={"dark"}
                weekStart={1}
                tooltips={{
                    activity: {
                        text: activity => `${activity.level} activities on ${activity.date}`,
                        placement: 'right',
                        offset: 6,
                        hoverRestMs: 300,
                        transitionStyles: {
                            duration: 100,
                            common: { fontFamily: 'monospace' },
                        },
                        withArrow: true,
                    },
                }}
            />
        </div>
    )
}