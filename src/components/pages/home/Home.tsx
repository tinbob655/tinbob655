import React from 'react';
import PageHeader from "../../multiPageComponents/PageHeader.tsx";
import GenericMarkupSection from "../../multiPageComponents/GenericMarkupSection.tsx";
import List from "../../multiPageComponents/List.tsx";
import Contributions from "./Contributions.tsx";
import Social from "./Social.tsx";

export default function Home():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"Tinbob655"} subheading={"Official website of Tinbob655!"} />

            {/*about section*/}
            <GenericMarkupSection left={false} heading={"About"} >
                <p>
                    Hi! I'm Tinbob. I like to develop and tinker. My work  usually varies from creating my own little fun
                    projects to creating large and complex systems for a range of clients.
                </p>
            </GenericMarkupSection>

            {/*projects section*/}
            <GenericMarkupSection left={true} heading={"Projects"} >
                <React.Fragment>
                    <p>
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
            <GenericMarkupSection left={false} heading={"Skills"}>
                <React.Fragment>
                    <p>
                        As previously mentioned, I am very well versed in vite + react as well as Java. However this is not the
                        limit of the technologies I am familiar with. Here is a better list of the technologies I work with most frequently:
                    </p>
                    <List ordered={false} elements={["Java", "Vite + React", "TypeScript", "Node.js", "Docker", "SQLite", "Vercel", "Firebase",
                        "Haskell", "C", "HTML", "SCSS"]} left={false} />
                </React.Fragment>
            </GenericMarkupSection>

            {/*activity section*/}
            <GenericMarkupSection left={true} heading={"Activity"} >
                <React.Fragment>
                    <p>
                        I'm always working on something. Often this comes in bursts as I think of a new idea, other times it's a long
                        , sustained process denoting a project which I have invested more time to. Take a look at my GitHub contributions:
                    </p>
                    <Contributions/>
                </React.Fragment>
            </GenericMarkupSection>

            {/*tech stack*/}
            <GenericMarkupSection left={false} heading={"Tech Stack"} >
                <React.Fragment>
                    <p>
                        Every developer has software they prefer to work with over other software. I am no exception to this rule.
                        For Java development, I am a lover of IntelliJ. When it comes to web development, none can rival WebStorm.
                        For smaller edits / tweaks or creating helper bash scripts, I prefer to use vscode for its quick boot times
                        and ease of use.
                        <br/>
                        But hey that's just me and you might not agree. Variety is indeed the spice of life!
                    </p>
                </React.Fragment>
            </GenericMarkupSection>

            {/*socials*/}
            <GenericMarkupSection left={true} heading={"Socials"} >
                <React.Fragment>
                    <p>
                        If you want to ask me to help out with a project, contract me some work or just want to chat then
                        here is where you can find me:
                    </p>
                    <div style={{ display: 'flex', justifyContent: "space-between"}}>
                        <Social name={"GitHub"}
                                socialURL={new URL("https://github.com/tinbob655")}
                                imagePath={"/socialLogos/github.png"}
                                />
                        <Social name={"LinkedIn"}
                                socialURL={new URL("https://linkedin.com/in/will-rutland")}
                                imagePath={"/socialLogos/linkedin.png"}
                                />
                        <Social name={"Discord"}
                                socialURL={new URL("https://discord.com/users/tinbob655")}
                                imagePath={"/socialLogos/discord.png"} />
                    </div>
                </React.Fragment>
            </GenericMarkupSection>
        </React.Fragment>
    );
};