$(document).ready(function () {

    function loop_images(current) {
        $('#id').attr('src', srcs[current]);
        if (current >= srcs.length - 1) {
            setTimeout(function () {
                loop_images(0);
            }, 3500);
        } else {
            setTimeout(function () {
                loop_images(current + 1);
            }, 3500);
        }
    }

    var srcs = ['img/pic1.ext', 'img/pic2.ext'];
    loop_images(0);

});