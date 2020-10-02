module.exports = {

    author: "@Chaseyb",
    siteTitle: "React Portfolio",
    siteShortTitle: "cj.", // Used as logo text in header, footer, and splash screen
    siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
    siteUrl: "https://chasejohnson.dev/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/chasebjohnson//"
        },
        {
            name: "Github",
            url: "https://github.com/chaseyb"
        },
    ],

    navLinks: {
        menu: [
            {
                name: "About",
                url: "/#about",
            },
            {
                name: "Skills",
                url: "/#interests",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "DESIGNED BY CHASE JOHNSON IN 2020",
            url: "/#hero"
        }
    ]
}