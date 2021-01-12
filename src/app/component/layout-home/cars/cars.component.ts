import { Component, OnInit } from '@angular/core';
import { CarsModel, ListCarsModel } from 'src/app/model/cars/cars.model';
import { CarsService } from 'src/app/service/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: CarsModel;
  carsList: ListCarsModel[];
  displayedColumns: string[] = ['fullName', 'code3', 'mobile'];
  constructor(private _carsService: CarsService,) { this.list(); }

  ngOnInit() {
   

  }

  list(): void {
    this._carsService.carsList().subscribe(data => {
      this.carsList = data.map(e => {

     
        let t = e.payload.doc.data();
        return {
          id: e.payload.doc.id,
          cars: e.payload.doc.data() as CarsModel,
        

        };


      })

    })

  }


}
