// JavaScript Document
google.load("earth", "1.x", {"other_params":"sensor=false"});

function init() {
  google.earth.createInstance('map3d', initCB, failureCB);
}

function initCB(instance) {
      ge = instance;
      ge.getWindow().setVisibility(true);
}



function failureCB(errorCode) {
}

google.setOnLoadCallback(init);


var placemark = ge.createPlacemark('');
placemark.setName("placemark");
// Set the placemark's location.  
var point = ge.createPoint('');
point.setLatitude(12.345);
point.setLongitude(54.321);
placemark.setGeometry(point);

// Add the placemark to Earth.
ge.getFeatures().appendChild(placemark);
