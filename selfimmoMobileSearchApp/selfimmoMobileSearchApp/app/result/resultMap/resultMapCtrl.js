angular.module('resultMapCtrl', [])

.controller('MapPropertiesCtrl', function ($scope, $state, $stateParams, $timeout, $ionicLoading, rechercheDataService) {

    $scope.listbiens = [
       { title: 'Bien1', id: 0, img: "http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg", resume: 'Quam brevi appellatur hoc amicorum.', content: "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue.Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue." },
        { title: 'Bien2', id: 1, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.', content: "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue.Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue." },
        { title: 'Bien3', id: 2, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.', content: "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue.Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue." },
        { title: 'Bien4', id: 3, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.', content: "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue.Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue." },
        { title: 'Bien5', id: 4, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.', content: "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue.Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue." },
        { title: 'Bien6', id: 5, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.', content: "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue.Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue." }
    ];
    $scope.init = function () {
        coordRecherche = rechercheDataService.coordRecherche
        var mapDiv = document.getElementById("mapCanvasProperties")
        var latlng = new google.maps.LatLng(46.779231, 6.659431);
        //objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
        //de définir des options d'affichage de notre carte
        var options = {
            center: latlng,
            zoom: 19,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapDiv, options)
        map.setCenter(coordRecherche);
            var myLocation = new google.maps.Marker({
                position: coordRecherche,
                map: map,
                title: "My Location"
            });

        $scope.mapCanvasProperties = map
    }
    $scope.init();
})