
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Language } from '../../models/language.class';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'language',
    templateUrl: './language.component.html'
})
export class LanguageComponent implements OnInit {

    private currentNames: string [] = [];
    private isReady: boolean = false;
    private language: Language = null;

    constructor (
        private route: ActivatedRoute,
        private languageService: LanguageService ) {}
    
    ngOnInit ()
    {
        this.route.params.subscribe ( params => {
            var langSlug: string = params ['lang'];
            console.log ( langSlug );
            return this.languageService.getLanguage ( langSlug )
            .then ( lang => {
                this.language = lang;
                this.isReady = true;
            });
        });
    }
};
