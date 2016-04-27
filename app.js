(function(){
  var app = angular.module('gemStore', []); //angular module (gemStore=applicationName, [] is the dependencies)
    app.controller('StoreController', function(){ //controller to pulldata into webpage
      this.products = gems;
    });
      var gems= [
      {
          name: 'Azurite', //just an object
          price: 2.95 ,
          description: "This is Amazing Gem. Designed by Vijay",
          canPurchase: false, //hide it on webpage
          soldOut:true, //ture hide it webpage
        }
      {
          name: 'Heidi', //just an object
          price: 200.95 ,
          description: "This is Amazing Gem. Designed by  and forVijay",
          canPurchase: false, //hide it on webpage
          soldOut:true, //ture hide it webpage
        }
        {
            name: 'Heidi Patha', //just an object
            price: 2000.95 ,
            description: "This is Amazing Gem. Designed by  and forVijay",
            canPurchase: false, //hide it on webpage
            soldOut:true, //ture hide it webpage
        }
      ];
})();
