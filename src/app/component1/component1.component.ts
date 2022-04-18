import { Component, OnInit } from '@angular/core';
import { ApicallerService } from '../apicaller.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  apiresponse: any;
  editRes: any;
  constructor(private _apicaller: ApicallerService) {}

  ngOnInit(): void {
    this._apicaller.getData(2).subscribe((data: any[]) => {
      console.log(data);
      this.apiresponse = data;
    });
    this._apicaller.getData(1).subscribe((data: any[]) => {
      console.log(data);
      this.apiresponse = data;
    });
    this._apicaller.getData(1).subscribe((data: any[]) => {
      console.log(data);
      this.apiresponse = data;
    });
    this._apicaller.getData(1).subscribe((data: any[]) => {
      console.log(data);
      this.apiresponse = data;
    });
    this._apicaller.getData(3).subscribe((data: any[]) => {
      console.log(data);
      this.apiresponse = data;
    });
  }
}
