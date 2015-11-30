<?php

    // link text & GET url
    $navLinks = array(
        array('home', 'home'),
        array('info', 'info'),
        array('contact', 'contact')
    );
    
    // display each link
	for ( $i = 0; $i <= count($navLinks) - 1; $i++ ) {
		echo '<a href="?page=' . $navLinks[$i][1] . '">' . $navLinks[$i][0] . '</a>';
	}
	
	// include the page called 
	if ( isset($_GET['page']) && file_exists('pages/' . $_GET['page'] . '.php') && in_array($_GET['page'], $navLinks) ) {
    	include_once('pages/' . $_GET['page'] . '.php');
	} else {
    	include_once('pages/home.php');
	}

?>