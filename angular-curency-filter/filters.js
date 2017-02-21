var app = angular.module("app", []);

app.controller("myctrl", function ($scope) {
      $scope.countries = "america";
      $scope.currencyValue = "5000";

});
app.filter("myfilter", function () {
      return function (coutry) {
            if (country === "india") {
                  return "INR"
            } else if (country === "america") {
                  return "US$"
            } else if (country === "singapore") {
                  return "s$"
            }


      }
});