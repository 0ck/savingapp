angular.module('resultCtrl', [])

.controller('ListpropertiesCtrl', function ($scope, $ionicLoading) {
    $scope.listbiens = [
      { title: 'Bien1', id: 0, img: "http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg", resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien2', id: 1, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien3', id: 2, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien4', id: 3, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien5', id: 4, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien6', id: 5, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' }
    ];
})