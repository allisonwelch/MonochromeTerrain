//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://sounny.github.io/">Sounny Slitine</a>';
    
    var apitoken = 'pk.eyJ1IjoiYW13ZWxjaDgiLCJhIjoiY2s4ZG85a3NzMHdodzNka2E4NHlwbndzbCJ9.bHVVGTq1DuV_F54swJiRqw' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles
    
    //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'amwelch8/ck8dobssr45t41iqi9wcp91v8', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
   //Variables for the different basemaps
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [31.50, -83],//Coordinated to center the map
        zoom: 5.5, //zoom level
        layers:customeBasemap //default base
    });
    
     var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
    };
    
    L.control.layers(baseLayers).addTo(map);
    
};

//calling the funcation
$(document).ready(createMap);