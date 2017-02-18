
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
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
    languageOptionsMenu: MenuItem [] = [];
    languages: { [key:string]:Language; } = {};

    constructor ( private languageService: LanguageService ) {}

    ngOnInit ()
    {
        this.languageService.getLanguageOptions ().then ( options => {
            this.languageOptions = options;
            for ( var i = 0; i < this.languageOptions.length; ++i )
                this.languageOptionsMenu.push ({
                    label: this.languageOptions [i].name,
                    routerLink: ['/language', this.languageOptions [i].slug] 
                });
        });
    }
};
