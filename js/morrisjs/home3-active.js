(function ($) {
 "use strict";
 Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2023-05',
            Conexión_SSL_TLS: 85,
            Autenticación_Doble_Fact: 72,
            Duración_de_Sesión: 70
        }, {
            period: '2023-06',
            Conexión_SSL_TLS: 88,
            Autenticación_Doble_Fact: 75,
            Duración_de_Sesión: 73
        }, {
            period: '2023-07',
            Conexión_SSL_TLS: 88,
            Autenticación_Doble_Fact: 75,
            Duración_de_Sesión: 74
        }, {
            period: '2023-08',
            Conexión_SSL_TLS: 90,
            Autenticación_Doble_Fact: 78,
            Duración_de_Sesión: 77
        }, {
            period: '2023-09',
            Conexión_SSL_TLS: 92,
            Autenticación_Doble_Fact: 80,
            Duración_de_Sesión: 78
        }, {
            period: '2023-10',
            Conexión_SSL_TLS: 92,
            Autenticación_Doble_Fact: 82,
            Duración_de_Sesión: 80
        }, {
            period: '2023-11',
            Conexión_SSL_TLS: 95,
            Autenticación_Doble_Fact: 85,
            Duración_de_Sesión: 83
        }],
        xkey: 'period',
        ykeys: ['Conexión_SSL_TLS', 'Autenticación_Doble_Fact', 'Duración_de_Sesión'],
        labels: ['Conexión_SSL_TLS', 'Autenticación_Doble_Fact', 'Duración_de_Sesión'],
        pointSize: 0,
        fillOpacity: 0.99,
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