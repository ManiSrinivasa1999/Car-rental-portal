(document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var MODEL = {};
        var VIEW_1 = {
            render: function () {
            },
            init: function () {
                VIEW_1.render();
            }
        };
        var CONTROLLER = {
            init: function () {
                VIEW_1.init();
            }
        };
        CONTROLLER.init();
    }
})();
