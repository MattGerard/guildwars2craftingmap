<?php
require("dbinfo.php");

// Gets data from URL parameters
$id = $_GET['id'];
$vein = $_GET['vein'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];
$descText = $_GET['descText'];
$name = $_GET['name'];
$wikiURL = $_GET['wikiURL'];

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
//$query = sprintf("UPDATE markers SET" . " (vein, lat, lng, type, descText) " .  " VALUES ('%s', '%s', '%s', '%s', '%s') WHERE (id=". $id .");",
$query = "UPDATE markers SET" . " vein='". $vein ."', lat='". $lat ."', lng='". $lng ."', type='". $type ."', descText='". $descText ."', name='". $name ."', wikiURL='". $wikiURL ."' WHERE id='". $id ."'";

$result = mysql_query($query);

if (!$result) {
  die('Invalid query: ' . mysql_error());
}

?>
