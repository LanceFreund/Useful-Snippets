// coded by jade allen cook

// index.html
app.controller('data', function ($scope) {
    if (business.titleTag == true) $('title').text(business.name + ' | ' + business.tag);
    else $('title').text(business.name);
});

// home.html
app.controller('home', function ($scope) {
    
});