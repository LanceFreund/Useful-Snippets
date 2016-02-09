// coded by jade allen cook

// index.html
app.controller('data', function ($scope) {
    if (business.titleTag == true) $('title').text(business.name + ' | ' + business.tag);
    else $('title').text(business.name);
    // apply primary font to body
    $('head').append('<link href="' + fonts.primary.link + '" type="text/css" rel="stylesheet" />');
    $('body').css({
        fontFamily: fonts.primary.name + ', ' + fonts.primary.secondary
    });
    // apply header font to all headers
    $('head').append('<link href="' + fonts.header.link + '" type="text/css" rel="stylesheet" />');
    $('h1, h2, h3, h4, h5, h6').css({
        fontFamily: fonts.header.name + ', ' + fonts.header.secondary
    });
});

// home.html
app.controller('home', function ($scope) {
    
});