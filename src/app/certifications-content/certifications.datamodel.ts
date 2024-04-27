import { ContentGroup } from "../shared/content-group/content-group.datamodel";

export const PIXEL_HEIGHT_OF_SCROLLING_BEFORE_TOP = 135;

const delfText: string = $localize`The DELF B2 is the official French Language certification
    of level B2, the exam is testing four areas: Writing, Speaking, Listening and Reading.
    The certification is given by official national authorities thet are present in different cities in France.`;

const toeicText: string = $localize`The TOEIC® Listening and Reading test has become a standard for decision 
    makers worldwide. The test measures beginner to advanced English Listening and Reading comprehension 
    skills and determine if someone studying English as a foreign language can communicate effectively 
    and proficiently in English. The test assessed a level of B2 and my english has increased since.`;

const javaScriptText: string = $localize`Udemy course of 20 hours explaining web developement with javascript.
    Basic course covering how javascript runs in a browser, its syntax and the DOM interaction.`;

const awsText: string = $localize`Course offered by Cloud Academy inc. covering the bases of cloud service providers
    and analyzing deeply the services offered by Amazon. The course goes through most of the
    AWS services and offers a lab to practice with the AWS management console. At the end, a simulation exam is
    requred in order to get the certification.`;

const cppText: string = $localize`Udemy course covering the features of the language C++, from the basics
    to the Object Oriented Programming paradigm implemented in C++. The course doesn\'t go deeper in a specific
    framework and the programs generated use CLI.`;

const angularText: string = $localize`Udemy course covering deeply every aspect of the UI framework in 40 hours.
    The explanations go from the components and services to more advance concept like the angular CLI,
    the http module, routing, animations... Practice session
    are proposed where a complex web UI solution is build. It also includes content over the RxJs library,
    the reducer pattern, and the TypeScript language.`;

const springOrsysText: string = $localize`Course delivered with 40 hours of live lessons. Focused on the spring framework\'s basics:
    Spring IoC, Spring Data, Spring WebMVC, Springboot and a little bit of Spring Secuirity`;

export const officialCertifications: ContentGroup[] = [
    {
        info: [{
            imagePath: 'assets/images/delf-dalf-1.jpg',
            text: delfText,
            certificationInfo: {
                dateFrom: $localize`june 2023`,
                dateTo: $localize`no expiration`,
                id: '202306T 033206038376'
            }
        }],
        title: 'DELF B2'
    },
    {
        info: [{
            imagePath: 'assets/images/toeic.webp',
            text: toeicText,
            certificationInfo: {
                dateFrom: $localize`september 2019`,
                dateTo: $localize`september 2021`,
                id: undefined
            }
        }],
        title: 'TOEIC B2'
    }
];

export const unofficialCertifications: ContentGroup[] = [
    {
        info: [{
            imagePath: 'assets/images/certification.PNG',
            text: springOrsysText,
            certificationInfo: {
                dateFrom: $localize`december 2023`,
                dateTo: $localize`no expiration`
            }
        }],
        title: 'Spring - Enterprise application\'s developer'
    },
    {
        info: [{
            imagePath: 'assets/images/angular-maximilian.PNG',
            text: angularText,
            certificationInfo: {
                dateFrom: $localize`november 2022`,
                dateTo: $localize`no expiration`,
                id: 'UC-e5e83a48-dbb2-459f-995d-68bdacd5a7de'
            }
        }],
        title: 'Angular - The complete guide'
    },
    {
        info: [{
            imagePath: 'assets/images/Cplusplus.png',
            text: cppText,
            certificationInfo: {
                dateFrom: $localize`august 2021`,
                dateTo: $localize`no expiration`,
                id: 'UC-adcaf4b8-eadf-4254-92f9-f57887680083'
            }
        }],
        title: 'C++ Developer course'
    },
    {
        info: [{
            imagePath: 'assets/images/aws.png',
            text: awsText,
            certificationInfo: {
                dateFrom: $localize`february 2021`,
                dateTo: $localize`no expiration`,
                id: 'f417b707-5bc3-4515-adcd-9319ade468b8'
            }
        }],
        title: 'AWS Solutions Architect'
    },
    {
        info: [{
            imagePath: 'assets/images/javascript.png',
            text: javaScriptText,
            certificationInfo: {
                dateFrom: $localize`august 2020`,
                dateTo: $localize`no expiration`
            }
        }],
        title: 'JavaScript Developer course'
    }
];