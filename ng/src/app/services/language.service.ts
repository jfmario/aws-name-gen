
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Language } from '../models/language.class';
import { LanguageConfig } from '../models/language-config.class';
import { NameOption } from '../models/name-option.class';

@Injectable()
export class LanguageService
{

    private _url: string =
        'https://s3.amazonaws.com/johnfmarion-configs/name-gen/';
    
    constructor ( private http: Http ) {}

    public getLanguageOptions (): Promise <NameOption[]>
    {
        return this.http.get ( this._url + 'languages.json' ).toPromise ()
        .then ( res => {
            var data = res.json ();
            var options = [];
            for ( var i = 0; i < data.length; ++i )
                options.push ( data [i] );
            return options;
        });
    }
}