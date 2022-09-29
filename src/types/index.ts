enum Route {
    About = '/about',
    Contact = '/contact',
    Me = '/me',    
};

const ROUTES = [ Route.About, Route.Contact, Route.Me ];

const PROJECTS = [
    {
        title: 'Royalsea',
        catchphrase: 'All-in-one NFT tool suite for the ETH blockchain',
        img: 'https://cdn.discordapp.com/attachments/624559450442694657/1024104504880267324/login-screen.jpeg'
    },
    {
        title: 'Ignite',
        catchphrase: 'Hype items and goods scalper',
        img: 'https://media.discordapp.net/attachments/624559450442694657/1024104696237002882/unknown.png?width=1584&height=891'
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