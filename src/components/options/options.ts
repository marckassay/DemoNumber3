import { Component, Input, ViewChild } from '@angular/core';

/**
 * Generated class for the OptionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'options',
  templateUrl: 'options.html'
})
export class OptionsComponent {
  @ViewChild('title')
  title: string;

  constructor() {
    console.log('Hello OptionsComponent Component');
    this.title = 'Hello OptionsComponent Component';
  }

}
