angular.module('resultCardCtrl', [])

.controller('CardPropertiesCtrl', function ($scope, TDCardDelegate) {
    var cardTypes = [
      { title: 'Bien1', id: 0, img: "http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg", resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien2', id: 1, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien3', id: 2, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien4', id: 3, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien5', id: 4, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien6', id: 5, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' }
    ];
    $scope.cardDestroyed = function (index) {
        $scope.cards.splice(index, 1);
    };

    $scope.addCard = function () {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.unshift(angular.extend({}, newCard));
    }

    $scope.cards = [];
    for (var i = 0; i < 5; i++) $scope.addCard();
})

.controller('CardCtrl', function ($scope, TDCardDelegate) {
    $scope.cardSwipedLeft = function (index) {
        console.log('LEFT SWIPE');
        $scope.addCard();
    };
    $scope.cardSwipedRight = function (index) {
        console.log('RIGHT SWIPE');
        $scope.addCard();
    };
})