
import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { Language } from './models/language.class';
import { NameOption } from './models/name-option.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = "Name Generator";
    languageOptions: NameOption [] = [];
    languages: { [key:string]:Language; } = {};

    constructor ( private languageService: LanguageService ) {}

    ngOnInit ()
    {
        this.languageService.getLanguageOptions ().then ( options =>
            this.languageOptions = options );
    }
};
