enum Route {
    About = '/about',
    Contact = '/contact',
    Me = '/me',    
};

const ROUTES = [ Route.About, Route.Contact, Route.Me ];
 
const PROJECTS = [
    {
        title: 'Royalsea',
        catchphrase: 'ETH all in one tool suite. Helping users managing and buying crypto assets.',
        description: 'Founded and developed by a team of crypto enthusiasts, Royalsea is a suite of tools that was first created for the purpose of sniping low price listings on opensea.',
        img: 'https://cdn.discordapp.com/attachments/624559450442694657/1028929987744636928/royalsea.jpg',
        role: 'Founder / Developer',
        stacks: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
        link: "https://twitter.com/RoyalSeaPass",
        isCurrent: true,
    },
    {
        title: 'Ignite',
        catchphrase: 'Hype fashion items and limited goods auto scalper.',
        description: 'There, I worked as a software developer, adding modules to support trendy websites.',
        img: 'https://cdn.discordapp.com/attachments/624559450442694657/1028929987350372393/ignite.png',
        role: 'Lead backend developer',
        stacks: ['Node.js', 'Express', 'MongoDB', 'AWS'],
        link: 'https://twitter.com/lgnite',
        isCurrent: false,
    }
];

const EVENTS = [
    {
        title: 'Montpellier Institute of Technology - Computer Science department',
        details: '2yr',
        date: '2022 - Present'
    },
    {
        title: 'Royalsea',
        details: 'Founder / Developer',
        date: '2021 - Present'
    },
    {
        title: 'Montpellier Institute of Technology - Computer Science department',
        details: '1yr',
        date: '2021 - 2022'
    },
    {
        title: 'Graduated A-Level',
        date: '2021'
    },
    {
        title: 'Ignite LLC',
        details: 'Head backend developer',
        date: '2020 - 2021'
    },
    {
        title: 'Lycée Frédéric Bazille (Agropolis)',
        details: '(High school) - (Maths / Computer Science)',
        date: '2019 - 2021'
    },
]

export { Route, ROUTES, PROJECTS, EVENTS };