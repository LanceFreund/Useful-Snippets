// coded by jade allen cook

// init the application
var app = angular.module('app', ['ngRoute']);

// assign variables to scope
// all business data
var business = {
    // basic info
    name: 'Inceptos Pellentesque',
    tag: 'Lorem Inceptos Condimentum Tellus',
    logo: 'http://www.placehold.it/250X500',
    phone: '(555) 555-5555',
    // physical address
    address: {
        street: '123 Vehicula Ave',
        city: 'Cursus Elit',
        state: 'Ipsum'
    },
    // social media links
    social: {
        website: '#',
        facebook: '#',
        twitter: '#',
        instagram: '#',
        pintrest: '#',
        tumblr: '#'
    },
    // adds tag into title
    titleTag: true
};

// external fonts
var fonts = {
    primary: {
        name: 'Hind',
        link: 'https://fonts.googleapis.com/css?family=Hind:400,700',
        secondary: 'Arial'
    }, 
    header: {
        name: 'Hind',
        link: 'https://fonts.googleapis.com/css?family=Hind:400,700',
        secondary: 'Arial'
    }
};

// universal colors
var color = {
    black: '#000',
    white: '#FFF',
    primary: '#446899',
    secondary: '#2C5287',
    highlight: '#4FBC49'
};

// navbar info 
var navbar = [
    {
        title: 'home',
        link: 'home',
    }
];

// home.html
var home = {

};