var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_comunas_cali_1 = new ol.format.GeoJSON();
var features_comunas_cali_1 = format_comunas_cali_1.readFeatures(json_comunas_cali_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_cali_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_cali_1.addFeatures(features_comunas_cali_1);
var lyr_comunas_cali_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_cali_1, 
                style: style_comunas_cali_1,
                popuplayertitle: "comunas_cali",
                interactive: true,
                title: '<img src="styles/legend/comunas_cali_1.png" /> comunas_cali'
            });
var format_eds_cali_2 = new ol.format.GeoJSON();
var features_eds_cali_2 = format_eds_cali_2.readFeatures(json_eds_cali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eds_cali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eds_cali_2.addFeatures(features_eds_cali_2);
var lyr_eds_cali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eds_cali_2, 
                style: style_eds_cali_2,
                popuplayertitle: "eds_cali",
                interactive: true,
                title: '<img src="styles/legend/eds_cali_2.png" /> eds_cali'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_comunas_cali_1.setVisible(true);lyr_eds_cali_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_comunas_cali_1,lyr_eds_cali_2];
lyr_comunas_cali_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMUNA': 'COMUNA', 'NOMBRE': 'NOMBRE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_eds_cali_2.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'eds_nombre': 'eds_nombre', 'eds_direcc': 'eds_direcc', 'eds_empres': 'eds_empres', });
lyr_comunas_cali_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COMUNA': 'TextEdit', 'NOMBRE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_eds_cali_2.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'eds_nombre': 'TextEdit', 'eds_direcc': 'TextEdit', 'eds_empres': 'TextEdit', });
lyr_comunas_cali_1.set('fieldLabels', {'OBJECTID': 'no label', 'COMUNA': 'no label', 'NOMBRE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_eds_cali_2.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'eds_nombre': 'no label', 'eds_direcc': 'no label', 'eds_empres': 'no label', });
lyr_eds_cali_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});