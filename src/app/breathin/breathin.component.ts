import { Component, OnInit } from '@angular/core';
import 'jquery';
declare var $: JQueryStatic;
declare var jQuery: JQueryStatic;

@Component({
  selector: 'app-breathin',
  templateUrl: './breathin.component.html',
  styleUrls: ['./breathin.component.scss'],
})
export class BreathinComponent implements OnInit {
  ngOnInit(): void {
    this.dam();
   
  }
  dam() {
    $('#text').text('Breathe In!');
    $('#circle').addClass('dam');
    setTimeout(() => {
      this.hold();
    }, 2000);
  }

  hold() {
    $('#text').text('HOLD!');
    $('#circle').addClass('hold');
    setTimeout(() => {
      this.bazdam();
    }, 1000);
  }

  bazdam() {
    $('#text').text('Breathe Out!');
    $('#circle').addClass('bazdam');

    setTimeout(() => {
      this.dam();
    }, 2000);
  }
}
