import React from 'react';
import PageHeader from "../../multiPageComponents/PageHeader.tsx";
import GenericMarkupSection from "../../multiPageComponents/GenericMarkupSection.tsx";
import List from "../../multiPageComponents/List.tsx";

export default function Home():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"Tinbob655"} subheading={"Official website of Tinbob655!"} />

            {/*about section*/}
            <GenericMarkupSection left={false} heading={"About"} >
                <p className={"alignRight"}>
                    Hi! I'm Tinbob. I like to develop and tinker. My work  usually varies from creating my own little fun
                    projects to creating large and complex systems for a range of clients.
                </p>
            </GenericMarkupSection>

            {/*projects section*/}
            <GenericMarkupSection left={true} heading={"My Projects"} >
                <React.Fragment>
                    <p className={"alignLeft"}>
                        Over my years as a developer I've worked on several projects. Some were for personal enjoyment and some
                        were for the use of clients. My favourite and perhaps most impressive individual projects is my chess engine.
                        This is written using a react frontend and a java backend. It uses a clever and optimised minimax algorithm
                        to play a great game of chess against the user!{' '}

                        <a href={"https://github.com/tinbob655/tinbobs-chess"} target={"_blank"} >
                            Find out more about that here!
                        </a>

                        <br/><br/>

                        Another personal project I have created which is quite advanced is my social media and debating
                        platform: {' '}
                        <a href={"https://github.com/tinbob655/verbose-debate-and-discussion"} target={"_blank"} >
                            Verbose.
                        </a>

                        {' '}This features a slick, dark UI and supports reacting to daily polls and answering the daily question.
                        It even comes with an android/IOS app!

                        <br/><br/>

                        In terms of commercial work, I have created the{' '}
                        <a href={"https://github.com/tinbob655/banham-education-consultancy"} target={"_blank"}>
                            website for Banham Education Consultancy
                        </a>
                        {' '}which features a modern UI and has driven many customers to use Mr Banham's services.

                        <br/><br/>

                        These projects really don't scratch the service of the systems I've developed and created. If you
                        want to see the whole host of things I've worked on, then{' '}
                        <a href={"https://github.com/tinbob655"} target={"_blank"} >
                            check out my GitHub!
                        </a>
                    </p>
                </React.Fragment>
            </GenericMarkupSection>

            {/*skill section*/}
            <GenericMarkupSection left={false} heading={"My Skills"}>
                <React.Fragment>
                    <p className={"alignRight"}>
                        As previously mentioned, I am very well versed in vite + react as well as Java. However this is not the
                        limit of the technologies I am familiar with. Here is a better list of the technologies I work with most frequently:
                    </p>
                    <List ordered={false} elements={["Java", "Vite + React", "TypeScript", "Node.js", "Docker", "SQLite", "Vercel", "Firebase",
                        "Haskell", "C", "HTML", "SCSS"]} left={false} />
                </React.Fragment>
            </GenericMarkupSection>
        </React.Fragment>
    );
};