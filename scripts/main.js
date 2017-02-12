
var fs = require ( 'fs' );
var path = require ( 'path' );
var yaml = require ( 'yamljs' );

function selectRandom ( coll )
{
    return coll [Math.floor(Math.random()*coll.length)];
}

var language = 'pv';
var languageConfig = yaml.load ( path.resolve ( __dirname, '..', 's3',
    'languages',
    language + '.yml' ) );

for ( var i = 0; i < languageConfig.options.length; ++i )
{
    var typeName = languageConfig.options [i].name;
    var typeSlug = languageConfig.options [i].slug;
    var subtypeString = selectRandom ( languageConfig.types [typeSlug] );
    var subtypeArray = subtypeString.split ( ' ' ); 
    var fullName = [];
    for ( var j = 0; j < subtypeArray.length; ++j )
    {

        var subtype = subtypeArray [j];
        var elementString = selectRandom ( languageConfig.subtypes [subtype] );
        var name = '';

        for ( var k = 0; k < elementString.length; ++k )
        {
            var element = elementString [k];
            var character = selectRandom ( languageConfig.elements [element] );

            name += character;
        }

        name = name [0].toUpperCase () + name.slice ( 1 );
        fullName.push ( name );
    }

    console.log ( typeName + ': ' + fullName.join ( ' ' ) );
}