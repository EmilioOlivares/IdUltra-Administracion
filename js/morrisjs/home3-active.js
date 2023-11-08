(function ($) {
 "use strict";
 Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2012',
            Python: 0,
            PHP: 0,
            Java: 0
        }, {
            period: '2013',
            Python: 100,
            PHP: 80,
            Java: 65
        }, {
            period: '2014',
            Python: 180,
            PHP: 150,
            Java: 120
        }, {
            period: '2015',
            Python: 100,
            PHP: 70,
            Java: 40
        }, {
            period: '2016',
            Python: 180,
            PHP: 150,
            Java: 120
        }, {
            period: '2017',
            Python: 100,
            PHP: 70,
            Java: 40
        },
         {
            period: '2018',
            Python: 180,
            PHP: 150,
            Java: 120
        }],
        xkey: 'period',
        ykeys: ['Python', 'PHP', 'Java'],
        labels: ['Python', 'PHP', 'Java'],
        pointSize: 0,
        fillOpacity: 0.95,
        pointStrokeColors:['#65b12d', '#933EC5 ', '#006DF0'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth:0,
        hideHover: 'auto',
        lineColors: ['#65b12d', '#933EC5 ', '#006DF0'],
        resize: true
        
    });
	
Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            period: '2023-05',
            Producción: 75,
            Ventas: 28,
            Finanzas: 68
        }, {
            period: '2023-06',
            Producción: 82,
            Ventas: 32,
            Finanzas: 70
        }, {
            period: '2023-07',
            Producción: 80,
            Ventas: 36,
            Finanzas: 70
        }, {
            period: '2023-08',
            Producción: 89,
            Ventas: 40,
            Finanzas: 68
        }, {
            period: '2023-09',
            Producción: 92,
            Ventas: 44,
            Finanzas: 72
        }, {
            period: '2023-10',
            Producción: 94,
            Ventas: 47,
            Finanzas: 80
        },
         {
            period: '2023-11',
            Producción: 95,
            Ventas: 50,
            Finanzas: 85
        }],
        xkey: 'period',
        ykeys: ['Producción', 'Ventas', 'Finanzas'],
        labels: ['Producción', 'Ventas', 'Finanzas'],
        barColors:['#006DF0', '#933EC5', '#65b12d'],
        hideHover: 'auto',
        barSizeRatio:0.45,
        gridLineColor: '#eef0f2',
        resize: true
    });

	
	
})(jQuery); 