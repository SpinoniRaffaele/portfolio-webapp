import { ContentInfo } from "src/app/shared/content-group/content-group.datamodel";

const mediumText: string = 'I\'ve recently begun a side hustle as a technical writer. In particular, ' +
    'i\'ve joined the vibrant community of Medium writers, you can find my medium profile link in the "Quick Links" section. '
    + 'I write mainly about technologies and Computer Science, but not only: as a passionate reader, ' 
    + 'somatimes I publish content related to books that i\'ve recently read. If you like the content remember to subscribe!'


export const aboutMeContent: ContentInfo[][] =
[
//first group - Developer
    [

        {
            imagePath: '../../../assets/images/AngularLogo.png',
            text: 'Test Angular'
        },

        {
            imagePath: '../../../assets/images/vercelLogo.png',
            text: 'Test Vercel'
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
    ]
]