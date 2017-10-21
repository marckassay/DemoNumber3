import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
  encapsulation: ViewEncapsulation.None
})
export class LanguagePage {
  @ViewChild('title')
  title: string;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }

}
