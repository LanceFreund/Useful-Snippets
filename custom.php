<?php

    // cleans a post variable
    function sanitize($post) {
        $post = strip_tags($post);
        $post = htmlentities($post);
        return stripslashes($post);
    }

?>