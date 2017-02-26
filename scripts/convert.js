
var fs = require ( 'fs' );
var path = require ( 'path' );
var yaml = require ( 'yamljs' );

var YAML_FILES = [
    path.resolve ( __dirname, '..', 's3', 'languages.yml' ),
    path.resolve ( __dirname, '..', 's3', 'languages', 'pv.yml' ),
    path.resolve ( __dirname, '..', 's3', 'languages', 'as.yml' ),
    path.resolve ( __dirname, '..', 's3', 'languages', 'rb.yml' )
];

for ( var i = 0; i < YAML_FILES.length; ++i )
{
    
    var yamlPath = YAML_FILES [i];
    var obj = yaml.load ( yamlPath );
    var jsonPath = yamlPath.slice ( 0, yamlPath.lastIndexOf ( '.' ) ) + '.json';

    fs.writeFileSync ( jsonPath, JSON.stringify ( obj ) );
}