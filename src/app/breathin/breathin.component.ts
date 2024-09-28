import { Component, OnInit } from '@angular/core';
import 'jquery';
declare var $: any;

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
    (document.getElementById("text") as HTMLElement).innerText = "Breathe In!";
    let circle = (document.getElementById("circle") as HTMLElement)
    circle.classList.remove("bazdam")
    circle.classList.add("dam")

    setTimeout(() => {
      this.hold();
    }, 2000);
  }

  hold() {
    (document.getElementById("text") as HTMLElement).innerText = "HOLD!";
    let circle = (document.getElementById("circle") as HTMLElement)
    circle.classList.remove("dam")
    circle.classList.add("hold")
    setTimeout(() => {
      this.bazdam();
    }, 1000);
  }

  bazdam() {
    (document.getElementById("text") as HTMLElement).innerText = "Breathe Out!";
    let circle = (document.getElementById("circle") as HTMLElement)
    circle.classList.remove("hold")
    circle.classList.add("bazdam")
    setTimeout(() => {
      this.dam();
    }, 2000);
  }
}
