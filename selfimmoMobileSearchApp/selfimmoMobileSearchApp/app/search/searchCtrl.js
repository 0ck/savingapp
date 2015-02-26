angular.module('searchCtrl', []).factory("rechercheDataService", function () {
    return {rechercheData: '', coordRecherche : '' }
})


.controller('SearchCtrl', function ($scope, $state, $stateParams, $ionicLoading, rechercheDataService) {
    $value = $stateParams.param;
    $scope.type = $value
    $scope.rechercheData = {
        localisation: "",
        type: "Appartement",
        nbpiece: null,
        minbudget: null,
        maxbudget: null,
        minsuperficie: null,
        maxsuperficie: null,
        expertise: false,
        meuble: "Peu importe"
    }
    $scope.rechercher = function () {
        geocoder = new google.maps.Geocoder();
        adresse = $scope.rechercheData.localisation
        geocoder.geocode({ 'address': adresse }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                coord = results[0].geometry.location
                rechercheDataService.coordRecherche = coord
                console.log(coord)
                console.log(rechercheDataService.coordRecherche)
            } else {
                console.log("Geocode was not successful for the following reason: " + status);
            }
        });
        //datas = rechercheDataService.rechercheData.push($scope.rechercheData)
        //console.log($scope.rechercheData.localisation)
        datas = $scope.rechercheData
        rechercheDataService.rechercheData = datas
        //console.log(rechercheDataService.rechercheData)
        //console.log(datas)
       $state.go('app.tabs.listproperties');
    }
    $scope.getPosition = function () {
        navigator.geolocation.getCurrentPosition(function (pos) {
            $lat = pos.coords.latitude
            $lng = pos.coords.longitude
            console.log("lat : " + $lat + "long : " + $lng)
            geocoder = new google.maps.Geocoder(); //module pour récupérer un nom en fonction des coordonnées GPS
            var latlng = new google.maps.LatLng($lat, $lng);
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log("adresse : " + results[0].formatted_address)
                    $scope.rechercheData.localisation = results[0].formatted_address
                    document.getElementById("localisationInput").value = results[0].formatted_address
                }
                else {
                    console.log("Geocoder failed due to: " + status);
                }
            });
        });
    }
})