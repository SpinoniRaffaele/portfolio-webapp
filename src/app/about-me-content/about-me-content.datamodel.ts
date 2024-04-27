import { ContentGroup } from "src/app/shared/content-group/content-group.datamodel";

const developerText: string = $localize`I have studied computer science in Politecnico di Milano in Italy obtaining a Bachelor\'s
    Degree in 2019 and a Master Degree in 2022. I am now working fulltime as a fullstack web developer at Amadeus.
    I\'ve worked with quite some technologies as a dev and i\'m always looking forward learn some new ones.`

const backendText: string = $localize`I've experienced different backend technologies, more in details, i'm hard skilled in Java,
having 3 year of working experience and knowledge of the Spring framework.
I've a bit of experience with the C programming languages and a small knowledge of
Node.js for server side usage of JavaScript. I know different design patterns and different architectures
such as microservices, often using REST APIs. I've experience with Docker and Kubernetes
and a small knowledge of the AWS cloud environment.
I have small experience in python (and pytorch) gained during the university's final project.
I'm recently learning web3 technologies, in particular smart contracts development with Solidity.
On DB side, i've worked a bit with both SQL and noSQL DBMS (Microsoft SQL Server, Mongo, Couchbase).`;

const frontEndText: string = $localize`I have recently joined the front-end side of development.
    I have 3 years of experience with the Angular framework and the TypeScript language.
    I've a basic knowledge of HTML5 and some experience with CSS3 using the SASS framework.
    I'm actually learning flutter and the Dart language for multi-platform mobile development.`;

const mountainText: string = $localize`Outside of the office, i really like any kind of outdoor activity.
    I like to stay active and I enjoy physical activity, in particular when it involves also the mountain and its
    beautiful landscapes. My favourites activities are hiking in the summer and skying in the winter`;

const climbingText: string = $localize`Recently i've discovered an amazing sport: Climbing; Either indoor or outdoor
    this sport mix adrenaline and fatigue in a unique way!`;

const exploreText: string = $localize`Traveling and exploring are also essential parts of my life.
    I like to visit new places and meet new cultures all over the world.`;

export const aboutMeContent: ContentGroup[] =
[
//first group - Developer
{
    info: [

        {
            imagePath: 'assets/images/polimi.jpg',
            text: developerText
        },

        {
            imagePath: 'assets/images/backend-dev.png',
            text: backendText
        },

        {
            imagePath: 'assets/images/big-dev-screen.jpeg',
            text: frontEndText
        }
    ],
    title: $localize`Developer Career`
},
// second group - Sports
{
    info: [
        {
            imagePath: 'assets/images/ski.jpg',
            text: mountainText
        },

        {
            imagePath: 'assets/images/mountain.jpg',
            text: climbingText
        },
        {
            imagePath: 'assets/images/eze-sunset.jpg',
            text: exploreText
        },
    ],
    title: $localize`Outdoor`
}
];
