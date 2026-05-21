import React from 'react';
import PageHeader from "../../multiPage/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../multiPage/GenericMarkupSection.tsx";
import Contributions from "./contribution/Contributions.tsx";
import Social from "./social/Social.tsx";
import Project from "./project/Project.tsx";
import ScrollReveal from "../../multiPage/ScrollReveal.tsx";
import TagList from "../../multiPage/tagList/TagList.tsx";
import CV from '../../../assets/William Rutland CV.pdf';

export default function Home():React.ReactElement {

    return (
        <React.Fragment>
            <ScrollReveal>
                <PageHeader title={"Tinbob655"} subheading={"Official website of Tinbob655!"} />
            </ScrollReveal>

            {/*about section*/}
            <ScrollReveal>
                    <GenericMarkupSection left={false} heading={"About"} >
                        <p>
                            Hi! I'm Tinbob. I like to develop and tinker. My work usually varies from creating my own little fun
                            projects to creating large and complex systems for a range of clients, working both in-person and online.
                            <br/>
                            If you are interested in my work and want to learn more about what I do then please don't hesitate
                            to <a href={CV} download>take a look at my CV!</a>
                        </p>
                    </GenericMarkupSection>
            </ScrollReveal>

            {/*projects section*/}
            <ScrollReveal>
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
            </ScrollReveal>

            {/*skill section*/}
            <ScrollReveal>
                <GenericMarkupSection left={false} heading={"Skills"}>
                    <React.Fragment>
                        <p>
                            As previously mentioned, I am very well versed in vite + react as well as Java. However this is not the
                            limit of the technologies I am familiar with. Here is a better list of the technologies I work with most frequently:
                        </p>
                        <TagList tags={["Java", "Spring Boot", "Vite + React", "TypeScript", "Node.js", "Docker", "SQLite",
                            "Vercel", "SwingUI", "Firebase", "Haskell", "C", "HTML", "SCSS", "Capacitor", "Python"]}/>
                    </React.Fragment>
                </GenericMarkupSection>
            </ScrollReveal>

            {/*activity section*/}
            <ScrollReveal>
                <GenericMarkupSection left={true} heading={"Activity"} >
                    <React.Fragment>
                        <p>
                            I'm always working on something. Often this comes in bursts as I think of a new idea, other times it's a long
                            , sustained process denoting a project which I have invested more time to. Take a look at my GitHub contributions:
                        </p>
                        <Contributions/>
                    </React.Fragment>
                </GenericMarkupSection>
            </ScrollReveal>

            {/*for clients section*/}
            <ScrollReveal>
                <GenericMarkupSection left={false} heading={"For Clients"} >
                    <React.Fragment>
                        <p>
                            In my time I've worked on several projects for dedicated clients. These include:
                        </p>
                        <div className={"projectsWrapper"}>
                            <Project
                                name={"Verbose"}
                                description="A social media and debating platform with daily polls, questions, and an Android/iOS app."
                                tags={["React", "Vite", "Express", "Firebase"]}
                                url="https://github.com/tinbob655/verbose-debate-and-discussion"
                                tall
                            />
                            <Project
                                name={"Hunter PCs"}
                                description={"The website for my own start up selling Gaming PCS. Users can add items to their baskets and make purchases through Stripe."}
                                tags={["React", "Vite", "Express", "Firebase", "StripeAPI"]}
                                url={"https://github.com/tinbob655/hunter-pcs-site"}
                            />
                            <Project
                                name={"Banham Education Consultancy"}
                                description={"A website for a company which provided dedicated tutoring, specialising in History."}
                                tags={["React", "Vite"]}
                                url={"https://github.com/tinbob655/banham-education-consultancy"}
                            />
                            <Project
                                name={"Northgate Maths"}
                                description={"The website for the maths department at Northgate Sixth Form"}
                                tags={["React", "Vite", "Express", "SQLite", "Hosting"]}
                                url={"https://github.com/tinbob655/northgatesf-maths"}
                                wide
                            />
                        </div>
                    </React.Fragment>
                </GenericMarkupSection>
            </ScrollReveal>

            {/*for fun section*/}
            <ScrollReveal>
                <GenericMarkupSection left={true} heading={"For Fun"} >
                    <React.Fragment>
                        <p>
                            I have also created a whole host of projects just for fun! These include:
                        </p>
                        <div className={"projectsWrapper"}>
                            <Project
                                name={"Chess Engine"}
                                description="A chess engine with a React frontend and Java backend, using minimax with alpha-beta pruning to look 4 moves ahead."
                                tags={["React", "Java", "Spring Boot", "OOP", "Minimax"]}
                                url="https://github.com/tinbob655/tinbobs-chess"
                                wide
                            />
                            <Project
                                name={"Tinbob's Tunes"}
                                description={"An Android app which allows users to listen to and enjoy the music I make (NewRinaldi on major streaming services!)"}
                                tags={["React", "Capacitor", "Kotlin", "Android"]}
                                url={"https://github.com/tinbob655/tinbobs-tunes"}
                                tall
                            />
                            <Project
                                name={"Toasties Sunday"}
                                description={"A fun website I used to start a catering service with my mates!"}
                                tags={["React", "Vite", "Express", "StripeAPI", "SQLite"]}
                                url={"https://github.com/tinbob655/toasties-sunday"}
                            />
                            <Project
                                name={"Connect-4"}
                                description={"A very simple game of connect-4 written in Java with a basic Swing UI"}
                                tags={["Java", "Swing", "Minimax", "OOP"]}
                                url={"https://github.com/tinbob655/java-connect-4"}
                            />
                        </div>
                    </React.Fragment>
                </GenericMarkupSection>
            </ScrollReveal>

            {/*tech stack*/}
            <ScrollReveal>
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
            </ScrollReveal>

            {/*socials*/}
            <ScrollReveal>
                <GenericMarkupSection left={true} heading={"Socials"} >
                    <React.Fragment>
                        <p>
                            If you want to ask me to help out with a project, contract me some work or just want to chat then
                            here is where you can find me:
                        </p>
                        <div className={"socialsWrapper"}>
                                <Social name={"GitHub"}
                                        socialURL={new URL("https://github.com/tinbob655")}
                                        imagePath={"socialLogos/github.png"}
                                        />
                                <Social name={"LinkedIn"}
                                        socialURL={new URL("https://linkedin.com/in/will-rutland")}
                                        imagePath={"socialLogos/linkedin.png"}
                                        />
                                <Social name={"Discord"}
                                        socialURL={new URL("https://discord.com/users/tinbob655")}
                                        imagePath={"socialLogos/discord.png"}
                                        />
                        </div>
                    </React.Fragment>
                </GenericMarkupSection>
            </ScrollReveal>
        </React.Fragment>
    );
};