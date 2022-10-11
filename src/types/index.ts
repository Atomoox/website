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
        description: 'Worked as a software developer there. Adding modules to support more websites.',
        img: 'https://cdn.discordapp.com/attachments/624559450442694657/1028929987350372393/ignite.png',
        role: 'Lead backend developer',
        stacks: ['Node.js', 'Express', 'MongoDB', 'AWS'],
        link: 'https://twitter.com/lgnite',
        isCurrent: false,
    }
];

const EVENTS = [
    {
        title: 'Montpellier-Sète DUT - Computer Science departement',
        details: '2yr',
        date: '2022 - Present'
    },
    {
        title: 'Royalsea',
        details: 'Founder / Developper',
        date: '2021 - Present'
    },
    {
        title: 'Montpellier-Sète DUT - Computer Science departement',
        details: '1yr',
        date: '2021 - 2022'
    },
    {
        title: 'Graduated high school',
        date: '2021'
    },
    {
        title: 'Ignite LLC',
        details: 'Head backend developper',
        date: '2020 - 2021'
    },
    {
        title: 'Lycée Frédéric Bazille',
        details: '(High school) - Agropolis (Mathematics / CS)',
        date: '2019 - 2021'
    },
]

export { Route, ROUTES, PROJECTS, EVENTS };