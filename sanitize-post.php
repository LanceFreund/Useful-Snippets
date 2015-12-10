<?php

    function sanitize($post) {
        $post = strip_tags($post);
        $post = htmlentities($post);
        return stripslashes($post);
    }

?>