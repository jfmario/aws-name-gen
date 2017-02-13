
import { LanguageConfig } from './language-config.class';

export class Language
{

    constructor ( public conf: LanguageConfig ) {}

    private _selectRandom ( coll: any ): any
    {
        return coll [Math.floor(Math.random()*coll.length)];
    }

    public getName ( typeSlug: string ): string
    {
        
        var typeOptions: any = this.conf.types [typeSlug];
        var subtypeString: string = this._selectRandom ( typeOptions );
        var subtypeArray: string [] = subtypeString.split ( ' ' );
        var fullName: string [] = [];
        for ( var i = 0; i < subtypeArray.length; ++i )
        {

            var subtype: string = subtypeArray [i];
            var elementString: string = this._selectRandom (
                this.conf.subtypes [subtype] );
            var name: string = '';
            for ( var j = 0; j < elementString.length; ++j )
            {

                var element: string = elementString [j];
                var character: string = this._selectRandom (
                    this.conf.elements [element] );
                
                name += element;
            }

            name = name [0].toUpperCase () + name.slice ( 1 );
            fullName.push ( name );
        }

        return fullName.join ( ' ' );
    }
};