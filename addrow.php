<?php
require("dbinfo.php");

// Gets data from URL parameters
$vein = $_GET['vein'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];
$descText = $_GET['descText'];
$name = $_GET['name'];
$wikiURL = $_GET['wikiURL'];
$addedBy = $_GET['addedBy'];
$addedByID = $_GET['addedByID'];

// Opens a connection to a MySQL server
$connection = mysql_connect ("localhost", $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Insert new row with user data
$query = sprintf("INSERT INTO markers" . " (id, vein, lat, lng, type, descText, name, wikiURL, addedBy, addedByID) " . " VALUES (NULL, '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s');",
         mysql_real_escape_string($vein),
         mysql_real_escape_string($lat),
         mysql_real_escape_string($lng),
         mysql_real_escape_string($type),
		 mysql_real_escape_string($descText),
		 mysql_real_escape_string($name),
		 mysql_real_escape_string($wikiURL),
		 mysql_real_escape_string($addedBy),
		 mysql_real_escape_string($addedByID));

$result = mysql_query($query);

if (!$result) {
  die('Invalid query: ' . mysql_error());
}

?>
