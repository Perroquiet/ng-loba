(function(){
	"use strict";
	angular
		.module("productManagement")
		.controller("ProductListCtrl",
					 ["productResource", ProductListCtrl]);

	function ProductListCtrl(productResource) {
		var vm = this;
		/*
        vm.products = [
            {
                'productId': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2009',
                'description': 'Leaf rake with 48-inch handle.',
                'cost': 9.00,
                'price': 19.95,
                'category': 'garden',
                'tags': [ 'leaf', 'tool'],
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Leaf_Rake.png'
            },{
                'productId': 5,
                'productName': 'Hammer',
                'productCode': 'TBX-0048',
                'releaseDate': 'May 21, 2013',
                'description': 'Curved claw steel hammer',
                'cost': 1.00,
                'price': 8.99,
                'category': 'toolbox',
                'tags': [ 'tool'],
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
            }];
        */

        productResource.query(function(data) {
            vm.products = data;
        });


        vm.showImage = false;
        vm.toggleImage = function() {
        	vm.showImage = !vm.showImage;
        }
	}
}())