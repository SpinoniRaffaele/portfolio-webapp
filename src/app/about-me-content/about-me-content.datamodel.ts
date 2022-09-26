import { ContentInfo } from "src/app/shared/content-group/content-group.datamodel";

const mediumText: string = 'I\'ve recently begun a side hustle as a technical writer. In particular, ' +
    'i\'ve joined the vibrant community of Medium writers, you can find my medium profile link in the "Quick Links" section. '
    + 'I write mainly about technologies and Computer Science, but not only: as a passionate reader, ' 
    + 'somatimes I publish content related to books that i\'ve recently read. If you like the content remember to subscribe!'

const developerText: string = 'I have studied computer science in Politecnico di Milano in Italy obtaining a Bachelor\'s ' +
    'Degree in 2019 and a Master Degree in 2022. I am now working fulltime as a fullstack web developer at Amadeus. ' +
    'I\'ve worked with quite some technologies as a dev and i\'m always looking forward learn some new ones.'

const backendText: string = "I've experienced different backend technologies, more in details, i'm hard skilled in Java, " +
"having 1+ year of working experience on the Spring framework. " +
"I've confidence with the C and C++ programming languages and a small knowledge of " +
"Node.js for server side usage of JavaScript. I experienced with different design patterns and different architectures " +
"such as exagonal, microservices, often using REST APIs. I've experience with Docker " +
"and a small knowledge of the AWS cloud environment. " +
"On DB side, i've worked with both SQL and noSQL DBMS (Microsoft SQL, Mongo, Couchbase).";

const frontEndText: string = "I have recently joined the front-end side of development. "+ 
    "i've learnt the Angular framework, and i've work with it for more than a year using the TypeScript language. " + 
    "I've a basic knowledge of HTML5 and some experience with CSS3 using the SASS framework."
    "I'm actually learning flutter and the Dart language for multi-platform mobile development. " +
    "Regarding native technologies, i've got some experience with Android development in Java in the past";

export const aboutMeContent: ContentInfo[][] =
[
//first group - Developer
    [

        {
            imagePath: '../../../assets/images/polimi.jpg',
            text: developerText
        },

        {
            imagePath: '../../../assets/images/backend-dev.png',
            text: backendText
        },

        {
            imagePath: '../../../assets/images/big-dev-screen.jpeg',
            text: frontEndText
        }
    ],
//second group - Technical Writer
    [
        {
            imagePath: '../../../assets/images/medium_logo.png',
            text: mediumText
        }
    ],
// third group - Sports
    [
        {
            imagePath: '../../../assets/images/vercelLogo.png',
            text: 'Test Vercel'
        },

        {
            imagePath: '',
            text: 'Test No Image'
        }
    ],
// fourth group - languages - not sure
    [
        {
            imagePath: '../../../assets/images/vercelLogo.png',
            text: 'Test Vercel'
        },

        {
            imagePath: '',
            text: 'Test No Image'
        }
    ]
]