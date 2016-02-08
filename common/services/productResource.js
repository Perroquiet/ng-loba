/**
 * Created by Srikanth on 10/21/14.
 */

(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                    productResource]);

    function productResource($resource){
        return $resource("/api/products/:productId");
    }

}());
