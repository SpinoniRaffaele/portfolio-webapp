import { ContentInfo } from "src/app/shared/content-group/content-group.datamodel";

const mediumText: string = 'I\'ve recently begun a side hustle as a technical writer. In particular, ' +
    'i\'ve joined the vibrant community of Medium writers, you can find my medium profile link in the "Quick Links" section. '
    + 'I write mainly about technologies and Computer Science, but not only: as a passionate reader, ' 
    + 'somatimes I publish content related to books that i\'ve recently read. If you like the content remember to subscribe!'

const developerText: string = 'I have studied computer science in Politecnico di Milano in Italy obtaining a Bachelor\'s ' +
    'Degree in 2019 and a Master Degree in 2022. I am now working fulltime as a fullstack developer at Amadeus. ' +
    'I\ve worked with quite some technologies as a dev and i\'m always looking forward learn some new ones.'

export const aboutMeContent: ContentInfo[][] =
[
//first group - Developer
    [

        {
            imagePath: '../../../assets/images/AngularLogo.png',
            text: developerText
        },

        {
            imagePath: '../../../assets/images/vercelLogo.png',
            text: 'Test Verc'
        },

        {
            imagePath: '',
            text: 'Test No Image'
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