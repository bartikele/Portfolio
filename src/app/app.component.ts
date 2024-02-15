import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Barti-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{

    this.languageService.initLanguage();


    this.titleService.setTitle( "Bartosz Worobiew | Portfolio" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer'},
      {name: 'description', content: 'Jestem uczniem szkoły średniej o profilu technik programista. Już od dziecka interesowało mnie programowanie. Moje pierwsze strony internetowe zaczynałem tworzyć w wieku 12 lat.'},
    ]);


    AOS.init();

  }
}
