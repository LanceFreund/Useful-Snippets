$(document).ready(function () {

    function getNumber(orginal, perMonth) {
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        // Add the starting year here
        var display = ((year - 2015) + orginal) + (month * perMonth);
        return display;
    }

    function updateSpan(orginal, perMonth, divID, interval, increment) {
        var current = getNumber(orginal, perMonth);
        $(divID).empty();
        current = current + increment;
        $(divID).text(current);
        window.setInterval(function () {
            $(divID).empty();
            current = current + increment;
            $(divID).text(current);
        }, interval);
    }

	// Starting value from year above
	// Increment per month
	// The #ID of the span being updated
	// How many seconds for each increment
	// What to increment by
	
    updateSpan(1, 1, '#id', 3000, 1);

});