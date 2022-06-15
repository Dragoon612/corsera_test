(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)//to buy
.controller('AlreadyBoughtController', AlreadyBoughtController)//bought
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//buy list
ToBuyController.$inject= ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getBuyItems();
    toBuy.buy = function(index){
        ShoppingListCheckOffService.buyItem(index);
    };
}

//bought list
AlreadyBoughtController.inject= ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBought();
}


//check off and initalize
function ShoppingListCheckOffService(){
var service = this;
var toBuyItems =[
    { name: "cookies", quantity: 10 },
    { name: "rocky road", quantity: 2 },
    { name: "tea", quantity: 20 },
    { name: "water", quantity: 21 },
    { name: "paper towels", quantity: 4 }
    ];

    var boughtItems = [];

    service.buyItem= function(index){
           boughtItems.push(toBuyItems[index]);
           toBuyItems.splice(index, 1);
    };

    service.getBuyItems = function(){
        return toBuyItems;
    };

    service.getBought = function(){
        return boughtItems;
    };

};






})();