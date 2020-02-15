(document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const MODEL = {};
        const VIEW = {
            render: () => {
            },
            init: () => {
                VIEW.render();
            },
        };
        const CONTROLLER = {
            init: () => {
                VIEW.init();
            },
        };
        CONTROLLER.init();
    }
})();
