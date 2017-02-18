
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { SelectItem } from 'primeng/primeng';

import { Language } from '../../models/language.class';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'language',
    templateUrl: './language.component.html'
})
export class LanguageComponent implements OnInit {

    private amount: number = 10;
    private currentNames: string [] = [];
    private isReady: boolean = false;
    private language: Language = null;
    private options: SelectItem [] = [];
    private selectedOption: string;

    constructor (
        private route: ActivatedRoute,
        private languageService: LanguageService )
    {
        
    }

    generateNames ()
    {
        this.currentNames = [];
        for ( var i = 0; i < this.amount; ++i )
            this.currentNames.push ( this.language.getName (
                this.selectedOption ) );
    }
    
    ngOnInit ()
    {
        this.route.params.subscribe ( params => {
            var langSlug: string = params ['lang'];
            console.log ( langSlug );
            return this.languageService.getLanguage ( langSlug )
            .then ( lang => {
                this.language = lang;
                this.options = [{
                    label: "Select Name Type",
                    value: null
                }];
                for ( var i = 0; i < this.language.conf.options.length; ++i )
                {
                    this.options.push ({
                        label: this.language.conf.options [i].name,
                        value: this.language.conf.options [i].slug
                    });
                }
                this.isReady = true;
            });
        });
    }
};
