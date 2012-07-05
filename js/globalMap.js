function bindInfoWindow(marker, map, point, infoWindow, StandardView, OwnerView, isOwner) {
					
					
					
					
					  switch (isOwner){
						  case true:
							  var ViewMode = OwnerView;
						  break;
						  	  
						  case false:
							  var ViewMode = StandardView;
						  break;
					  }
					
					var boxText = document.createElement("div");
							boxText.style.cssText = "margin-top: 8px; padding: 5px 15px 5px 32px;";
							
							boxText.innerHTML = ViewMode;
							var myOptions = {
								 content: boxText
								,disableAutoPan: false
								,maxWidth: 0
								,pixelOffset: new google.maps.Size(20, -310)
								,zIndex: 101
								,boxStyle: { 
								  background: "url('"+templateUrl+"/img/infoWindowGW2.png') no-repeat"
								  ,width: "273px"
								  ,height: "289"
								 }
								,closeBoxMargin: "14px 10px 2px 2px"
								,closeBoxURL: ''+templateUrl+'/img/close.png'
								,infoBoxClearance: new google.maps.Size(1, 1)
								,isHidden: false
								,pane: "floatPane"
								,enableEventPropagation: false
							};
					  
					  
				  google.maps.event.addListener(map, 'mousemove', function(e) {
					  
					   jQuery('.latContainer').html(e.latLng.lat());
					   jQuery('.longContainer').html(e.latLng.lng());
					  
				  });
					  
					
				  google.maps.event.addListener(marker, 'click', function() {
					    ib.open(map, marker);
					    currentMarker = marker;
					    GlobalDragEnd = currentMarker.getPosition(); 
					  	
						if(currentInfoWindow){
						if(ib == currentInfoWindow){
						}
						}
						
						if(currentInfoWindow){
						if(ib != currentInfoWindow){
							currentInfoWindow.close();
							currentInfoWindow = ib;
						}
						}
						
						if(currentInfoWindow){
						if(currentInfoWindow == null){
							currentInfoWindow.close();
							currentInfoWindow = ib;
						}
						}
					  
					     currentInfoWindow = ib;
					     //currentInfoWindow.close();
						//infoWindow.open(map, marker);
						

						
					
				  });
						
						var ib = new InfoBox(myOptions);
					    

				 google.maps.event.addListener(marker, 'dragend', function(position) {
        			GlobalDragEnd = marker.getPosition(); 
				 });
				 
				 google.maps.event.addDomListener(boxText,'mouseover',function(){
					 
				 	 // HIDE/SHOW EDIT
					 jQuery('#EditButton').click(function() {
						 
						 jQuery('.OwnerViewNormal').hide();
						 jQuery('.OwnerViewEdit').show();
					});
		
				 
				 });

				  
				}
				
				function CreateAllMarkers(map){
					
				  // Change this depending on the name of your PHP file
				  downloadUrl( templateUrl+"/genxml.php", function(data) {
					var xml = data.responseXML;
					var markers = xml.documentElement.getElementsByTagName("marker");
					
					for (var i = 0; i < markers.length; i++) {
					  var uniqueID = markers[i].getAttribute("id");
					  var vein = markers[i].getAttribute("vein");
					  var name = markers[i].getAttribute("name");
					  var wikiURL = markers[i].getAttribute("wikiURL");
					  var type = markers[i].getAttribute("type");
					  var descText = markers[i].getAttribute("descText");
					  var addedBy = markers[i].getAttribute("addedBy");
					  var addedByID = markers[i].getAttribute("addedByID");
					  var lat = parseFloat(markers[i].getAttribute("lat"));
					  var lng = parseFloat(markers[i].getAttribute("lng"));
					  var point = new google.maps.LatLng(
						  parseFloat(markers[i].getAttribute("lat")),
						  parseFloat(markers[i].getAttribute("lng")));

					  if(addedBy == currentUser){
						var isOwner = true;
					  } else {
						  var isOwner = false;
					  }

					  switchForMarker(map, type, point, uniqueID, vein, name, wikiURL, descText, addedBy, addedByID, isOwner);
					  


					}
				  });
				  
				  
	}

function switchForMarker(map, type, point, uniqueID, vein, name, wikiURL, descText, addedBy, addedByID, isOwner){
				
				var iconType = window[type];
				var iconTypeShadow = window[type+'Shadow'];
				var iconTypeShape = window[type+'Shape'];

				  var marker = new google.maps.Marker({
						draggable: isOwner,
						raiseOnDrag: false,
						icon: iconType,
						shadow: iconTypeShadow,
						shape: iconTypeShape,
						map: map,
						position: point,
						category: type,
						cursor: 'url('+templateUrl+'/img/GW2cursor-hover.png), auto',
						vienType: vein,
						itemName: name,
						wikiURL: wikiURL,
						addedBy: addedBy,
						addedByID: addedByID,
						
				  });

					  switch (vein){
						  case "normal":
							  var veinOptions = "<option value='normal' SELECTED>normal</option>" + 
					 "<option value='rich'>rich</option>";
						  break;
						  
						  case "rich":
							  var veinOptions = "<option value='normal'>normal</option>" + 
					 "<option value='rich' SELECTED>rich</option>";
						  break;
					  }

					 currentMarkers.push(marker);
					  
					 var oldnodehtml = "<div class='customMarkerStyle'><table>" +
					 "<tr><td>Vein:</td> <td><select id='vein'>" +
					 veinOptions + name + wikiURL +
					 "</select> </td></tr>" +
					 "<input type='hidden' id='type' value='" + type + "'>" +
					 "<tr><td>Description:</td> <td><input type='text' id='descText' value='" + descText + "'></td> </tr>" +
					 "<tr><td></td><td><input type='hidden' id='uniqueID' value='" + uniqueID + "'><input type='button' value='Save & Close' onclick='updateData()'/></td></tr></table></div>";
					 
					 var StandardView = "<div class='customMarkerStyle'><div class='MarkerHeaderWrap'>" +
					 "<div class='MarkerHeaderIcon " + type + "'></div>" + 
					 "<div class='MarkerName'>" + name + "</div></div>" +
					 "<div class='MarkerDesc'><div class='MarkerLabel'>Description: </div>" + descText + "</div>" +
					 "<div class='MarkerVeinType'><div class='MarkerLabel'>Vein Type: </div>" + vein + "</div>" +
					 "<div class='MarkerVeinType'><div class='MarkerLabel'>Added By: </div>" + addedBy + "</div>" +
					 "<div class='MarkerWikiUrl'><div class='MarkerLabel'>WikiURL: </div><a href='" + wikiURL + "' target='_blank'>Click To View Wiki</div>" +
					 "<div class='MarkerFlag'><a href='https://docs.google.com/spreadsheet/viewform?formkey=dDdYb0gzd1dHcnNURGQ3R0VvejFoRHc6MQ&entry_0=" + uniqueID + "&entry_4=" + type + "&entry_2=" + point + "' target='_blank' alt='FLAG FOR REMOVAL' title='FLAG FOR REMOVAL'></a></div></div>";
					 
					 var OwnerView = "<div class='OwnerViewNormal'><div class='customMarkerStyle'><div class='MarkerHeaderWrap'>" +
					 "<div class='MarkerHeaderIcon " + type + "'></div>" + 
					 "<div class='MarkerName'>" + name + "</div></div>" +
					 "<div class='MarkerDesc'><div class='MarkerLabel'>Description: </div>" + descText + "</div>" +
					 "<div class='MarkerVeinType'><div class='MarkerLabel'>Vein Type: </div>" + vein + "</div>" +
					 "<div class='MarkerVeinType'><div class='MarkerLabel'>Added By: </div>" + addedBy + "</div>" +
					 "<div class='MarkerWikiUrl'><div class='MarkerLabel'>WikiURL: </div><a href='" + wikiURL + "' target='_blank'>Click To View Wiki</div>" +
					 "<div class='MarkerFlag'><a href='https://docs.google.com/spreadsheet/viewform?formkey=dDdYb0gzd1dHcnNURGQ3R0VvejFoRHc6MQ&entry_0=" + uniqueID + "&entry_4=" + type + "&entry_2=" + point + "' target='_blank' alt='FLAG FOR REMOVAL' title='FLAG FOR REMOVAL'></a></div><div class='MarkerEdit'><a href='#' id='EditButton'>EDIT</a></div></div></div>" + 
					 
					 "<div class='OwnerViewEdit'><div class='customMarkerStyle'><div class='MarkerHeaderWrap'>" +
					 "<div class='MarkerHeaderIcon " + type + "'></div>" + 
					 "<div class='MarkerName'>" + name + "</div></div>" +
					  "<div class='MarkerDesc'><div class='MarkerLabel'>Description: </div><textarea id='descText' maxlength='200' value=''>" + descText + "</textarea></div>" +
					 "<div class='MarkerVeinType'><div class='MarkerLabel'>Vein Type: </div><select id='vein'>" +
					 veinOptions +
					 "</select></div>" +
					 "<input type='hidden' id='type' value='" + type + "'>" +
					 "<input type='hidden' id='name' value='" + name + "'>" +
					 "<input type='hidden' id='wikiURL' value='" + wikiURL + "'>" +
					 "<tr><td></td><td><input type='hidden' id='uniqueID' value='" + uniqueID + "'><input type='button' value='Save & Close' onclick='updateData()'/><input type='button' value='Delete' onclick='removeData()'/></td></tr></table></div></div>";
					  
					  bindInfoWindow(marker, map, point, infoWindow, StandardView, OwnerView, isOwner);
					  
					  ///HIDE MARKERS ON LOAD
					  //marker.setVisible(false);
					  //<input type='button' value='Delete' onclick='removeData()'/>
					
				}

				function saveData() {
				  var vein = escape(document.getElementById("vein").value);
				  var descText = escape(document.getElementById("descText").value);
				  var type = document.getElementById("type").value;
				  var name = document.getElementById("name").value;
				  var wikiURL = document.getElementById("wikiURL").value;
				  var uniqueID;

				  var url = templateUrl + "/addrow.php?vein=" + vein + "&lat=" + GlobalDragEnd.lat() + "&lng=" + GlobalDragEnd.lng() + "&type=" + type + "&descText="  + descText + "&name=" + name + "&wikiURL=" + wikiURL + "&addedBy=" + currentUser + "&addedByID=" + currenUserID;
				  marker.vienType = vein;
				  currentMarkers.push(this);
				  downloadUrl(url, function(data, responseCode) {
					if (responseCode == 200 ) {
					  currentInfoWindow.close();
					  currentInfoWindow = null;
					  GlobalDragEnd == 0;
					  SuccessfulSave();
					}
				  });
				}
				
				
				function updateData() {
				  var vein = escape(document.getElementById("vein").value);
				  var uniqueID = escape(document.getElementById("uniqueID").value);
				  var descText = escape(document.getElementById("descText").value);
				  var type = document.getElementById("type").value;
				  var name = document.getElementById("name").value;
				  var wikiURL = document.getElementById("wikiURL").value;
				  var url =  templateUrl + "/updaterow.php?id=" + uniqueID + "&vein=" + vein + "&lat=" + GlobalDragEnd.lat() + "&lng=" + GlobalDragEnd.lng() + "&type=" + type + "&descText="  + descText + "&name=" + name + "&wikiURL=" + wikiURL + "&addedBy=" + currentUser + "&addedByID=" + currenUserID;

				  downloadUrl(url, function(data, responseCode) {
					if (responseCode == 200 ) {
					  currentInfoWindow.close();
					  currentInfoWindow = null;
					  GlobalDragEnd == 0;
					  SuccessfulUpdate();
					}
				  });			  
				}
				
				function removeData() {
				  var vein = escape(document.getElementById("vein").value);
				  var uniqueID = escape(document.getElementById("uniqueID").value);
				  var descText = escape(document.getElementById("descText").value);
				  var type = document.getElementById("type").value;
				  var url =  templateUrl + "/deleterow.php?id=" + uniqueID + "&vein=" + vein + "&lat=" + GlobalDragEnd.lat() + "&lng=" + GlobalDragEnd.lng() + "&type=" + type + "&descText="  + descText;
						  
				  downloadUrl(url, function(data, responseCode) {
						if (responseCode == 200 ) {
					  	  currentInfoWindow.close();
					      currentInfoWindow = null;
						  GlobalDragEnd == 0;
						  currentMarker.setVisible(false);	
						  SuccessfulDelete();
						}
				  });			 			  
				}


				function downloadUrl(url, callback) {
				  var request = window.ActiveXObject ?
					  new ActiveXObject('Microsoft.XMLHTTP') :
					  new XMLHttpRequest;
			
				  request.onreadystatechange = function() {
					if (request.readyState == 4) {
					  request.onreadystatechange = doNothing;
					  callback(request, request.status);
					}
				  };
			
				  request.open('GET', url, true);
				  request.send(null);
				}
			
				function doNothing() {}
				
				//CREATE MARKER FUNCTIONS
				function CreateNewMarker(map, event){
					
					if (SelectedMarkerType === 'null'){
						PleaseSelectNode();
						NodeSelected = false;
					} else {
							NodeSelected = true;
							marker = new google.maps.Marker({
								position: event.latLng,
								draggable: true,
								raiseOnDrag: false,
								icon: SelectedMarkerType,
								shadow: SelectedMarkerTypeShadow,
								shape: SelectedMarkerTypeShape,
								map: map,
								cursor: 'url('+templateUrl+'/img/GW2cursor-hover.png), auto',
								category: SelectedMarkerTypeValue,
								vienType: '',
								itemName: SelectedMarkerNameValue,
								wikiURL: SelectedMarkerWikiURL,
							});
							
							
							GlobalDragEnd = marker.getPosition();
					
					}
					
				}
				
				//CREATE MARKER WINDOW FUNCTIONS
				function CreateNewMarkerWindow(map, event){
				
				if(NodeSelected === true){
					 
					 var EditView = "<div class='customMarkerStyle'><div class='MarkerHeaderWrap'>" +
					 "<div class='MarkerHeaderIcon " + SelectedMarkerTypeValue + "'></div>" + 
					 "<div class='MarkerName'>" + SelectedMarkerNameValue + "</div></div>" +
					 "<div class='MarkerDesc'><div class='MarkerLabel'>Description: </div> (200 char max) <textarea id='descText' maxlength='200'/></textarea></div>" +
					 "<div class='MarkerVeinType'><div class='MarkerLabel'>Vein Type: </div><select id='vein'>" +
					 "<option value='normal' SELECTED>normal</option>" + 
					 "<option value='rich'>rich</option>" + 
					 "</select></div>" +
					 "<div class='MarkerWikiUrl'><div class='MarkerLabel'>WikiURL: </div><a href='" + SelectedMarkerWikiURL + "' target='_blank'>Click To View Wiki</a></div>" +
					 "<input type='hidden' id='type' value='" + SelectedMarkerTypeValue + "'>" +
					 "<input type='hidden' id='name' value='" + SelectedMarkerNameValue + "'>" +
					 "<input type='hidden' id='wikiURL' value='" + SelectedMarkerWikiURL + "'>" +
					 "<input type='button' value='Save & Close' onclick='saveData()'/>" +
					 "</div>";
					 
						var boxText = document.createElement("div");
						boxText.style.cssText = "margin-top: 8px; padding: 5px 15px 5px 32px;";
						
						boxText.innerHTML = EditView;
						var myOptions = {
							 content: boxText
							,disableAutoPan: false
							,maxWidth: 0
							,pixelOffset: new google.maps.Size(20, -310)
							,zIndex: 101
							,boxStyle: { 
							  background: "url('"+templateUrl+"/img/infoWindowGW2.png') no-repeat"
							  ,width: "273px"
							  ,height: "289"
							 }
							,closeBoxMargin: "14px 10px 2px 2px"
							,closeBoxURL: ""+templateUrl+"/img/close.png"
							,infoBoxClearance: new google.maps.Size(1, 1)
							,isHidden: false
							,pane: "floatPane"
							,enableEventPropagation: false
						};

				     var ib = new InfoBox(myOptions);
						currentMarker = marker;
					google.maps.event.addListener(marker, "click", function(e) {
								
								
								currentMarker = this;
					    		GlobalDragEnd = currentMarker.getPosition(); 
								
								ib.open(map, this);

								if(currentInfoWindow){
								if(ib != currentInfoWindow){
									currentInfoWindow.close();
									currentInfoWindow = ib;
								}
								}
								
								if(currentInfoWindow){
								if(currentInfoWindow == null){
									currentInfoWindow.close();
									currentInfoWindow = ib;
								}
								}
							  	
								currentInfoWindow = ib;

						});	
						
						ib.open(map, marker);
						
								if(currentInfoWindow){
								if(ib != currentInfoWindow){
									currentInfoWindow.close();
									currentInfoWindow = ib;
								}
								}
								
								if(currentInfoWindow){
								if(currentInfoWindow == null){
									currentInfoWindow.close();
									currentInfoWindow = ib;
								}
								}
						
						currentInfoWindow = ib;
						

					
					}
				
				}
				
				// Jquery Fancy Smancy BS
				// Main Menu Control
				 jQuery('.controlToggle').click(function() {
					
				   jQuery('#controls').animate({width: "toggle"});

				  
				});
				
				// Help Menu Control
				 jQuery('.helpBtnMain').click(function() {
				   jQuery('#AddMenu').slideUp();
				   jQuery('#ViewMenu').slideUp();
				   jQuery('#help').toggle('slow', function() {
					// Animation complete.
				  });
				  
				  
				});
				
				// Add Menu Control
				 jQuery('#ViewAddMenu').click(function() {
				   jQuery('#help').slideUp();
				   jQuery('#ViewMenu').slideUp();
				   jQuery('#AddMenu').toggle('slow', function() {
					// Animation complete.
				  });
				  
				  
				});
				
				// View Toggle Menu Control
				 jQuery('#ViewToggleMenu').click(function() {
				   jQuery('#AddMenu').slideUp();
				   jQuery('#help').slideUp();
				   jQuery('#ViewMenu').toggle('slow', function() {
					// Animation complete.
				  });
				  
				});
				
				
				// Welcome Message
				 jQuery('#welcome .close').click(function() {
					 jQuery('#welcome').hide();
					 jQuery.cookie('GW2CRAFTMAP_WELCOME', 'welcome_value', { expires: 30 });
				});
				


				
				// NOTIFICATION MESSAGES
				
				function SuccessfulSave(){
						 jQuery('.LocationAdded').fadeIn().delay(2000).queue(function() {
							 jQuery(this).dequeue();
						});

						function fadeOutMessage() {
							 jQuery('.LocationAdded').fadeOut();
						}
						
						fadeOutMessage();
				}
				
				function SuccessfulUpdate(){
						 jQuery('.LocationUpdated').fadeIn().delay(2000).queue(function() {
							 jQuery(this).dequeue();
						});

						function fadeOutMessage() {
							 jQuery('.LocationUpdated').fadeOut();
						}
						
						fadeOutMessage();
				}
				
				function SuccessfulDelete(){
						 jQuery('.LocationDeleted').fadeIn().delay(2000).queue(function() {
							 jQuery(this).dequeue();
						});

						function fadeOutMessage() {
							 jQuery('.LocationDeleted').fadeOut();
						}
						
						fadeOutMessage();
				}
				
				
				function PleaseSelectNode(){
						 jQuery('.PleaseSelectNode').fadeIn().delay(2000).queue(function() {
							 jQuery(this).dequeue();
						});

						function fadeOutMessage() {
							 jQuery('.PleaseSelectNode').fadeOut();
						}
						
						fadeOutMessage();
				}
				
			// TOGGLE NODE ADDING CONTROLS
			function CleanItemAdding(){
				SelectedMarkerTypeValue = 'null';
				SelectedMarkerNameValue = 'null';
				SelectedMarkerType = 'null';
				SelectedMarkerWikiURL = 'null'
				SelectedMarkerTypeShadow = 'null';
				SelectedMarkerTypeShape = 'null';
				 jQuery('#AddMenu ul li a').removeClass('ActiveNode');
			}
			


			// TOGGLE MARKER VIEW CONTROL
			 jQuery('.ToggleMarkerSwitch').click(function() {
				   jQuery(this).toggleClass("activeMarker");
				   jQuery(this).toggleClass("visible");
				   jQuery('.ToggleMarkerSwitchAll').removeClass("activeMarker visible");
				  var NodeType =  jQuery(this).attr('id');
				  var isNodeVisible =  jQuery(this).hasClass('visible');
				  ToggleMarkersInView(NodeType, isNodeVisible);
			});

			function ToggleMarkersInView(NodeType, isNodeVisible){
			
				if(currentMarkers){
					
					for (var i=0; i<currentMarkers.length; i++){
						
						//alert(currentMarkers[i].category);
						//alert(currentMarkers[i].vienType);
						var type = currentMarkers[i].category;
						var vein = currentMarkers[i].vienType;
						
						if(type == NodeType){
							if(isNodeVisible == true){
								currentMarkers[i].setVisible(true);
								
							} 
							
							if(isNodeVisible == false){
								currentMarkers[i].setVisible(false);
							}
							
						}
					}
				}
			
			}
			
			
			 jQuery('.ToggleMarkerSwitchAll').click(function() {
				   jQuery(this).toggleClass("activeMarker");
				   jQuery(this).toggleClass("visible");
				  var areNodesVisible =  jQuery(this).hasClass('visible');
				  ToggleAllMarkers(areNodesVisible);
				  
				  if(areNodesVisible == false){
					   jQuery('.ToggleMarkerSwitch').removeClass('activeMarker visible');
				  } else {
				  		  jQuery('.ToggleMarkerSwitch').addClass('activeMarker visible');
				  }
					 
				  
			});
			
			
			function ToggleAllMarkers(areNodesVisible){
				
				if(currentMarkers){
					
					for (var i=0; i<currentMarkers.length; i++){

							if(areNodesVisible == true){
								currentMarkers[i].setVisible(true);
								
							} 
							
							if(areNodesVisible == false){
								currentMarkers[i].setVisible(false);
							}

					}
				}
				
			}
			

//ADDING SEARCH BAR

//AutoFill
function AddSearch(AddNodeSearchSelectedID){
	
	 jQuery('#'+AddNodeSearchSelectedID).trigger('click');
	
}

var AddNodeData = [
				{ value: 'AddingVialOfThinBlood', label: 'Vial Of Thin Blood'},
				{ value: 'AddingVialOfWeakBlood', label: 'Vial Of Weak Blood'},
				{ value: 'AddingTinyClaw', label: 'Tiny Claw'},
				{ value: 'AddingSmallClaw', label: 'Small Claw'},
				{ value: 'AddingCopper', label: 'Copper'},
				{ value: 'AddingEye', label: 'Eye'},
				{ value: 'AddingTinyFang', label: 'Tiny Fang'},
				{ value: 'AddingTinyHorn', label: 'Tiny Horn'},
				{ value: 'AddingTinyHusk', label: 'Tiny Husk'},
				{ value: 'AddingIron', label: 'Iron'},
				{ value: 'AddingTinyScale', label: 'Tiny Scale'},
				{ value: 'AddingSeasonedWoodLog', label: 'Seasoned Wood Log'},
				{ value: 'AddingSilverOre', label: 'Silver Ore'},
				{ value: 'AddingSkull', label: 'Skull'},
				{ value: 'AddingSpike', label: 'Spike'},
				{ value: 'AddingSoftWoodLog', label: 'Soft Wood Log'},
				{ value: 'AddingTinyTotem', label: 'Tiny Totem'},
				{ value: 'AddingSmallTotem', label: 'Small Totem'},
				{ value: 'AddingTotem', label: 'Totem'},
				{ value: 'AddingTinyVenom', label: 'Tiny Venom'},
				{ value: 'AddingWoolScrap', label: 'Wool Scrap'},
];

var AddNodeDataSource  = [ ];
var AddNodeDataMapping = { };
for(var i = 0; i < AddNodeData.length; ++i) {
    AddNodeDataSource.push(AddNodeData[i].label);
    AddNodeDataMapping[AddNodeData[i].label] = AddNodeData[i].value;
	
}

 jQuery('.tags').autocomplete({
    minLength: 1,
    source: AddNodeDataSource,
    select: function(event, ui) {
	var AddNodeSearchSelectedID = AddNodeDataMapping[ui.item.value];	
	AddSearch(AddNodeSearchSelectedID);
    }
});

//END ADDING SEARCH BAR			
			
//TOGGLE SEARCH BAR

function ToggleViewSearch(ToggleViewSearchSelectedID){
	
	
	if( jQuery('.ToggleMarkerSwitchAll').hasClass('activeMarker')){
		
	 jQuery('.ToggleMarkerSwitchAll').trigger('click');
	
	} else {
		
		 jQuery('.ToggleMarkerSwitchAll').trigger('click');
		 jQuery('.ToggleMarkerSwitchAll').trigger('click');
		
	}
	
	 jQuery('a#'+ToggleViewSearchSelectedID+'.ToggleMarkerSwitch').trigger('click');
	
}

var SearchBarToggleData = [
				{ value: 'VialOfThinBlood', label: 'Vial Of Thin Blood'},
				{ value: 'VialOfWeakBlood', label: 'Vial Of Weak Blood'},
				{ value: 'TinyClaw', label: 'Tiny Claw'},
				{ value: 'SmallClaw', label: 'Small Claw'},
				{ value: 'CopperOre', label: 'Copper'},
				{ value: 'Eye', label: 'Eye'},
				{ value: 'TinyFang', label: 'Tiny Fang'},
				{ value: 'TinyHorn', label: 'Tiny Horn'},
				{ value: 'TinyHusk', label: 'Tiny Husk'},
				{ value: 'IronOre', label: 'Iron'},
				{ value: 'TinyScale', label: 'Tiny Scale'},
				{ value: 'SeasonedWoodLog', label: 'Seasoned Wood Log'},
				{ value: 'SilverOre', label: 'Silver Ore'},
				{ value: 'Skull', label: 'Skull'},
				{ value: 'Spike', label: 'Spike'},
				{ value: 'SoftWoodLog', label: 'Soft Wood Log'},
				{ value: 'TinyTotem', label: 'Tiny Totem'},
				{ value: 'SmallTotem', label: 'Small Totem'},
				{ value: 'Totem', label: 'Totem'},
				{ value: 'TinyVenom', label: 'Tiny Venom'},
				{ value: 'WoolScrap', label: 'Wool Scrap'},
];

var SearchBarToggleSource  = [ ];
var SearchBarToggleMapping = { };
for(var i = 0; i < SearchBarToggleData.length; ++i) {
    SearchBarToggleSource.push(SearchBarToggleData[i].label);
    SearchBarToggleMapping[SearchBarToggleData[i].label] = SearchBarToggleData[i].value;
	
}

 jQuery('.SearchBarToggle').autocomplete({
    minLength: 1,
    source: SearchBarToggleSource,
    select: function(event, ui) {
	var ToggleViewSearchSelectedID = SearchBarToggleMapping[ui.item.value];	
	ToggleViewSearch(ToggleViewSearchSelectedID);
    }
});

//END TOGGLE SEARCH BAR

