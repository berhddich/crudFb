import { Component, OnInit } from '@angular/core';
import { ProfilsModel, ListProfilsodel } from 'src/app/model/profils/profils.model';
import { ProfilsService } from 'src/app/service/profils.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {

  profils: ProfilsModel;
  profilsList: ListProfilsodel[];
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'nationalite', 'email', 'phoneNumber'];

  constructor(private _profilsService: ProfilsService,) {   this.list();
  }

  ngOnInit() {    console.log("redfdfd")
  }



  list(): void {
    this._profilsService.profilList().subscribe(data => {
      this.profilsList = data.map(e => {


        let t = e.payload.doc.data();
        return {
          id: e.payload.doc.id,
          profil: e.payload.doc.data() as ProfilsModel,


        };


      })

    })


  }


}
