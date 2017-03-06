define(['backbone', 'AppRouter'], function (Backbone, AppRouter) {

    var initialize = function () {
        // app router
        var router = new AppRouter();
        Backbone.history.start({
            //pushState: true,
            /*Comment for Hiding /dsportal on URL*/
            // root: '/dsportal/'
            root: '/'
        });

        console.log("AppRouter....");

        $(document).on("click", "a[href]", function (event) {
            event.preventDefault();
            router.navigate($(event.currentTarget).attr("href"), {
                trigger: true
            });
        });
    };

    return {
        initialize: initialize
    }
});
