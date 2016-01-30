$.preloadImages = function () {
    for (var i = 0; i < arguments.length; i++) {
        $('<img />').attr('src', arguments[i]);
    }
}

$.preloadImages(
    'img1.jpg',
    'img2.jpg'
);