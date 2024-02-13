import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonList,IonButtons,IonBackButton,IonButton } from '@ionic/angular/standalone';




@Component({
  selector: 'app-level3',
  templateUrl: './level3.page.html',
  styleUrls: ['./level3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonList,IonButtons,IonBackButton,IonButton]
})
export class Level3Page implements OnInit {

  public id:string | null = "";
  constructor() { }
 private actRoute = inject(ActivatedRoute);
  ngOnInit() {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.actRoute.snapshot.paramMap);
  }

}
