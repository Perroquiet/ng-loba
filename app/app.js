/**
 * Created by Srikanth on 10/21/14.
 */

(function () {
    "use strict";
    // Define the main module
    var app = angular.module("productManagement",
                            ["common.services",
                                "ui.router",
                            "productResourceMock"]);

    app.config(["$stateProvider",
                function($stateProvider){
                    // Products
                    $stateProvider
                        .state("productList", {
                            url: "/products",
                            templateUrl: "app/products/productListView.html",
                            controller: "ProductListCtrl as vm"
                        });
                }]

    );
}());
