<?php /**
 * Template Name: GW2MAP
 *
 * A custom page template using Bootstrap
 *
 *
 */ ?>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>Guild Wars 2 Interactive Crafting Node Map - Alpha 1.5 by B-Team Gaming</title>
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/style.css" type="text/css" media="screen">
    <link type="text/css" href="<?php bloginfo('template_directory'); ?>/css/jquery-ui-1.8.21.custom.css" rel="stylesheet" />
    <link href="<?php bloginfo('template_directory'); ?>/css/bootstrapMap.css" rel="stylesheet">
  </head>
  <body>
  <!--<div class="topBorder"></div>-->
    <div id="controlWrapper">
        <div id="controls">
        
        			<?php 
                global $user_identity, $user_ID;	
                // If user is logged in or registered, show dashboard links in panel
                if (is_user_logged_in()) { 
            ?>
          
          
          <div class="ViewMenuBtns">
            <div id="ViewAddMenu">Add Menu</div>
        </div>
        <div id="AddMenu">
        
					
<div class="ui-widget">           
<input type="text" class="tags">
</div>

        
            <ul class="addListOfItems">
            	<li><a href="#" id="AddingVialOfThinBlood" class=""><div class="AddMenuIcon vialOfThinBloodIcon"></div><div class="AddMenuText">Add Vial Of Thin Blood</div></a></li>
           		<li><a href="#" id="AddingVialOfWeakBlood" class=""><div class="AddMenuIcon vialOfWeakBloodIcon"></div><div class="AddMenuText">Add Vial Of Weak Blood</div></a></li>
                <li><a href="#" id="AddingTinyClaw" class=""><div class="AddMenuIcon tinyClawIcon"></div><div class="AddMenuText">Add Tiny Claw</div></a></li>
                <li><a href="#" id="AddingSmallClaw" class=""><div class="AddMenuIcon smallClawIcon"></div><div class="AddMenuText">Add Small Claw</div></a></li>
            	<li><a href="#" id="AddingCopper" class=""><div class="AddMenuIcon copperIcon"></div><div class="AddMenuText">Add Copper</div></a></li>
                <li><a href="#" id="AddingEye" class=""><div class="AddMenuIcon eyeIcon"></div><div class="AddMenuText">Add Eye </div></a></li>
                <li><a href="#" id="AddingTinyFang" class=""><div class="AddMenuIcon tinyFangIcon"></div><div class="AddMenuText">Add Tiny Fang</div></a></li>
                <li><a href="#" id="AddingTinyHorn" class=""><div class="AddMenuIcon tinyHornIcon"></div><div class="AddMenuText">Add Tiny Horn</div></a></li>
                <li><a href="#" id="AddingTinyHusk" class=""><div class="AddMenuIcon tinyHuskIcon"></div><div class="AddMenuText">Add Tiny Husk</div></a></li>
                <li><a href="#" id="AddingIron" class=""><div class="AddMenuIcon ironIcon"></div><div class="AddMenuText">Add Iron</div></a></li>
                <li><a href="#" id="AddingTinyScale" class=""><div class="AddMenuIcon tinyScaleIcon"></div><div class="AddMenuText">Add Tiny Scale</div></a></li>
                <li><a href="#" id="AddingSeasonedWoodLog" class=""><div class="AddMenuIcon seasonedWoodLogIcon"></div><div class="AddMenuText">Add Seasoned Wood Log</div></a></li>
                <li><a href="#" id="AddingSilverOre" class=""><div class="AddMenuIcon silverOreIcon"></div><div class="AddMenuText">Add Silver Ore</div></a></li>
                <li><a href="#" id="AddingSkull" class=""><div class="AddMenuIcon skullIcon"></div><div class="AddMenuText">Add Skull</div></a></li>
                <li><a href="#" id="AddingSpike" class=""><div class="AddMenuIcon spikeIcon"></div><div class="AddMenuText">Add Spike</div></a></li>
                <li><a href="#" id="AddingSoftWoodLog" class=""><div class="AddMenuIcon softWoodLogIcon"></div><div class="AddMenuText">Add Soft Wood Log</div></a></li>
                <li><a href="#" id="AddingTinyTotem" class=""><div class="AddMenuIcon tinyTotemIcon"></div><div class="AddMenuText">Add Tiny Totem</div></a></li>
                <li><a href="#" id="AddingSmallTotem" class=""><div class="AddMenuIcon smallTotemIcon"></div><div class="AddMenuText">Add Small Totem</div></a></li>
                <li><a href="#" id="AddingTotem" class=""><div class="AddMenuIcon totemIcon"></div><div class="AddMenuText">Add Totem</div></a></li>
                <li><a href="#" id="AddingTinyVenom" class=""><div class="AddMenuIcon tinyVenomIcon"></div><div class="AddMenuText">Add Tiny Venom</div></a></li>
                <li><a href="#" id="AddingWoolScrap" class=""><div class="AddMenuIcon woolScrapIcon"></div><div class="AddMenuText">Add Wool Scrap</div></a></li>
                <li>More Coming Shortly...</li>
            </ul>
        </div>
        
          
            
			<?php 
                // Else if user is not logged in, show login and register forms
                } else {	
            ?>
          
           
            <?php } ?>	
        
        
        
        <div class="ViewMenuBtns">
            <div id="ViewToggleMenu">Views Menu</div>
        </div>
        <div id="ViewMenu">
        
<div class="ui-widget">           
<input type="text" class="SearchBarToggle">
</div>

		
            <ul>
                <li><a href="#" id="toggleALL" class="ToggleMarkerSwitchAll"><div class="ViewMenuText">Hide/Show All</div></a></li>
                
                <li><a href="#" id="VialOfThinBlood" class="ToggleMarkerSwitch"><div class="ViewMenuIcon vialOfThinBloodIcon"></div><div class="ViewMenuText">Toggle Vial Of Thin Blood</div></a></li>
                <li><a href="#" id="VialOfWeakBlood" class="ToggleMarkerSwitch"><div class="ViewMenuIcon vialOfWeakBloodIcon"></div><div class="ViewMenuText">Toggle Vial Of Weak Blood</div></a></li>
                <li><a href="#" id="TinyClaw" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyClawIcon"></div><div class="ViewMenuText">Toggle Tiny Claw</div></a></li>
                <li><a href="#" id="SmallClaw" class="ToggleMarkerSwitch"><div class="ViewMenuIcon smallClawIcon"></div><div class="ViewMenuText">Toggle Small Claw</div></a></li>
                <li><a href="#" id="CopperOre" class="ToggleMarkerSwitch"><div class="ViewMenuIcon copperIcon"></div><div class="ViewMenuText">Toggle Copper</div></a></li>
                <li><a href="#" id="Eye" class="ToggleMarkerSwitch"><div class="ViewMenuIcon eyeIcon"></div><div class="ViewMenuText">Toggle Eye</div></a></li>
                <li><a href="#" id="TinyFang" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyFangIcon"></div><div class="ViewMenuText">Toggle Tiny Fang</div></a></li>
                <li><a href="#" id="TinyHorn" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyHornIcon"></div><div class="ViewMenuText">Toggle Tiny Horn</div></a></li>
                <li><a href="#" id="TinyHusk" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyHuskIcon"></div><div class="ViewMenuText">Toggle Tiny Husk</div></a></li>
                <li><a href="#" id="IronOre" class="ToggleMarkerSwitch"><div class="ViewMenuIcon ironIcon"></div><div class="ViewMenuText">Toggle Iron</div></a></li>
                <li><a href="#" id="TinyScale" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyScaleIcon"></div><div class="ViewMenuText">Toggle Tiny Scale</div></a></li>
                <li><a href="#" id="SeasonedWoodLog" class="ToggleMarkerSwitch"><div class="ViewMenuIcon seasonedWoodLogIcon"></div><div class="ViewMenuText">Toggle Seasoned Wood Log</div></a></li>
                <li><a href="#" id="SilverOre" class="ToggleMarkerSwitch"><div class="ViewMenuIcon silverOreIcon"></div><div class="ViewMenuText">Toggle Silver Ore</div></a></li>
                <li><a href="#" id="Skull" class="ToggleMarkerSwitch"><div class="ViewMenuIcon skullIcon"></div><div class="ViewMenuText">Toggle Skull</div></a></li>
                <li><a href="#" id="Spike" class="ToggleMarkerSwitch"><div class="ViewMenuIcon spikeIcon"></div><div class="ViewMenuText">Toggle Spike</div></a></li>
                <li><a href="#" id="SoftWoodLog" class="ToggleMarkerSwitch"><div class="ViewMenuIcon softWoodLogIcon"></div><div class="ViewMenuText">Toggle Soft Wood Log</div></a></li>
                <li><a href="#" id="TinyTotem" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyTotemIcon"></div><div class="ViewMenuText">Toggle Tiny Totem</div></a></li>
                <li><a href="#" id="SmallTotem" class="ToggleMarkerSwitch"><div class="ViewMenuIcon smallTotemIcon"></div><div class="ViewMenuText">Toggle Small Totem</div></a></li>
                <li><a href="#" id="Totem" class="ToggleMarkerSwitch"><div class="ViewMenuIcon totemIcon"></div><div class="ViewMenuText">Toggle Totem</div></a></li>
                <li><a href="#" id="TinyVenom" class="ToggleMarkerSwitch"><div class="ViewMenuIcon tinyVenomIcon"></div><div class="ViewMenuText">Toggle Tiny Venom</div></a></li>
                <li><a href="#" id="WoolScrap" class="ToggleMarkerSwitch"><div class="ViewMenuIcon woolScrapIcon"></div><div class="ViewMenuText">Toggle Wool Scrap</div></a></li>
                
                <li>More Coming Shortly...</li>
            </ul>
  

        </div>
        <div class="ViewMenuBtns">
            <div class="helpBtnMain">Help/Notes</div>
        </div>
        <div id="help">
                <ul class="helpMenu">
                 <li><a href="https://docs.google.com/spreadsheet/viewform?formkey=dEFGbVpOMVJSRTJ3SEVxTXJtM0MtNXc6MQ#gid=0" target="_blank">Bug Report</a></li>
                 <li>Click on the MENU button to the left hand side of the screen.</li>
                 <li>In This MENU you will find three dropdown menu's.</li>
                 <li><b>Add Menu</b>: Click this menu to open a list of node types. Once you select a node type - you can then click on the map to add a node type.</li>
                 <li>Once you've placed a node onto the map, click and drag the node to the location you would like to save it at.</li>
                 <li><b>View Menu</b>: Within this menu, you'll find a list of nodes similar to that of the add menu. Click to toggle the visibility of each node type.</li>
                 <li><b>Flag For Removal</b>: Use the red flag on each node to flag it for an admin removal.</li>
                 <li><b>Version</b> Alpha 1.3</li>
                </ul>
          </div>
        </div>
      <div class="controlToggle">Menu</div>
    </div>
    
    <div id="message">
        <div class="LocationAdded">Location added.</div>
        <div class="LocationUpdated">Location updated.</div>
        <div class="LocationDeleted">Location removed.</div>
        <div class="PleaseSelectNode">Please first select a node type to add from the menu.</div>
    </div>
    
    <div id="map">loading tiles...</div>	
    
    <div id="current"></div>	
    
    <div id="welcome">
        <div id="welcomeWrap">
            <div class="welcomeText"> 
                <div class="close"> X Close</div> 
                <div class="welcomeTextIn">
               <p> Welcome to <b>"The Crafting Map"</b>.</p> 
               <p>Since this is your first time here, please be sure to join us in order to be able to add nodes. Registration is our way of tracking nodes, who placed them, and allows you to delete them incase you make a mistake or want to make changes. Below you'll find a small set of instructions to get you started.</p>
               <p>
               <ul>
                 <li>Once You've Registerd Click on the MENU button to the left hand side of the screen.</li>
                 <li><b>Add Menu</b>: Click this menu to open a list of node types. Once you select a node type - you can then click on the map to add a node type.</li>
                 <li>Once you've placed a node onto the map, click and drag the node to the location you would like to save it at.</li>
                 <li><b>Toggle View Menu</b>: Within this menu, you'll find a list of nodes similar to that of the add menu. Click to toggle the visibility of each node type.</li>
                 <li><b>Flag For Removal</b>: Use the red flag on each node to flag it for an admin removal.</li>
               </ul>
               </p></div>
            </div>
        </div>
    </div>
    
    <div id="BugReport"><a href="https://docs.google.com/spreadsheet/viewform?formkey=dEFGbVpOMVJSRTJ3SEVxTXJtM0MtNXc6MQ#gid=0" target="_blank"></a></div>
    
	<div id="header-wrap">
    <div id="login">
    <div class="LoginBtn">
    		<?php 
                // If user is logged in or registered, show dashboard links in panel
                if (is_user_logged_in()) { 
            ?>
            Logged in as <span class=""><?php echo $user_identity ?></span> <a href="<?php echo wp_logout_url( get_permalink() ); ?>" rel="nofollow" title="<?php _e('Log out'); ?>" class="btn"><?php _e('Log out'); ?></a>
            
			<?php 
                // Else if user is not logged in, show login and register forms
                } else {	
            ?>
            <?php if (get_option('users_can_register')) : ?>
            

            <a class="navbar-text pull-right joinbtn btn" href="/wp-login.php?action=register">Join</a>  
            <?php endif ?>		
            <a class="navbar-text pull-right loginbtn btn" data-toggle="modal" href="#loginModal">Login</a>
            <?php } ?>	
    </div>
    </div>
    	<div id="logo"><a href="http://guild.bteamgaming.com" target="_blank"></a></div>
    </div>
    
    <div id="LatLong">
        <div class="latContainer"></div>
        <div class="longContainer"></div>
    </div>
    
    <div class="modal hide fade in" id="loginModal">
    <div class="modal-header">
    <a class="close" data-dismiss="modal">×</a>
				<form class="clearfix" action="<?php bloginfo('url') ?>/wp-login.php" method="post">
					<h1>Member Login</h1>
					<label class="grey" for="log">Username:</label>
					<input class="field" type="text" name="log" id="log" value="<?php echo wp_specialchars(stripslashes($user_login), 1) ?>" size="23" />
					<label class="grey" for="pwd">Password:</label>
					<input class="field" type="password" name="pwd" id="pwd" size="23" />
	            	<label><input name="rememberme" id="rememberme" type="checkbox" checked="checked" value="forever" /> Remember me</label>
        			<div class="clear"></div>
					<input type="submit" name="submit" value="Login" class="bt_login" />
					<input type="hidden" name="redirect_to" value="<?php echo $_SERVER['REQUEST_URI']; ?>"/>
					<a class="lost-pwd" href="<?php bloginfo('url') ?>/wp-login.php?action=lostpassword">Lost your password?</a>
				</form>
    </div>
    </div>
        
	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/jquery-ui-1.8.21.custom.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/markerImages.js" type="text/javascript"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/markerControls.js" type="text/javascript"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/jquery.cookie.js" type="text/javascript"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/infobox.js" type="text/javascript"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/globalMap.js" type="text/javascript"></script>
    <script src="<?php bloginfo('template_directory'); ?>/js/bootstrap-modal.js"></script>
    <script type="text/javascript">
	/*
	 * = Config
	 * ----------------
	 */
		var templateUrl = '<?= get_bloginfo("template_url"); ?>';
		var repeatOnXAxis = false; // Do we need to repeat the image on the X-axis? Most likely you'll want to set this to false
		var blankTilePath = 'tiles/_empty.jpg'; // Path to a blank tile when repeat is set to false
		var maxZoom = 7; // Maximum zoom level. Set this to the first number of the last tile generated (eg. 5_31_31 -> 5)
		var SelectedMarkerType = 'null';
		var SelectedMarkerTypeShadow = 'null';
		var SelectedMarkerTypeShape = 'null';
		var SelectedMarkerTypeValue = 'null';
		var SelectedMarkerNameValue = 'null';
		var SelectedMarkerWikiURL = 'null';
		var GlobalDragEnd;
		var map;
		var currentMarker = null;
		var currentMarkers =[];
		var infowindow;
		var currentInfoWindow; 
		var currentUser = '<?php echo $user_identity; ?>';
		var currenUserID = '<?php echo $user_ID; ?>';
		
	
	/*
	 * Helper function which normalizes the coords so that tiles can repeat across the X-axis (horizontally) like the standard Google map tiles.
	 * ----------------
	 */
	
		function getNormalizedCoord(coord, zoom) {
	
			if (!repeatOnXAxis) return coord;
	
			var y = coord.y;
			var x = coord.x;

			// tile range in one direction range is dependent on zoom level
			// 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
			var tileRange = 1 << zoom;

			// don't repeat across Y-axis (vertically)
			if (y < 0 || y >= tileRange) {
				return null;
			}

			// repeat across X-axis
			if (x < 0 || x >= tileRange) {
				x = (x % tileRange + tileRange) % tileRange;
			}

			return {
				x: x,
				y: y
			};

		}
				
// MARKER IMAGES

window.onload = function() {		
	
	
		//alert($.cookie('GW2CRAFTMAP_WELCOME'));
		if($.cookie('GW2CRAFTMAP_WELCOME') == 'welcome_value'){
		//alert('Youve been here before');
		} else {
			$('#welcome').show();
		}

		var customMapType = new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) {
				var normalizedCoord = getNormalizedCoord(coord, zoom);
				if(normalizedCoord && (normalizedCoord.x < Math.pow(2, zoom)) && (normalizedCoord.x > -1) && (normalizedCoord.y < Math.pow(2, zoom)) && (normalizedCoord.y > -1)) {
					return '<?php bloginfo('template_directory'); ?>/tiles/' + zoom + '_' + normalizedCoord.x + '_' + normalizedCoord.y + '.jpg';
				} else {
					return blankTilePath;
				}
			},
			tileSize: new google.maps.Size(256, 256),
			maxZoom: maxZoom,
			name: 'Guild Wars 2 Beta Map'
		});

		// Basic options for our map
		var myOptions = {
			center: new google.maps.LatLng(16.4044704567025,  5.5810546875),
			zoom: 4,
			minZoom: 3,
			zoomControl: true,
			zoomControlOptions: {
			  style: google.maps.ZoomControlStyle.SMALL,
			  position: google.maps.ControlPosition.BOTTOM_RIGHT
			},
			panControl: false,
			draggableCursor: 'url(<?php bloginfo('template_directory'); ?>/img/GW2cursor.png), auto',
			draggingCursor: 'url(<?php bloginfo('template_directory'); ?>/img/GW2cursor-hover.png), auto',
			streetViewControl: false,
			mapTypeControl: false,
			mapTypeControlOptions: {
				mapTypeIds: ["custom"]
			}
		};

		// Init the map
		var map = new google.maps.Map(document.getElementById('map'), myOptions);
		// Hook the our custom map type to the map and activate it
		map.mapTypes.set('custom', customMapType);
		map.setMapTypeId('custom');	
		
		infoWindow = new google.maps.InfoWindow({
		maxWidth: 250
		});
		
		// ADDING NEW NODES TO THE MAP
		google.maps.event.addListener(map, 'click', function( event ){
		
		
		if(currentInfoWindow){
			currentInfoWindow.close();
			currentInfoWindow = null;
			
		} else {
		
		CreateNewMarker(map, event);
		CreateNewMarkerWindow(map, event);
			
		}
		currentMarker = null;

		//alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
		});


		CreateAllMarkers(map);
		

		
		//Set Toggles To Active
		$('.ToggleMarkerSwitch').addClass('activeMarker visible');
		$('.ToggleMarkerSwitchAll').addClass('activeMarker visible');

		
}

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10851471-5']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();	



  </script>
  </body>
</html>