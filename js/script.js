    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [43.24, 76.89],
            zoom: 13
        });

        DG.marker([43.24, 76.89]).addTo(map);
    });



