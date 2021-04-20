import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.css"]
})
export class HomePage {
  la: number;
  lt: number;
  ir: number;

  tip: number;
  tap: number;
  mp: number;

  constructor(public navCtrl: NavController) {}

  calculatePLC() {
    this.tip = ((this.la * this.ir) / 100) * this.lt;
    this.tip = parseFloat(this.tip.toFixed(2));

    this.tap = ((this.la * 100)/100) + ((this.tip * 100)/100);
    this.tap = parseFloat(this.tap.toFixed(2));

    this.mp = this.tap / this.lt;
    this.mp = parseFloat(this.mp.toFixed(2));
  }
}
