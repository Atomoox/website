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

export { Route, ROUTES, PROJECTS };