(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = [];

    function ShoppingListController() {
        var list = this;

        list.toBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "soda", quantity: 3 },
            { name: "candy", quantity: 4 },
            { name: "milk", quantity: 2 }
        ];

        list.alreadyBought = [];

        list.buyItem = function (index) {
            var item = list.toBuy.splice(index, 1)[0];
            list.alreadyBought.push(item);
        };
    }
})();
